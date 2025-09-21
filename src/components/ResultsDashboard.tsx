import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, User, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface Resume {
  id: string;
  name: string;
  score: number;
  verdict: 'High' | 'Medium' | 'Low';
  missingSkills: string[];
  matchedSkills: string[];
  suggestions: string[];
}

interface ResultsDashboardProps {
  resumes: File[];
}

export const ResultsDashboard = ({ resumes }: ResultsDashboardProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterVerdict, setFilterVerdict] = useState("all");
  
  // Mock data - in real app, this would come from AI analysis
  const mockResults: Resume[] = resumes.map((file, index) => ({
    id: `resume-${index}`,
    name: file.name.replace(/\.(pdf|docx)$/i, ''),
    score: Math.floor(Math.random() * 40) + 60, // 60-100 range
    verdict: ['High', 'Medium', 'Low'][Math.floor(Math.random() * 3)] as 'High' | 'Medium' | 'Low',
    missingSkills: ['React', 'Python', 'AWS'].slice(0, Math.floor(Math.random() * 3) + 1),
    matchedSkills: ['JavaScript', 'Node.js', 'SQL', 'Git'].slice(0, Math.floor(Math.random() * 4) + 1),
    suggestions: [
      'Add more project details',
      'Include certification information',
      'Highlight leadership experience'
    ].slice(0, Math.floor(Math.random() * 3) + 1)
  }));

  const filteredResults = mockResults.filter(resume => {
    const matchesSearch = resume.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterVerdict === "all" || resume.verdict.toLowerCase() === filterVerdict;
    return matchesSearch && matchesFilter;
  });

  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case 'High': return 'bg-success text-success-foreground';
      case 'Medium': return 'bg-warning text-warning-foreground';
      case 'Low': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-destructive';
  };

  const avgScore = Math.round(mockResults.reduce((sum, r) => sum + r.score, 0) / mockResults.length);
  const highCount = mockResults.filter(r => r.verdict === 'High').length;
  const mediumCount = mockResults.filter(r => r.verdict === 'Medium').length;
  const lowCount = mockResults.filter(r => r.verdict === 'Low').length;

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-soft border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Resumes</p>
                <p className="text-2xl font-bold">{mockResults.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <TrendingUp className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Score</p>
                <p className="text-2xl font-bold">{avgScore}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">High Fit</p>
                <p className="text-2xl font-bold">{highCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-warning/10 rounded-lg">
                <AlertCircle className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Need Review</p>
                <p className="text-2xl font-bold">{mediumCount + lowCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="shadow-soft border-0">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold">Resume Analysis Results</CardTitle>
          <CardDescription>Review candidate relevance scores and feedback</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search candidates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background border-border"
              />
            </div>
            <Select value={filterVerdict} onValueChange={setFilterVerdict}>
              <SelectTrigger className="w-full sm:w-40 bg-background border-border">
                <SelectValue placeholder="Filter by verdict" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Verdicts</SelectItem>
                <SelectItem value="high">High Fit</SelectItem>
                <SelectItem value="medium">Medium Fit</SelectItem>
                <SelectItem value="low">Low Fit</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results List */}
      <div className="space-y-4">
        {filteredResults.map((resume) => (
          <Card key={resume.id} className="shadow-soft border-0 hover:shadow-medium transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-card-foreground">{resume.name}</h3>
                    <Badge className={`${getVerdictColor(resume.verdict)} font-medium`}>
                      {resume.verdict} Fit
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">Matched Skills</p>
                      <div className="flex flex-wrap gap-1">
                        {resume.matchedSkills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-success/10 text-success border-success/20">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">Missing Skills</p>
                      <div className="flex flex-wrap gap-1">
                        {resume.missingSkills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-destructive/10 text-destructive border-destructive/20">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-48 space-y-3">
                  <div className="text-center">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Relevance Score</p>
                    <p className={`text-3xl font-bold ${getScoreColor(resume.score)}`}>{resume.score}%</p>
                  </div>
                  <Progress value={resume.score} className="h-2" />
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </div>
              </div>
              
              {resume.suggestions.length > 0 && (
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Improvement Suggestions</p>
                  <ul className="text-sm text-card-foreground space-y-1">
                    {resume.suggestions.map((suggestion, idx) => (
                      <li key={idx}>• {suggestion}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};