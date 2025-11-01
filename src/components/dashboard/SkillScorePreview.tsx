import { Progress } from "@/components/ui/progress";
import { Code2, Database, FileCode, Bug } from "lucide-react";
import { AlertCircle } from "lucide-react";

const skills = [
  { name: "Data Structures & Algorithms", icon: Code2, progress: 0, color: "bg-primary" },
  { name: "SQL", icon: Database, progress: 0, color: "bg-accent" },
  { name: "Python", icon: FileCode, progress: 0, color: "bg-success" },
  { name: "Debugging", icon: Bug, progress: 0, color: "bg-destructive" },
];

export const SkillScorePreview = () => {
  return (
    <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Your Skill Scores</h2>
        <div className="flex items-center gap-2 bg-muted rounded-full px-4 py-2">
          <AlertCircle className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">
            Not Yet Qualified
          </span>
        </div>
      </div>

      <p className="text-muted-foreground mb-8">
        Complete assessments to unlock your skill scores and qualify for opportunities
      </p>

      <div className="space-y-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${skill.color}/10 flex items-center justify-center`}>
                    <Icon className={`h-5 w-5 ${skill.color.replace('bg-', 'text-')}`} />
                  </div>
                  <span className="font-medium text-foreground">{skill.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {skill.progress}%
                </span>
              </div>
              <Progress value={skill.progress} className="h-2" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
