import { useState } from "react";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    mode: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: "lead_form_submit", ...formData });
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl bg-card p-8 text-center shadow-lg">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cta-green/10">
          <svg className="h-8 w-8 text-cta-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 font-display text-xl font-bold text-foreground">Thank You! 🎉</h3>
        <p className="text-muted-foreground">Our counselor will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl bg-card p-6 shadow-lg md:p-8">
      <div className="mb-4 text-center">
        <h3 className="font-display text-xl font-bold text-foreground">Book Free Career Counseling</h3>
        <p className="mt-1 text-sm text-muted-foreground">Get personalized guidance from our experts</p>
      </div>

      {/* Scarcity badge */}
      <div className="mb-5 flex items-center justify-center gap-2 rounded-lg bg-urgency/10 px-3 py-2 text-sm font-semibold text-urgency">
        <span className="h-2 w-2 animate-pulse-slow rounded-full bg-urgency" />
        ⚠ Only 27 Seats Left for Upcoming Batch
      </div>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          required
          maxLength={100}
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-cta focus:ring-2 focus:ring-cta/20"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          maxLength={255}
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-cta focus:ring-2 focus:ring-cta/20"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          required
          maxLength={15}
          pattern="[0-9+\-\s]{7,15}"
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-cta focus:ring-2 focus:ring-cta/20"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="City"
          required
          maxLength={50}
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-cta focus:ring-2 focus:ring-cta/20"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
        <select
          required
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-cta focus:ring-2 focus:ring-cta/20"
          value={formData.mode}
          onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
        >
          <option value="">Select Mode</option>
          <option value="online">Online</option>
          <option value="offline">Offline (Classroom)</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-cta-gradient py-4 font-display text-base font-bold text-cta-foreground shadow-cta transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
      >
        Book Free Career Counseling →
      </button>

      <p className="mt-3 text-center text-xs text-muted-foreground">
        🔒 Your information is 100% secure. No spam.
      </p>
    </form>
  );
};

export default LeadForm;
