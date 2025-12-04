import { useState, useEffect } from "react";
import gravitasLogo from "@/assets/gravitas-logo.png";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 5000;
    const interval = 50;
    const increment = (99 / duration) * interval;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 99) {
          clearInterval(timer);
          return 99;
        }
        return next;
      });
    }, interval);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 500);
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-12">
        <img
          src={gravitasLogo}
          alt="Gravitas Industries"
          className="h-16 md:h-20 w-auto animate-fade-in-up"
        />
        
        <div className="flex flex-col items-center gap-4 w-64 md:w-80">
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-100 ease-out animate-pulse-glow"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-sm font-mono text-muted-foreground">
            {Math.floor(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
