import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    city: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showMobilePopup, setShowMobilePopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Submit to Django backend on AWS
      const response = await fetch('https://api.idigitalstudies.com/api/landpage-leads/submit/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // GTM tracking
        if (typeof window !== "undefined" && (window as any).dataLayer) {
          (window as any).dataLayer.push({ 
            event: "lead_form_submit", 
            ...formData 
          });
        }

        // Check if mobile view (screen width < 768px)
        const isMobile = window.innerWidth < 768;
        
        if (isMobile) {
          setShowMobilePopup(true);
        } else {
          setSubmitted(true);
        }
      } else {
        // Handle error from backend
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Failed to submit. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClosePopup = () => {
    setShowMobilePopup(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl bg-card p-8 text-center shadow-lg">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cta-green/10">
          <svg 
            className="h-8 w-8 text-cta-green" 
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
        <h3 className="mb-2 font-display text-xl font-bold text-foreground">
          Thank You! 🎉
        </h3>
        <p className="text-muted-foreground">
          Our counselor will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Mobile Success Popup */}
      <Dialog open={showMobilePopup} onOpenChange={setShowMobilePopup}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cta-green/10">
              <svg 
                className="h-8 w-8 text-cta-green" 
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
            <DialogTitle className="text-center text-xl">Thank You! 🎉</DialogTitle>
            <DialogDescription className="text-center">
              Our counselor will contact you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <button
            onClick={handleClosePopup}
            className="w-full rounded-lg bg-cta-gradient py-3 font-display text-base font-bold text-cta-foreground shadow-cta transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Got it!
          </button>
        </DialogContent>
      </Dialog>

      <form 
        onSubmit={handleSubmit} 
        className="relative z-20 rounded-xl bg-card p-6 shadow-lg md:p-8"
      >
      <div className="mb-4 text-center">
        <h3 className="font-display text-xl font-bold text-foreground">
          Book Free Career Counseling
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Get personalized guidance from our experts
        </p>
      </div>

      {/* Scarcity badge */}
      <div className="mb-5 flex items-center justify-center gap-2 rounded-lg bg-urgency/10 px-3 py-2 text-sm font-semibold text-urgency">
        <span className="h-2 w-2 animate-pulse-slow rounded-full bg-urgency" />
        ⚠ Only 27 Seats Left for Upcoming Batch
      </div>

      {/* Error message */}
      {error && (
        <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          required
          maxLength={200}
          className="relative z-30 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-cta focus:ring-2 focus:ring-cta/20"
          value={formData.full_name}
          onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email Address"
          required
          maxLength={255}
          className="relative z-30 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-cta focus:ring-2 focus:ring-cta/20"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          required
          maxLength={15}
          pattern="[0-9+\-\s]{7,15}"
          className="relative z-30 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-cta focus:ring-2 focus:ring-cta/20"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />

        <input
          type="text"
          placeholder="City"
          maxLength={100}
          className="relative z-30 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-cta focus:ring-2 focus:ring-cta/20"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="relative z-30 mt-6 w-full rounded-lg bg-cta-gradient py-4 font-display text-base font-bold text-cta-foreground shadow-cta transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100"
      >
        {loading ? "Submitting..." : "Book Free Career Counseling →"}
      </button>

      <p className="mt-3 text-center text-xs text-muted-foreground">
        🔒 Your information is 100% secure. No spam.
      </p>
      </form>
    </>
  );
};

export default LeadForm;
