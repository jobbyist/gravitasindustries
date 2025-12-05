import { useState } from "react";
import { ExternalLink, DollarSign, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    name: string;
    description: string;
    descriptionLong: string;
    status: "Beta" | "Coming Soon";
    logo: string;
    users: number;
    likes: number;
    websiteUrl: string;
    appraisalValue: number;
  };
}

const ProjectDetailModal = ({ isOpen, onClose, project }: ProjectDetailModalProps) => {
  const [bidAmount, setBidAmount] = useState("");
  const [bidMessage, setBidMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const handleSubmitBid = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to submit a bid.",
        variant: "destructive",
      });
      return;
    }

    if (!bidAmount || parseFloat(bidAmount) <= 0) {
      toast({
        title: "Invalid Bid",
        description: "Please enter a valid bid amount.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("bids").insert({
        project_id: project.id,
        user_id: user.id,
        amount: parseFloat(bidAmount),
        message: bidMessage || null,
      });

      if (error) throw error;

      toast({
        title: "Bid Submitted",
        description: `Your offer of $${parseFloat(bidAmount).toLocaleString()} has been submitted for ${project.name}.`,
      });
      setBidAmount("");
      setBidMessage("");
    } catch (error) {
      console.error("Error submitting bid:", error);
      toast({
        title: "Error",
        description: "Failed to submit bid. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const statusStyles = project.status === "Beta" 
    ? "bg-primary/20 text-primary" 
    : "bg-muted text-muted-foreground";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center overflow-hidden flex-shrink-0">
              <img src={project.logo} alt={`${project.name} logo`} className="w-12 h-12 object-contain" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <DialogTitle className="text-2xl font-display">{project.name}</DialogTitle>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusStyles}`}>
                  {project.status}
                </span>
              </div>
              <DialogDescription className="mt-1">
                {project.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Detailed Description */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">About This Project</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.descriptionLong}
            </p>
          </div>

          {/* Digital Real Estate Appraisal */}
          <div className="bg-secondary/50 rounded-xl p-4">
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-primary" />
              Digital Real Estate Appraisal
            </h4>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-primary">
                ${project.appraisalValue?.toLocaleString() || "N/A"}
              </span>
              <span className="text-sm text-muted-foreground">USD estimated value</span>
            </div>
          </div>

          {/* Visit Website */}
          {project.websiteUrl && (
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open(project.websiteUrl, '_blank', 'noopener,noreferrer')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit {project.name}
            </Button>
          )}

          {/* Bidding Section */}
          <div className="border-t border-border pt-6">
            <h4 className="text-sm font-semibold text-foreground mb-3">Make an Offer</h4>
            <p className="text-xs text-muted-foreground mb-4">
              Interested in acquiring this digital asset? Submit your bid below.
            </p>
            
            <div className="space-y-3">
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Bid Amount (USD)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <Input
                    type="number"
                    min="1"
                    step="0.01"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    placeholder="Enter your offer"
                    className="pl-7"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Message (Optional)</label>
                <Textarea
                  value={bidMessage}
                  onChange={(e) => setBidMessage(e.target.value)}
                  placeholder="Add a message to your bid..."
                  rows={3}
                />
              </div>
              
              <Button 
                onClick={handleSubmitBid} 
                disabled={isSubmitting || !bidAmount}
                className="w-full"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Submitting..." : "Submit Bid"}
              </Button>
              
              {!user && (
                <p className="text-xs text-center text-muted-foreground">
                  You must be signed in to submit a bid.
                </p>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;
