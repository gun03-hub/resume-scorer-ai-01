import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Briefcase, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UploadSectionProps {
  onUploadComplete: (data: { resumes: File[], jobDescription: File | null }) => void;
}

export const UploadSection = ({ onUploadComplete }: UploadSectionProps) => {
  const [resumes, setResumes] = useState<File[]>([]);
  const [jobDescription, setJobDescription] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const validFiles = Array.from(files).filter(file => 
        file.type === 'application/pdf' || 
        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      );
      
      if (validFiles.length !== files.length) {
        toast({
          title: "Invalid file format",
          description: "Only PDF and DOCX files are supported",
          variant: "destructive"
        });
      }
      
      setResumes(prev => [...prev, ...validFiles]);
    }
  };

  const handleJDUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setJobDescription(file);
      toast({
        title: "Job Description uploaded",
        description: `${file.name} ready for analysis`
      });
    }
  };

  const handleAnalyze = async () => {
    if (!jobDescription) {
      toast({
        title: "Missing Job Description",
        description: "Please upload a job description first",
        variant: "destructive"
      });
      return;
    }

    if (resumes.length === 0) {
      toast({
        title: "No resumes uploaded",
        description: "Please upload at least one resume",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate processing time
    setTimeout(() => {
      onUploadComplete({ resumes, jobDescription });
      setIsProcessing(false);
      toast({
        title: "Analysis Complete",
        description: `Processed ${resumes.length} resumes successfully`
      });
    }, 2000);
  };

  const removeResume = (index: number) => {
    setResumes(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Job Description Upload */}
      <Card className="shadow-soft border-0 bg-gradient-to-br from-card to-accent/20">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Briefcase className="h-5 w-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold">Job Description</CardTitle>
              <CardDescription>Upload the role requirements</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
            <input
              type="file"
              accept=".pdf,.docx"
              onChange={handleJDUpload}
              className="hidden"
              id="jd-upload"
            />
            <label htmlFor="jd-upload" className="cursor-pointer">
              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm font-medium mb-1">Click to upload JD</p>
              <p className="text-xs text-muted-foreground">PDF or DOCX up to 10MB</p>
            </label>
          </div>
          
          {jobDescription && (
            <div className="flex items-center gap-2 p-3 bg-success/10 rounded-lg border border-success/20">
              <CheckCircle className="h-4 w-4 text-success" />
              <span className="text-sm font-medium text-success-foreground">{jobDescription.name}</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Resume Upload */}
      <Card className="shadow-soft border-0 bg-gradient-to-br from-card to-secondary/30">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-secondary rounded-lg">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold">Resumes</CardTitle>
              <CardDescription>Upload candidate resumes</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
            <input
              type="file"
              accept=".pdf,.docx"
              onChange={handleResumeUpload}
              className="hidden"
              id="resume-upload"
              multiple
            />
            <label htmlFor="resume-upload" className="cursor-pointer">
              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm font-medium mb-1">Click to upload resumes</p>
              <p className="text-xs text-muted-foreground">Multiple PDF or DOCX files</p>
            </label>
          </div>
          
          {resumes.length > 0 && (
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {resumes.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-lg">
                  <span className="text-sm font-medium truncate">{file.name}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeResume(index)}
                    className="h-6 w-6 p-0 hover:bg-destructive/10 hover:text-destructive"
                  >
                    ×
                  </Button>
                </div>
              ))}
            </div>
          )}
          
          {resumes.length > 0 && (
            <p className="text-sm text-muted-foreground text-center">
              {resumes.length} resume{resumes.length !== 1 ? 's' : ''} uploaded
            </p>
          )}
        </CardContent>
      </Card>

      {/* Analyze Button */}
      <div className="md:col-span-2 flex justify-center pt-4">
        <Button
          onClick={handleAnalyze}
          disabled={isProcessing || !jobDescription || resumes.length === 0}
          className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-3 rounded-lg shadow-medium transition-all duration-300 disabled:opacity-50"
        >
          {isProcessing ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Processing...
            </div>
          ) : (
            <>
              Analyze Relevance
            </>
          )}
        </Button>
      </div>
    </div>
  );
};