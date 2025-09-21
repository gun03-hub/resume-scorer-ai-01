import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Upload, FileSearch, BarChart3, Users, Zap, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero text-white shadow-large relative overflow-hidden">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10 p-2"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Brain className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">How It Works</h1>
                  <p className="text-blue-100 mt-1">AI-powered resume analysis in 4 simple steps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Transform Your Hiring Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered system analyzes resumes against job descriptions with precision, 
            helping you identify the best candidates faster than ever before.
          </p>
        </div>

        {/* Step-by-Step Process */}
        <div className="space-y-16">
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-primary rounded-full">
                  <Upload className="h-8 w-8 text-white" />
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20">Step 1</Badge>
              </div>
              <h3 className="text-3xl font-bold mb-4">Upload Your Files</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Start by uploading your job description and the candidate resumes you want to analyze. 
                Our system supports PDF and DOC formats, and can handle bulk uploads for efficiency.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Supports PDF, DOC, DOCX formats</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Bulk upload up to 100 resumes at once</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Secure, encrypted file handling</span>
                </div>
              </div>
            </div>
            <Card className="shadow-large border border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="p-4 border-2 border-dashed border-primary/30 rounded-lg text-center">
                    <Upload className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Drag & drop your job description</p>
                  </div>
                  <div className="p-4 border-2 border-dashed border-success/30 rounded-lg text-center">
                    <FileSearch className="h-12 w-12 text-success mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Add candidate resumes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="shadow-large border border-warning/20 bg-gradient-to-br from-card to-warning/5 md:order-2">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Semantic Analysis</span>
                    <span className="text-sm text-success">95% Complete</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div className="bg-gradient-success h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Keyword Matching</span>
                      <span className="text-success">✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Context Understanding</span>
                      <span className="text-success">✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Skill Assessment</span>
                      <span className="text-warning">⏳</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="md:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-warning rounded-full">
                  <Zap className="h-8 w-8 text-warning-foreground" />
                </div>
                <Badge className="bg-warning/10 text-warning border-warning/20">Step 2</Badge>
              </div>
              <h3 className="text-3xl font-bold mb-4">AI Analysis Engine</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our advanced AI processes your documents using natural language processing, 
                semantic analysis, and machine learning to understand context beyond simple keyword matching.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Semantic understanding of job requirements</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Skills gap identification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Experience level matching</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-success rounded-full">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <Badge className="bg-success/10 text-success border-success/20">Step 3</Badge>
              </div>
              <h3 className="text-3xl font-bold mb-4">Relevance Scoring</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Each resume receives a comprehensive 0-100 relevance score based on multiple factors 
                including skills match, experience alignment, and contextual understanding of requirements.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Multi-factor scoring algorithm</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Detailed breakdown by category</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Improvement recommendations</span>
                </div>
              </div>
            </div>
            <Card className="shadow-large border border-success/20 bg-gradient-to-br from-card to-success/5">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-success mb-2">87</div>
                    <p className="text-sm text-muted-foreground">Relevance Score</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Skills Match</span>
                        <span className="text-sm">92%</span>
                      </div>
                      <div className="w-full bg-background rounded-full h-2">
                        <div className="bg-gradient-success h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Experience</span>
                        <span className="text-sm">85%</span>
                      </div>
                      <div className="w-full bg-background rounded-full h-2">
                        <div className="bg-gradient-primary h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Education</span>
                        <span className="text-sm">78%</span>
                      </div>
                      <div className="w-full bg-background rounded-full h-2">
                        <div className="bg-gradient-warning h-2 rounded-full" style={{width: '78%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step 4 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="shadow-large border border-primary/20 bg-gradient-to-br from-card to-primary/5 md:order-2">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h4 className="font-semibold mb-4">Top Candidates</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold">1</span>
                        </div>
                        <span className="font-medium">Sarah Johnson</span>
                      </div>
                      <Badge className="bg-success text-white">94</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold">2</span>
                        </div>
                        <span className="font-medium">Mike Chen</span>
                      </div>
                      <Badge className="bg-primary text-white">87</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-warning/20 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold">3</span>
                        </div>
                        <span className="font-medium">Lisa Wang</span>
                      </div>
                      <Badge className="bg-warning text-warning-foreground">82</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="md:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-primary rounded-full">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20">Step 4</Badge>
              </div>
              <h3 className="text-3xl font-bold mb-4">Actionable Results</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Get ranked results with detailed insights for each candidate. Export reports, 
                share findings with your team, and make data-driven hiring decisions with confidence.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Ranked candidate list with scores</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Detailed gap analysis for each candidate</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Exportable reports and insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Card className="shadow-large border border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Hiring?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of companies using AI-powered resume analysis to hire better, faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Analyzing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
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
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
              <span>Hyderabad • Bangalore • Pune • Delhi NCR</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorks;