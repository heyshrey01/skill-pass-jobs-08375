import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 px-4 md:py-32">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm text-white">
            <Sparkles className="h-4 w-4" />
            <span>Revolutionizing job applications</span>
          </div>
          
          <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Get noticed for your skills.
            <br />
            Not your resume.
          </h1>
          
          <p className="mb-10 text-xl md:text-2xl text-white/90 max-w-2xl">
            One pre-assessment. Many job opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-soft text-lg px-8 py-6 rounded-full font-semibold group"
              onClick={() => window.location.href = '/dashboard'}
            >
              I'm a Student
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full font-semibold"
              onClick={() => window.location.href = '/employer/create-role'}
            >
              I'm an Employer
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
    </section>
  );
};
