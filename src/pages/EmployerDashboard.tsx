import { useNavigate } from "react-router-dom";
import { EmployerHeader } from "@/components/employer/EmployerHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Plus,
  Users,
  ClipboardList,
  TrendingUp,
  CheckCircle2,
  Clock,
  Target,
} from "lucide-react";

const EmployerDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Active Roles",
      value: "3",
      change: "+1 this month",
      icon: ClipboardList,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Qualified Candidates",
      value: "24",
      change: "+8 this week",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Assessments Sent",
      value: "156",
      change: "+12 today",
      icon: Target,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Hire Rate",
      value: "68%",
      change: "+5% from last month",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  const recentRoles = [
    {
      title: "Software Engineer",
      company: "Acme Corp",
      candidates: 8,
      minScore: 80,
      status: "Active",
      posted: "2 days ago",
    },
    {
      title: "Senior Backend Developer",
      company: "Acme Corp",
      candidates: 12,
      minScore: 85,
      status: "Active",
      posted: "1 week ago",
    },
    {
      title: "Frontend Developer",
      company: "Acme Corp",
      candidates: 4,
      minScore: 75,
      status: "Active",
      posted: "2 weeks ago",
    },
  ];

  const recentCandidates = [
    { name: "Aarav Shah", role: "Software Engineer", score: 92, status: "Qualified" },
    { name: "Priya Patel", role: "Software Engineer", score: 88, status: "Qualified" },
    { name: "Rohan Kumar", role: "Backend Developer", score: 90, status: "Qualified" },
    { name: "Ananya Singh", role: "Frontend Developer", score: 85, status: "Qualified" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <EmployerHeader />

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <div className="mb-8 bg-gradient-hero rounded-3xl p-8 text-white">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="h-8 w-8" />
                <h1 className="text-3xl font-bold">Welcome back, Acme Corp</h1>
              </div>
              <p className="text-white/90 text-lg mb-6">
                Access pre-qualified talent and streamline your hiring process
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-full font-semibold"
                onClick={() => navigate("/employer/create-role")}
              >
                <Plus className="h-5 w-5 mr-2" />
                Post a New Role
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="rounded-3xl shadow-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}
                  >
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
                <h3 className="text-sm text-muted-foreground mb-1">{stat.title}</h3>
                <p className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Roles */}
          <div className="lg:col-span-2">
            <Card className="rounded-3xl shadow-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <ClipboardList className="h-5 w-5 text-primary" />
                    Your Active Roles
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                    onClick={() => navigate("/employer/create-role")}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Role
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentRoles.map((role, index) => (
                    <div
                      key={index}
                      className="border border-border rounded-2xl p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                      onClick={() => navigate("/employer/candidates")}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground text-lg">
                            {role.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {role.company}
                          </p>
                        </div>
                        <Badge className="bg-green-500 rounded-full">
                          {role.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-foreground">
                            {role.candidates} candidates
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-muted-foreground" />
                          <span className="text-foreground">
                            Min Score: {role.minScore}%
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{role.posted}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Candidates */}
          <div className="lg:col-span-1">
            <Card className="rounded-3xl shadow-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="h-5 w-5 text-primary" />
                  Recent Candidates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentCandidates.map((candidate, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between p-3 border border-border rounded-xl hover:bg-muted/50 transition-colors cursor-pointer"
                      onClick={() =>
                        navigate(
                          `/employer/student/${candidate.name.toLowerCase().replace(/\s+/g, "-")}`
                        )
                      }
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-foreground text-sm">
                          {candidate.name}
                        </p>
                        <p className="text-xs text-muted-foreground mb-1">
                          {candidate.role}
                        </p>
                        <Badge
                          variant="secondary"
                          className="rounded-full text-xs"
                        >
                          Score: {candidate.score}%
                        </Badge>
                      </div>
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 rounded-full"
                  onClick={() => navigate("/employer/candidates")}
                >
                  View All Candidates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card className="rounded-3xl shadow-card border-border bg-gradient-card">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Quick Actions
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  className="h-auto py-4 rounded-2xl flex flex-col items-center gap-2"
                  onClick={() => navigate("/employer/create-role")}
                >
                  <Plus className="h-6 w-6 text-primary" />
                  <span className="font-semibold">Post New Role</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 rounded-2xl flex flex-col items-center gap-2"
                  onClick={() => navigate("/employer/candidates")}
                >
                  <Users className="h-6 w-6 text-primary" />
                  <span className="font-semibold">Browse Talent Pool</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 rounded-2xl flex flex-col items-center gap-2"
                >
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <span className="font-semibold">View Analytics</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default EmployerDashboard;

