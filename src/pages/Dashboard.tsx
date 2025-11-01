import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { AssessmentCard } from "@/components/dashboard/AssessmentCard";
import { SkillScorePreview } from "@/components/dashboard/SkillScorePreview";
import { PastAttempts } from "@/components/dashboard/PastAttempts";
import { TipsSidebar } from "@/components/dashboard/TipsSidebar";
import { Sparkles } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Banner */}
        <div className="mb-8 bg-gradient-card rounded-3xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">
              Your Qualification Journey
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Complete assessments to build your portable credential and unlock opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Assessment */}
            <AssessmentCard />
            
            {/* Skill Scores */}
            <SkillScorePreview />
            
            {/* Past Attempts */}
            <PastAttempts />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <TipsSidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
