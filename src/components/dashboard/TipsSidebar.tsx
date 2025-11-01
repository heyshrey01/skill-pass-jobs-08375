import { Button } from "@/components/ui/button";
import { BookOpen, Play, MessageCircle, ExternalLink } from "lucide-react";

const tips = [
  {
    icon: BookOpen,
    title: "Practice Questions",
    description: "Sharpen your skills with 500+ curated problems",
    action: "Browse",
  },
  {
    icon: Play,
    title: "Mock Test",
    description: "Simulate real assessment conditions",
    action: "Start",
  },
  {
    icon: MessageCircle,
    title: "Community Discord",
    description: "Connect with peers and mentors",
    action: "Join",
  },
];

export const TipsSidebar = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-foreground mb-4">Resources</h3>
      
      {tips.map((tip, index) => {
        const Icon = tip.icon;
        return (
          <div
            key={index}
            className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-soft transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground mb-1">{tip.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {tip.description}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-medium"
                >
                  {tip.action}
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
