import { Badge } from "@/components/ui/badge";
import { Award, Clock, Target } from "lucide-react";

interface AssessmentPreviewProps {
  roleTitle: string;
  experienceLevel: string;
  skills: string[];
  validity: string;
  assessmentFormat: string;
}

export const AssessmentPreview = ({
  roleTitle,
  experienceLevel,
  skills,
  validity,
  assessmentFormat,
}: AssessmentPreviewProps) => {
  return (
    <div className="sticky top-24">
      <h3 className="text-lg font-bold text-foreground mb-4">
        Candidate Preview
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        This is how the assessment credential will appear to students
      </p>

      <div className="bg-gradient-hero rounded-2xl p-6 text-white shadow-soft">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h4 className="text-xl font-bold mb-2">
              {roleTitle || "Role Title"}
            </h4>
            <p className="text-white/80 text-sm">
              {experienceLevel || "Experience Level"}
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Award className="h-6 w-6" />
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Target className="h-4 w-4" />
            <span>Format: {assessmentFormat || "Not selected"}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4" />
            <span>Valid for: {validity || "Not selected"}</span>
          </div>
        </div>

        <div className="border-t border-white/20 pt-4">
          <p className="text-xs text-white/70 mb-2">Required Skills</p>
          <div className="flex flex-wrap gap-2">
            {skills.length > 0 ? (
              skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 rounded-full"
                >
                  {skill}
                </Badge>
              ))
            ) : (
              <span className="text-sm text-white/60">No skills selected</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
