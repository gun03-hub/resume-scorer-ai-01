import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Check, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
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
                  <h1 className="text-3xl font-bold">Pricing Plans</h1>
                  <p className="text-blue-100 mt-1">Choose the perfect plan for your hiring needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Scale your recruitment with AI-powered resume analysis. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <Card className="shadow-soft border border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader className="text-center pb-4">
              <Badge variant="outline" className="w-fit mx-auto mb-4">
                Starter
              </Badge>
              <CardTitle className="text-2xl mb-2">Free</CardTitle>
              <CardDescription className="text-3xl font-bold text-card-foreground">
                $0<span className="text-base font-normal text-muted-foreground">/month</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success" />
                  <span>Up to 10 resumes/month</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success" />
                  <span>Basic relevance scoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success" />
                  <span>Email support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success" />
                  <span>Standard processing</span>
                </div>
              </div>
              <Button className="w-full mt-6" variant="outline">
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Professional Plan */}
          <Card className="shadow-large border border-primary/40 bg-gradient-to-br from-card to-primary/10 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-primary text-white px-4 py-1">
                Most Popular
              </Badge>
            </div>
            <CardHeader className="text-center pb-4 pt-8">
              <Badge variant="outline" className="w-fit mx-auto mb-4 border-primary text-primary">
                Professional
              </Badge>
              <CardTitle className="text-2xl mb-2">Pro</CardTitle>
              <CardDescription className="text-3xl font-bold text-card-foreground">
                $299<span className="text-base font-normal text-muted-foreground">/month</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success" />
                  <span>Up to 500 resumes/month</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success" />
                  <span>Advanced AI analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success" />
                  <span>Detailed gap analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success" />
                  <span>Bulk processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success" />
                  <span>API access</span>
                </div>
              </div>
              <Button className="w-full mt-6">
                Start Free Trial
              </Button>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="shadow-soft border border-warning/20 bg-gradient-to-br from-card to-warning/5">
            <CardHeader className="text-center pb-4">
              <Badge variant="outline" className="w-fit mx-auto mb-4 border-warning text-warning">
                Enterprise
              </Badge>
              <CardTitle className="text-2xl mb-2">Enterprise</CardTitle>
              <CardDescription className="text-3xl font-bold text-card-foreground">
                Custom<span className="text-base font-normal text-muted-foreground">/month</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success" />
                  <span>Unlimited resumes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success" />
                  <span>Custom AI models</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success" />
                  <span>White-label solution</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success" />
                  <span>Dedicated support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success" />
                  <span>On-premise deployment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success" />
                  <span>Custom integrations</span>
                </div>
              </div>
              <Button className="w-full mt-6" variant="outline">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">How accurate is the AI analysis?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our AI achieves 95%+ accuracy in resume-job matching through advanced semantic analysis and machine learning models trained on millions of job descriptions and resumes.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Can I cancel anytime?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees. Your access continues until the end of your billing period.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Do you offer volume discounts?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we offer custom pricing for high-volume users and enterprise clients. Contact our sales team to discuss your specific needs and get a personalized quote.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Is my data secure?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and GDPR compliance. Your data is never shared with third parties.
                </p>
              </CardContent>
            </Card>
          </div>
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
              <Link to="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link>
              <span>Hyderabad • Bangalore • Pune • Delhi NCR</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;