import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ClipboardList,
  Clock,
  CheckCircle2,
  Calendar,
  Trophy,
  AlertCircle,
} from "lucide-react";

const mockAssessments = [
  {
    id: 1,
    title: "Software Engineer — Core DSA Test",
    status: "active",
    deadline: "5 Days Left",
    progress: 0,
    duration: "90 minutes",
    skills: ["DSA", "Python", "Problem Solving"],
    description: "Complete this assessment to qualify for software engineering roles",
  },
  {
    id: 2,
    title: "Full Stack Developer Assessment",
    status: "available",
    deadline: "Available Now",
    progress: 0,
    duration: "120 minutes",
    skills: ["React", "Node.js", "PostgreSQL"],
    description: "Showcase your full-stack development capabilities",
  },
  {
    id: 3,
    title: "Backend Engineer — System Design",
    status: "locked",
    deadline: "Complete DSA first",
    progress: 0,
    duration: "60 minutes",
    skills: ["System Design", "API Design", "Databases"],
    description: "Advanced assessment for backend engineering positions",
  },
  {
    id: 4,
    title: "Frontend Developer Assessment",
    status: "completed",
    deadline: "Completed Oct 2025",
    progress: 100,
    score: 88,
    duration: "90 minutes",
    skills: ["React", "JavaScript", "CSS"],
    description: "Frontend development assessment",
  },
  {
    id: 5,
    title: "Data Structures Fundamentals",
    status: "completed",
    deadline: "Completed Sep 2025",
    progress: 100,
    score: 92,
    duration: "60 minutes",
    skills: ["DSA", "Algorithms"],
    description: "Core data structures and algorithms",
  },
];

const Assessments = () => {
  const activeAssessments = mockAssessments.filter((a) => a.status === "active");
  const availableAssessments = mockAssessments.filter((a) => a.status === "available");
  const completedAssessments = mockAssessments.filter((a) => a.status === "completed");
  const lockedAssessments = mockAssessments.filter((a) => a.status === "locked");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-blue-500">Active</Badge>;
      case "available":
        return <Badge variant="secondary">Available</Badge>;
      case "locked":
        return <Badge variant="outline">Locked</Badge>;
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>;
      default:
        return null;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <Clock className="h-5 w-5 text-blue-500" />;
      case "available":
        return <ClipboardList className="h-5 w-5 text-muted-foreground" />;
      case "locked":
        return <AlertCircle className="h-5 w-5 text-muted-foreground" />;
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <ClipboardList className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">
              Your Assessments
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Browse and complete assessments to unlock opportunities
          </p>
        </div>

        <div className="space-y-8">
          {/* Active Assessments */}
          {activeAssessments.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-500" />
                Active Assessments
              </h2>
              <div className="grid gap-4">
                {activeAssessments.map((assessment) => (
                  <Card
                    key={assessment.id}
                    className="rounded-3xl shadow-card border-border hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                            {getStatusIcon(assessment.status)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-xl font-bold text-foreground">
                                {assessment.title}
                              </h3>
                              {getStatusBadge(assessment.status)}
                            </div>
                            <p className="text-muted-foreground mb-3">
                              {assessment.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {assessment.skills.map((skill, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="rounded-full"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {assessment.duration}
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {assessment.deadline}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button size="lg" className="rounded-full">
                          Start Assessment
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Available Assessments */}
          {availableAssessments.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-primary" />
                Available Assessments
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {availableAssessments.map((assessment) => (
                  <Card
                    key={assessment.id}
                    className="rounded-3xl shadow-card border-border hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          {getStatusIcon(assessment.status)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-bold text-foreground">
                              {assessment.title}
                            </h3>
                            {getStatusBadge(assessment.status)}
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {assessment.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {assessment.skills.map((skill, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="rounded-full text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              {assessment.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full rounded-full">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Completed Assessments */}
          {completedAssessments.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-green-500" />
                Completed Assessments
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {completedAssessments.map((assessment) => (
                  <Card
                    key={assessment.id}
                    className="rounded-3xl shadow-card border-border"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                          {getStatusIcon(assessment.status)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-bold text-foreground">
                              {assessment.title}
                            </h3>
                            {getStatusBadge(assessment.status)}
                          </div>
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl font-bold text-green-600">
                              {assessment.score}%
                            </span>
                            <Progress value={assessment.score} className="flex-1 h-2" />
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
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
                          <p className="text-sm text-muted-foreground">
                            {assessment.deadline}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Locked Assessments */}
          {lockedAssessments.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-muted-foreground" />
                Locked Assessments
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {lockedAssessments.map((assessment) => (
                  <Card
                    key={assessment.id}
                    className="rounded-3xl shadow-card border-border opacity-60"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                          {getStatusIcon(assessment.status)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-bold text-foreground">
                              {assessment.title}
                            </h3>
                            {getStatusBadge(assessment.status)}
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {assessment.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-3">
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
                          <p className="text-sm text-muted-foreground font-medium">
                            🔒 {assessment.deadline}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default Assessments;

