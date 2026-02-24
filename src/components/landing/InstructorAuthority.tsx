const mentors = [
  {
    name: "Rajesh Kumar",
    experience: "12+ Years",
    companies: "Google, HubSpot, Razorpay",
    certifications: "Google Ads Certified, Meta Blueprint",
    bio: "Led performance marketing teams scaling campaigns from ₹1L to ₹1Cr+ monthly ad spend.",
  },
  {
    name: "Sneha Patel",
    experience: "8+ Years",
    companies: "Amazon, Flipkart, Zomato",
    certifications: "SEMrush Certified, Google Analytics",
    bio: "Built organic traffic strategies driving 10M+ monthly visitors for top e-commerce brands.",
  },
  {
    name: "Amit Sharma",
    experience: "10+ Years",
    companies: "Dentsu, Ogilvy, WPP",
    certifications: "Facebook Certified, HubSpot Inbound",
    bio: "Award-winning social media strategist specializing in AI-driven content and automation.",
  },
];

const InstructorAuthority = () => {
  return (
    <section className="bg-section-alt py-16" id="instructors">
      <div className="container max-w-5xl">
        <h2 className="mb-4 text-center font-display text-3xl font-extrabold text-foreground md:text-4xl">
          Learn from <span className="text-gradient">Industry Experts</span>
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
          Real-World Experience. Not Just Theory.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {mentors.map((m) => (
            <div
              key={m.name}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:shadow-card-hover"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 font-display text-lg font-bold text-accent">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">{m.name}</h3>
                  <p className="text-xs font-semibold text-cta">{m.experience} Experience</p>
                </div>
              </div>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              <div className="space-y-2 border-t border-border pt-3">
                <p className="text-xs text-muted-foreground">
                  {/* <span className="font-semibold text-foreground">Companies:</span> {m.companies} */}
                </p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Certifications:</span> {m.certifications}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorAuthority;
