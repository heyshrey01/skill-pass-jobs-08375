import { CheckCircle2, Award, Briefcase } from "lucide-react";

const steps = [
  {
    icon: CheckCircle2,
    title: "Take a role-specific assessment",
    description: "Complete a standardized pre-assessment tailored to your target role.",
  },
  {
    icon: Award,
    title: "Earn a 6–12 month verified score",
    description: "Get a portable credential that proves your skills across all participating employers.",
  },
  {
    icon: Briefcase,
    title: "Apply to employers using your credential",
    description: "Skip the resume black hole and get noticed by employers looking for pre-vetted talent.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps to transform your job search
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-card rounded-3xl p-8 shadow-card hover:shadow-soft transition-all duration-300 animate-slide-up border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold text-xl shadow-soft">
                  {index + 1}
                </div>
                
                <div className="flex flex-col items-center text-center mt-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-success/10 mb-6">
                    <Icon className="h-8 w-8 text-success" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
