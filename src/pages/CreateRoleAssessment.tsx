import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmployerHeader } from "@/components/employer/EmployerHeader";
import { AssessmentPreview } from "@/components/employer/AssessmentPreview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const roleSchema = z.object({
  companyName: z.string().trim().min(1, "Company name is required").max(100),
  roleTitle: z.string().trim().min(1, "Role title is required").max(100),
  experienceLevel: z.string().min(1, "Experience level is required"),
  skills: z.array(z.string()).min(1, "At least one skill is required"),
  assessmentFormat: z.string().min(1, "Assessment format is required"),
  minScore: z.number().min(0).max(100, "Score must be between 0 and 100"),
  validity: z.string().min(1, "Validity period is required"),
});

const availableSkills = [
  "Python", "JavaScript", "SQL", "React", "Node.js", "Java",
  "C++", "DSA", "System Design", "Communication", "Leadership",
  "Figma", "Product Management", "Data Analysis", "Excel"
];

const CreateRoleAssessment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    roleTitle: "",
    experienceLevel: "",
    skills: [] as string[],
    assessmentFormat: "",
    minScore: 80,
    validity: "",
  });
  const [skillInput, setSkillInput] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleAddSkill = (skill: string) => {
    if (skill && !formData.skills.includes(skill)) {
      setFormData({ ...formData, skills: [...formData.skills, skill] });
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skillToRemove),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      roleSchema.parse(formData);
      setErrors({});
      
      toast({
        title: "Assessment Created!",
        description: "Redirecting to candidate list...",
      });
      
      setTimeout(() => {
        navigate("/employer/candidates", { state: { roleData: formData } });
      }, 1000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        toast({
          title: "Validation Error",
          description: "Please check all required fields",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <EmployerHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">
              Create a Role Assessment Request
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Define the role requirements and generate a standardized assessment
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 shadow-card border border-border space-y-6">
              {/* Company Name */}
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="Enter company name"
                  maxLength={100}
                />
                {errors.companyName && (
                  <p className="text-sm text-destructive">{errors.companyName}</p>
                )}
              </div>

              {/* Role Title */}
              <div className="space-y-2">
                <Label htmlFor="roleTitle">Role Title</Label>
                <Input
                  id="roleTitle"
                  value={formData.roleTitle}
                  onChange={(e) => setFormData({ ...formData, roleTitle: e.target.value })}
                  placeholder="e.g., Software Engineer, Product Manager"
                  maxLength={100}
                />
                {errors.roleTitle && (
                  <p className="text-sm text-destructive">{errors.roleTitle}</p>
                )}
              </div>

              {/* Experience Level */}
              <div className="space-y-2">
                <Label htmlFor="experienceLevel">Experience Level</Label>
                <Select
                  value={formData.experienceLevel}
                  onValueChange={(value) => setFormData({ ...formData, experienceLevel: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Internship">Internship</SelectItem>
                    <SelectItem value="Entry-Level">Entry-Level</SelectItem>
                    <SelectItem value="1-3 years">1-3 years</SelectItem>
                    <SelectItem value="3-5 years">3-5 years</SelectItem>
                    <SelectItem value="Senior">Senior</SelectItem>
                  </SelectContent>
                </Select>
                {errors.experienceLevel && (
                  <p className="text-sm text-destructive">{errors.experienceLevel}</p>
                )}
              </div>

              {/* Skills Required */}
              <div className="space-y-2">
                <Label htmlFor="skills">Skills Required</Label>
                <div className="flex gap-2">
                  <Select value={skillInput} onValueChange={setSkillInput}>
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Select skills" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableSkills.map((skill) => (
                        <SelectItem key={skill} value={skill}>
                          {skill}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button
                    type="button"
                    onClick={() => skillInput && handleAddSkill(skillInput)}
                    variant="outline"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="rounded-full pl-3 pr-2 py-1">
                      {skill}
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(skill)}
                        className="ml-2 hover:bg-destructive/20 rounded-full p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                {errors.skills && (
                  <p className="text-sm text-destructive">{errors.skills}</p>
                )}
              </div>

              {/* Assessment Format */}
              <div className="space-y-2">
                <Label>Assessment Format</Label>
                <RadioGroup
                  value={formData.assessmentFormat}
                  onValueChange={(value) => setFormData({ ...formData, assessmentFormat: value })}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="MCQ Test" id="mcq" />
                    <Label htmlFor="mcq" className="font-normal cursor-pointer">MCQ Test</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Coding Challenge" id="coding" />
                    <Label htmlFor="coding" className="font-normal cursor-pointer">Coding Challenge</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Case Study" id="case" />
                    <Label htmlFor="case" className="font-normal cursor-pointer">Case Study</Label>
                  </div>
                </RadioGroup>
                {errors.assessmentFormat && (
                  <p className="text-sm text-destructive">{errors.assessmentFormat}</p>
                )}
              </div>

              {/* Min Score */}
              <div className="space-y-2">
                <Label htmlFor="minScore">Minimum Score Cutoff (%)</Label>
                <Input
                  id="minScore"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.minScore}
                  onChange={(e) => setFormData({ ...formData, minScore: parseInt(e.target.value) || 0 })}
                />
                {errors.minScore && (
                  <p className="text-sm text-destructive">{errors.minScore}</p>
                )}
              </div>

              {/* Validity */}
              <div className="space-y-2">
                <Label htmlFor="validity">Credential Validity</Label>
                <Select
                  value={formData.validity}
                  onValueChange={(value) => setFormData({ ...formData, validity: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select validity period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6 months">6 months</SelectItem>
                    <SelectItem value="12 months">12 months</SelectItem>
                  </SelectContent>
                </Select>
                {errors.validity && (
                  <p className="text-sm text-destructive">{errors.validity}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full font-semibold"
              >
                Submit & Generate Assessment
              </Button>
            </form>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-1">
            <AssessmentPreview {...formData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateRoleAssessment;
