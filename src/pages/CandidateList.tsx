import { useState } from "react";
import { useLocation } from "react-router-dom";
import { EmployerHeader } from "@/components/employer/EmployerHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Target, Edit, Search, Filter, UserCircle } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface Candidate {
  name: string;
  score: number;
  skills: { name: string; score: number }[];
  validTill: string;
  status: "Qualified" | "Pending Review";
}

const mockCandidates: Candidate[] = [
  {
    name: "Aarav Shah",
    score: 92,
    skills: [
      { name: "Python", score: 95 },
      { name: "SQL", score: 88 },
      { name: "DSA", score: 93 },
    ],
    validTill: "May 2026",
    status: "Qualified",
  },
  {
    name: "Priya Patel",
    score: 88,
    skills: [
      { name: "Python", score: 90 },
      { name: "SQL", score: 85 },
      { name: "DSA", score: 89 },
    ],
    validTill: "June 2026",
    status: "Qualified",
  },
  {
    name: "Rohan Kumar",
    score: 85,
    skills: [
      { name: "Python", score: 82 },
      { name: "SQL", score: 88 },
      { name: "DSA", score: 86 },
    ],
    validTill: "April 2026",
    status: "Qualified",
  },
];

const CandidateList = () => {
  const location = useLocation();
  const roleData = location.state?.roleData || {
    roleTitle: "Software Engineer",
    companyName: "Acme Corp",
    skills: ["Python", "SQL", "DSA"],
    minScore: 80,
    validity: "6 months",
  };

  const [minScoreFilter, setMinScoreFilter] = useState([roleData.minScore]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCandidates = mockCandidates.filter(
    (c) => c.score >= minScoreFilter[0] && c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <EmployerHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Qualified Candidates for {roleData.roleTitle}
          </h1>
          <p className="text-muted-foreground">
            Review candidates who meet your assessment criteria
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Summary Card */}
            <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {roleData.roleTitle}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {roleData.companyName}
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Required Skills</p>
                      <div className="flex flex-wrap gap-2">
                        {roleData.skills.map((skill: string, index: number) => (
                          <Badge key={index} variant="secondary" className="rounded-full">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Criteria</p>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Min Score: {roleData.minScore}%</p>
                        <p className="text-sm font-medium">Validity: {roleData.validity}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="rounded-full">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Role
                </Button>
              </div>
            </div>

            {/* Candidates Table */}
            <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-foreground">
                  Candidate Results ({filteredCandidates.length})
                </h3>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search candidates..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                </div>
              </div>

              {filteredCandidates.length > 0 ? (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Candidate Name</TableHead>
                        <TableHead>Assessment Score</TableHead>
                        <TableHead>Skill Breakdown</TableHead>
                        <TableHead>Valid Till</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredCandidates.map((candidate, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <UserCircle className="h-6 w-6 text-primary" />
                              </div>
                              {candidate.name}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <span className="font-bold text-lg">{candidate.score}%</span>
                              <Progress value={candidate.score} className="h-1 w-20" />
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {candidate.skills.map((skill, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="rounded-full text-xs"
                                >
                                  {skill.name} {skill.score}%
                                </Badge>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {candidate.validTill}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={candidate.status === "Qualified" ? "default" : "secondary"}
                              className="rounded-full"
                            >
                              {candidate.status === "Qualified" ? "✅" : "⏳"} {candidate.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm" className="rounded-full">
                              View Profile
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <UserCircle className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No candidates yet
                  </h3>
                  <p className="text-muted-foreground">
                    Once students pass this assessment, they'll appear here.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-3xl p-6 shadow-card border border-border space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Filters</h3>
              </div>

              <div className="space-y-2">
                <Label>Minimum Score: {minScoreFilter[0]}%</Label>
                <Slider
                  value={minScoreFilter}
                  onValueChange={setMinScoreFilter}
                  min={0}
                  max={100}
                  step={5}
                  className="mt-2"
                />
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredCandidates.length} of {mockCandidates.length} candidates
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CandidateList;
