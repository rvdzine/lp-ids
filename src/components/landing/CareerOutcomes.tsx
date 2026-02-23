const careers = [
  { role: "Digital Marketing Executive", salary: "₹3–5 LPA", icon: "📱" },
  { role: "SEO Specialist", salary: "₹4–8 LPA", icon: "🔍" },
  { role: "Performance Marketing Expert", salary: "₹6–15 LPA", icon: "📊" },
  { role: "Social Media Manager", salary: "₹4–10 LPA", icon: "📣" },
  { role: "Growth Marketer", salary: "₹12–25 LPA", icon: "🚀" },
  { role: "Freelancer / Consultant", salary: "₹30K–₹2L+/month", icon: "💻" },
];

const CareerOutcomes = () => {
  return (
    <section className="py-16" id="careers">
      <div className="container">
        <h2 className="mb-4 text-center font-display text-3xl font-extrabold text-foreground md:text-4xl">
          High-Income Career <span className="text-gradient">Opportunities</span> After the Course
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground">
          AI-Enabled Marketers Are in Higher Demand.
        </p>

        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {careers.map((c) => (
            <div
              key={c.role}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-cta/30 hover:shadow-card-hover"
            >
              <div className="mb-3 text-3xl">{c.icon}</div>
              <h3 className="mb-2 font-display text-lg font-bold text-foreground">{c.role}</h3>
              <p className="font-display text-xl font-extrabold text-cta">{c.salary}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#hero"
            className="inline-flex items-center rounded-lg bg-cta-gradient px-8 py-4 font-display text-base font-bold text-cta-foreground shadow-cta transition-all hover:scale-105 active:scale-95"
          >
            Start My AI Marketing Career →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CareerOutcomes;
