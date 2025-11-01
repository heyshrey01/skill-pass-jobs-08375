import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, ArrowRight } from "lucide-react";

export const AudienceCards = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* For Students */}
          <div className="group relative overflow-hidden bg-gradient-hero rounded-3xl p-10 shadow-soft hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-6">
                <GraduationCap className="h-9 w-9 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-white">
                For Students
              </h2>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Skip the resume black hole. 📝
                <br />
                <br />
                Prove your skills once, apply everywhere. Your credential opens doors to multiple opportunities without repeating the same tests.
              </p>
              
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-full font-semibold group/btn"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          </div>

          {/* For Employers */}
          <div className="group relative overflow-hidden bg-gradient-accent rounded-3xl p-10 shadow-soft hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-6">
                <Building2 className="h-9 w-9 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-white">
                For Employers
              </h2>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Hire from a pre-vetted talent pool. 🎯
                <br />
                <br />
                Save time and resources by accessing candidates who've already proven their capabilities through standardized assessments.
              </p>
              
              <Button 
                size="lg"
                className="bg-white text-accent hover:bg-white/90 rounded-full font-semibold group/btn"
                onClick={() => window.location.href = '/employer/create-role'}
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
