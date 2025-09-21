import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadSection } from "@/components/UploadSection";
import { ResultsDashboard } from "@/components/ResultsDashboard";
import { Brain, FileSearch, TrendingUp, Users, ArrowLeft } from "lucide-react";

type ViewMode = 'upload' | 'results';

interface AnalysisData {
  resumes: File[];
  jobDescription: File | null;
}

const Index = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('upload');
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);

  const handleUploadComplete = (data: AnalysisData) => {
    setAnalysisData(data);
    setViewMode('results');
  };

  const handleBackToUpload = () => {
    setViewMode('upload');
    setAnalysisData(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
      {/* Header */}
      <header className="bg-gradient-hero text-white shadow-large relative overflow-hidden">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {viewMode === 'results' && (
                <Button
                  variant="ghost"
                  onClick={handleBackToUpload}
                  className="text-white hover:bg-white/10 p-2"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              )}
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Brain className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Resume Relevance System</h1>
                  <p className="text-blue-100 mt-1">Innomatics Research Labs - AI-Powered Recruitment</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-6 text-sm">
              <div className="text-center">
                <p className="font-semibold">18-20</p>
                <p className="text-blue-100">Weekly Jobs</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">4</p>
                <p className="text-blue-100">Cities</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">1000+</p>
                <p className="text-blue-100">Applications</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {viewMode === 'upload' ? (
          <>
            {/* Features Section */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Card className="text-center shadow-soft border border-primary/20 bg-gradient-to-br from-card to-primary/5 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="p-4 bg-gradient-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <FileSearch className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg mb-2">Smart Analysis</CardTitle>
                  <CardDescription className="text-sm">
                    AI-powered semantic matching combines keyword detection with contextual understanding
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft border border-success/20 bg-gradient-to-br from-card to-success/5 hover:border-success/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="p-4 bg-gradient-success rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg mb-2">Relevance Scoring</CardTitle>
                  <CardDescription className="text-sm">
                    Get precise 0-100 scores with detailed gap analysis and improvement suggestions
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft border border-warning/20 bg-gradient-to-br from-card to-warning/5 hover:border-warning/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="p-4 bg-gradient-warning rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-warning-foreground" />
                  </div>
                  <CardTitle className="text-lg mb-2">Bulk Processing</CardTitle>
                  <CardDescription className="text-sm">
                    Process thousands of resumes weekly with consistent, scalable evaluation
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Upload Section */}
            <Card className="shadow-large border border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  Upload & Analyze
                </CardTitle>
                <CardDescription className="text-base max-w-2xl mx-auto">
                  Upload your job description and candidate resumes to get instant relevance analysis 
                  with actionable insights for faster, more consistent hiring decisions.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <UploadSection onUploadComplete={handleUploadComplete} />
              </CardContent>
            </Card>
          </>
        ) : (
          // Results View
          analysisData && (
            <div>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <FileSearch className="h-6 w-6 text-success" />
                  </div>
                  <h2 className="text-2xl font-bold text-card-foreground">Analysis Complete</h2>
                </div>
                <p className="text-muted-foreground">
                  Results for {analysisData.resumes.length} resumes against "{analysisData.jobDescription?.name}"
                </p>
              </div>
              
              <ResultsDashboard resumes={analysisData.resumes} />
            </div>
          )
        )}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-card-foreground">Innomatics Research Labs</p>
                <p className="text-sm text-muted-foreground">AI-Powered Recruitment Solutions</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Hyderabad • Bangalore • Pune • Delhi NCR</span>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Index;