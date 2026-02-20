const testimonials = [
  {
    name: "Priya Sharma",
    role: "SEO Specialist at WebTech Solutions",
    salary: "₹4.5 LPA",
    text: "IDS transformed my career completely. From zero knowledge to landing a job in just 4 months. The live projects gave me real confidence.",
  },
  {
    name: "Rahul Verma",
    role: "PPC Manager at Digital First Agency",
    salary: "₹6 LPA",
    text: "The placement support was incredible. Mock interviews and resume building really helped. I got 3 offers within a month of completing the course.",
  },
  {
    name: "Ananya Gupta",
    role: "Freelance Digital Marketer",
    salary: "₹80K/month",
    text: "I started freelancing during the course itself. Now I handle 5 clients independently. The AI tools training was a game-changer.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16" id="testimonials">
      <div className="container">
        <h2 className="mb-4 text-center font-display text-3xl font-extrabold text-foreground md:text-4xl">
          Student <span className="text-gradient">Success Stories</span>
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground">
          Real students, real results, real careers
        </p>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-border bg-card p-6 transition-all hover:shadow-card-hover">
              <div className="mb-4 flex gap-1 text-highlight">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
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
