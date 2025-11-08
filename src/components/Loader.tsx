import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const Loader = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative flex flex-col items-center gap-8">
        {/* Glowing background orb */}
        <div className="absolute inset-0 -z-10 animate-glow-pulse">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/20 blur-2xl" />
        </div>

        {/* Logo with animation */}
        <div className="animate-float">
          <img
            src={logo}
            alt="CipherNestt IT Innovations"
            className="h-32 w-auto drop-shadow-[0_0_30px_rgba(251,146,60,0.5)]"
          />
        </div>

        {/* Progress bar */}
        <div className="w-64">
          <div className="mb-2 h-1 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Loading Experience... {progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
