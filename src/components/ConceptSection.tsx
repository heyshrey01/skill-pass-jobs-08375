import { Target, TrendingUp } from "lucide-react";

export const ConceptSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* What it is */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card hover:shadow-soft transition-shadow duration-300 border border-border">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              What it is
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A job marketplace where you <span className="font-semibold text-foreground">qualify once and apply anywhere</span>. Pass a standardized assessment, earn a portable credential, and unlock opportunities across multiple employers.
            </p>
          </div>

          {/* Why now */}
          <div className="bg-gradient-card rounded-3xl p-8 md:p-10 shadow-card hover:shadow-soft transition-shadow duration-300 border border-border">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-6">
              <TrendingUp className="h-7 w-7 text-accent" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Why now
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hiring funnels are noisy with <span className="font-semibold text-foreground">low signal and high volume</span>. Portable credentials reduce ghosting, wasted effort, and help both candidates and employers focus on what matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
