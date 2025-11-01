import { Building2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const EmployerHeader = () => {
  const navItems = [
    { label: "Dashboard", path: "/employer" },
    { label: "Post a Role", path: "/employer/create-role" },
    { label: "Talent Pool", path: "/employer/candidates" },
  ];

  return (
    <header className="border-b border-border bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-primary">SkillPass</h1>
            
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-foreground">Acme Corp</p>
              <p className="text-xs text-muted-foreground">Employer</p>
            </div>
            <Avatar className="h-10 w-10 border-2 border-primary">
              <AvatarFallback className="bg-primary/10">
                <Building2 className="h-5 w-5 text-primary" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};
