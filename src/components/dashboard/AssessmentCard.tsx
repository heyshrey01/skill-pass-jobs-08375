import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";

export const AssessmentCard = () => {
  return (
    <div className="bg-gradient-hero rounded-3xl p-8 shadow-soft text-white relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-white/80 text-sm mb-2">Active Assessment</p>
            <h2 className="text-3xl font-bold mb-2">
              Software Engineer — Core DSA Test
            </h2>
            <p className="text-white/90">
              Complete this assessment to qualify for software engineering roles
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
          <Clock className="h-5 w-5" />
          <span className="font-semibold text-lg">5 Days Left to Complete</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 rounded-full font-semibold group"
          >
            Start Assessment
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary rounded-full font-semibold"
          >
            View Details
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl" />
    </div>
  );
};
