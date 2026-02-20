const testimonials = [
  {
    name: "Priya Sharma",
    role: "SEO Specialist at WebTech Solutions",
    salary: "₹4.5 LPA",
    text: "IDS transformed my career completely. The AI tools training gave me an edge no other institute could. From zero knowledge to landing a job in just 4 months.",
    before: "College Graduate",
    after: "SEO Specialist",
  },
  {
    name: "Rahul Verma",
    role: "PPC Manager at Digital First Agency",
    salary: "₹6 LPA",
    text: "The AI-powered campaign optimization techniques I learned at IDS helped me outperform experienced marketers. Got 3 offers within a month.",
    before: "Retail Associate",
    after: "PPC Manager",
  },
  {
    name: "Ananya Gupta",
    role: "Freelance AI Digital Marketer",
    salary: "₹80K/month",
    text: "I started freelancing during the course itself using AI tools. Now I handle 5 clients independently. The prompt engineering module was a game-changer.",
    before: "Homemaker",
    after: "Freelancer earning ₹80K/mo",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16" id="testimonials">
      <div className="container">
        <h2 className="mb-4 text-center font-display text-3xl font-extrabold text-foreground md:text-4xl">
          Real Students. Real <span className="text-gradient">AI Careers</span>.
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground">
          Real results from students who learned AI-powered digital marketing
        </p>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-border bg-card p-6 transition-all hover:shadow-card-hover">
              <div className="mb-4 flex gap-1 text-highlight">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
              <div className="mb-4 flex items-center gap-2 rounded-lg bg-accent/5 px-3 py-2 text-xs">
                <span className="text-muted-foreground">{t.before}</span>
                <span className="text-accent">→</span>
                <span className="font-semibold text-foreground">{t.after}</span>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-bold text-accent">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                    <p className="text-xs font-semibold text-cta-green">{t.salary}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
