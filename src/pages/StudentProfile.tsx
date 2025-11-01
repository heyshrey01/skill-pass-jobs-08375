import { useParams, useNavigate } from "react-router-dom";
import { EmployerHeader } from "@/components/employer/EmployerHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  User,
  MapPin,
  GraduationCap,
  CheckCircle2,
  FileText,
  Linkedin,
  Calendar,
  Award,
  Building2,
  ArrowLeft,
} from "lucide-react";

// Mock data - in real app, this would come from API
const studentData = {
  name: "Aarav Shah",
  profileImage: "",
  university: "Indian Institute of Technology, Delhi",
  location: "Mumbai, Maharashtra",
  email: "aarav.shah@example.com",
  qualificationBadge: {
    title: "Software Engineer",
    status: "Qualified",
    validTill: "June 2026",
  },
  coreSkills: [
    { name: "DSA", score: 92, category: "Technical" },
    { name: "Python", score: 88, category: "Programming" },
    { name: "SQL", score: 81, category: "Database" },
    { name: "System Design", score: 74, category: "Technical" },
  ],
  assessmentHistory: [
    {
      title: "Software Engineer Assessment",
      date: "November 2025",
      score: 92,
      status: "Passed",
      skills: ["DSA", "Python", "SQL"],
    },
    {
      title: "Backend Developer Assessment",
      date: "October 2025",
      score: 85,
      status: "Passed",
      skills: ["Node.js", "MongoDB", "API Design"],
    },
    {
      title: "Full Stack Developer Assessment",
      date: "September 2025",
      score: 88,
      status: "Passed",
      skills: ["React", "Node.js", "PostgreSQL"],
    },
  ],
  eligibleCompanies: [
    { name: "Google", logo: "🔍" },
    { name: "Microsoft", logo: "🪟" },
    { name: "Amazon", logo: "📦" },
    { name: "Meta", logo: "📘" },
    { name: "Netflix", logo: "🎬" },
    { name: "Apple", logo: "🍎" },
    { name: "Spotify", logo: "🎵" },
    { name: "Stripe", logo: "💳" },
  ],
  resumeUrl: "#",
  linkedinUrl: "#",
};

const StudentProfile = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-blue-600";
    if (score >= 70) return "text-yellow-600";
    return "text-orange-600";
  };

  const getProgressColor = (score: number) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 80) return "bg-blue-500";
    if (score >= 70) return "bg-yellow-500";
    return "bg-orange-500";
  };

  return (
    <div className="min-h-screen bg-background">
      <EmployerHeader />

      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Candidates
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header Card */}
            <Card className="rounded-3xl shadow-card border-border">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Avatar */}
                  <Avatar className="h-32 w-32 border-4 border-primary">
                    <AvatarImage src={studentData.profileImage} alt={studentData.name} />
                    <AvatarFallback className="bg-primary/10 text-4xl">
                      <User className="h-16 w-16 text-primary" />
                    </AvatarFallback>
                  </Avatar>

                  {/* Profile Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold text-foreground mb-2">
                          {studentData.name}
                        </h1>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <GraduationCap className="h-4 w-4" />
                            <span className="text-sm">{studentData.university}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{studentData.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Qualification Badge */}
                    <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg font-bold text-green-900">
                              ✅ Qualified – {studentData.qualificationBadge.title}
                            </span>
                          </div>
                          <p className="text-sm text-green-700">
                            Valid till {studentData.qualificationBadge.validTill}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant="outline"
                        className="rounded-full"
                        onClick={() => window.open(studentData.resumeUrl, "_blank")}
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        View Resume
                      </Button>
                      <Button
                        variant="outline"
                        className="rounded-full"
                        onClick={() => window.open(studentData.linkedinUrl, "_blank")}
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Core Skill Scores */}
            <Card className="rounded-3xl shadow-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Core Skill Scores
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {studentData.coreSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-foreground">
                          {skill.name}
                        </span>
                        <Badge variant="secondary" className="rounded-full text-xs">
                          {skill.category}
                        </Badge>
                      </div>
                      <span className={`font-bold text-lg ${getScoreColor(skill.score)}`}>
                        {skill.score}%
                      </span>
                    </div>
                    <div className="relative">
                      <Progress value={skill.score} className="h-3" />
                      <style>
                        {`
                          .skill-progress-${index} [data-state="complete"] {
                            background-color: ${
                              skill.score >= 90
                                ? "#22c55e"
                                : skill.score >= 80
                                ? "#3b82f6"
                                : skill.score >= 70
                                ? "#eab308"
                                : "#f97316"
                            };
                          }
                        `}
                      </style>
                      <div className={`skill-progress-${index} absolute inset-0`}>
                        <Progress value={skill.score} className="h-3" />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Assessment History */}
            <Card className="rounded-3xl shadow-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Assessment History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentData.assessmentHistory.map((assessment, index) => (
                    <div
                      key={index}
                      className="border border-border rounded-2xl p-4 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {assessment.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {assessment.date}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant={
                              assessment.status === "Passed" ? "default" : "secondary"
                            }
                            className="rounded-full mb-1"
                          >
                            {assessment.status}
                          </Badge>
                          <p className={`font-bold text-lg ${getScoreColor(assessment.score)}`}>
                            {assessment.score}%
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {assessment.skills.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="rounded-full text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Eligible Companies */}
              <Card className="rounded-3xl shadow-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Building2 className="h-5 w-5 text-primary" />
                    Eligible to Apply At
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-normal">
                    Companies where {studentData.name.split(" ")[0]} can apply
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {studentData.eligibleCompanies.map((company, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 border border-border rounded-xl hover:bg-muted/50 transition-colors cursor-pointer"
                      >
                        <span className="text-4xl mb-2">{company.logo}</span>
                        <span className="text-xs font-medium text-center">
                          {company.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="rounded-3xl shadow-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Assessments Passed
                    </span>
                    <span className="font-bold text-lg text-foreground">
                      {studentData.assessmentHistory.length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Average Score
                    </span>
                    <span className="font-bold text-lg text-green-600">
                      {Math.round(
                        studentData.assessmentHistory.reduce(
                          (acc, curr) => acc + curr.score,
                          0
                        ) / studentData.assessmentHistory.length
                      )}
                      %
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Eligible Companies
                    </span>
                    <span className="font-bold text-lg text-foreground">
                      {studentData.eligibleCompanies.length}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentProfile;

