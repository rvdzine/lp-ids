import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to homepage after 5 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-cta/10 via-background to-accent/10">
      <div className="text-center px-6 animate-in fade-in zoom-in duration-500">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-cta-green/20 animate-bounce">
          <svg 
            className="h-12 w-12 text-cta-green" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>
        <h1 className="mb-4 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground">
          Thank You! 🎉
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-6">
          Our counselor will contact you within 24 hours.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="h-2 w-2 animate-pulse rounded-full bg-cta"></div>
          <span>Redirecting back in a moment...</span>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
