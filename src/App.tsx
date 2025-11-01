import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Assessments from "./pages/Assessments";
import Profile from "./pages/Profile";
import EmployerDashboard from "./pages/EmployerDashboard";
import CreateRoleAssessment from "./pages/CreateRoleAssessment";
import CandidateList from "./pages/CandidateList";
import StudentProfile from "./pages/StudentProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/assessments" element={<Assessments />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/employer" element={<EmployerDashboard />} />
          <Route path="/employer/create-role" element={<CreateRoleAssessment />} />
          <Route path="/employer/candidates" element={<CandidateList />} />
          <Route path="/employer/student/:studentId" element={<StudentProfile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
