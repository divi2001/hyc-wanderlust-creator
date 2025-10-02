import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const PaymentDialog = ({ open, onOpenChange, onConfirm, estimatedPrice }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            Payment Terms & Conditions
          </DialogTitle>
          <DialogDescription className="text-base pt-4">
            Please read and acknowledge the following before proceeding:
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="bg-destructive/10 border-2 border-destructive/50 rounded-lg p-4">
            <h4 className="font-bold text-destructive mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Important Notice
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold mt-0.5">•</span>
                <span><strong>All payments are NON-REFUNDABLE</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold mt-0.5">•</span>
                <span><strong>All payments are NON-TRANSFERABLE</strong></span>
              </li>
            </ul>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 space-y-2">
            <h4 className="font-semibold">Package Details:</h4>
            <div className="text-sm space-y-1">
              <p className="flex justify-between">
                <span>Estimated Price:</span>
                <span className="font-bold text-primary">₹{estimatedPrice?.toLocaleString() || "0"}</span>
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                ✓ All-inclusive package with visa, meals, sightseeing, and accommodation
              </p>
              <p className="text-xs text-muted-foreground">
                ✗ Airfare is excluded and charged separately
              </p>
            </div>
          </div>

          <div className="text-xs text-muted-foreground space-y-1">
            <p>• Booking requires 10% advance (non-refundable)</p>
            <p>• 40% payment due within 10 days of booking</p>
            <p>• Final 50% payment due 60 days before departure</p>
            <p className="pt-2 font-semibold">By proceeding, you acknowledge and accept these terms.</p>
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="w-full sm:w-auto">
            Cancel
          </Button>
          <Button onClick={onConfirm} className="w-full sm:w-auto bg-hero-gradient hover:shadow-glow">
            I Agree, Proceed
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
