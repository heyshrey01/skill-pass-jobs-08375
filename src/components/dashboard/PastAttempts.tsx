import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

const attempts = [
  {
    assessment: "Frontend Developer — React Test",
    date: "Dec 15, 2024",
    status: "Completed",
    score: "85%",
  },
  {
    assessment: "Data Analyst — SQL Basics",
    date: "Dec 10, 2024",
    status: "Completed",
    score: "92%",
  },
  {
    assessment: "Backend Developer — Node.js",
    date: "Dec 5, 2024",
    status: "In Progress",
    score: "—",
  },
];

export const PastAttempts = () => {
  return (
    <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <FileText className="h-5 w-5 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Assessment History</h2>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Assessment</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attempts.map((attempt, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{attempt.assessment}</TableCell>
                <TableCell className="text-muted-foreground">{attempt.date}</TableCell>
                <TableCell>
                  <Badge
                    variant={attempt.status === "Completed" ? "default" : "secondary"}
                    className="rounded-full"
                  >
                    {attempt.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-semibold">
                  {attempt.score}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
