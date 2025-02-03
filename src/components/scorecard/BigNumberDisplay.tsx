import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface BigNumberDisplayProps {
  value: number;
  suffix?: string;
  subtitle?: string;
}

export const BigNumberDisplay = ({ value, suffix = "", subtitle }: BigNumberDisplayProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] text-gold relative w-full">
      <Dialog>
        <DialogTrigger asChild>
          <div className="text-6xl font-bold cursor-pointer hover:opacity-90 transition-opacity">
            {value}{suffix}
          </div>
        </DialogTrigger>
        <DialogContent className="bg-obsidian-dark border-gold/20">
          <button className="absolute right-4 top-4 text-gold hover:text-gold/80 transition-colors">
            <X className="h-4 w-4" />
          </button>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gold mb-4">Return Rate Analysis</h3>
            <p className="text-gold/80">
              The current return rate of {value}% shows a slight increase from last quarter's 2.9%. 
              While this represents a marginal uptick, it remains within acceptable industry standards. 
              Key factors contributing to returns include:
            </p>
            <ul className="list-disc list-inside text-gold/80 mt-4 space-y-2">
              <li>Size fitting issues (40% of returns)</li>
              <li>Style expectations (30% of returns)</li>
              <li>Quality concerns (20% of returns)</li>
              <li>Other reasons (10% of returns)</li>
            </ul>
          </div>
        </DialogContent>
      </Dialog>
      {subtitle && (
        <div className="text-gold/80 text-center text-sm max-w-md mb-8">
          {subtitle}
        </div>
      )}
      <div className="absolute bottom-4 left-8">
        <img 
          src="/lovable-uploads/a96456a3-b525-4406-aaaf-353af1316972.png" 
          alt="Geidea Logo" 
          className="h-8 object-contain"
        />
      </div>
    </div>
  );
};