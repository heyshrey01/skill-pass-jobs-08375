export const Footer = () => {
  const links = [
    { label: "About", href: "#" },
    { label: "Students", href: "#" },
    { label: "Employers", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              SkillPass
            </h3>
            <p className="text-muted-foreground">
              Qualify once. Apply everywhere.
            </p>
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SkillPass. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
