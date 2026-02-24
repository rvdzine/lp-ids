const stats = [
  { value: "3500+", label: "Students Trained", icon: "🎓" },
  { value: "2000+", label: "Students Placed", icon: "💼" },
  { value: "95%", label: "Placement Assistance", icon: "📈" },
  { value: "300+", label: "Hiring Partners", icon: "🤝" },
];

const TrustStats = () => {
  return (
    <section className="bg-trust py-16" id="trust">
      <div className="container">
        <h2 className="mb-4 text-center font-display text-3xl font-extrabold text-trust-foreground md:text-4xl">
          Trusted by <span className="text-gradient">Students Across India</span>
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-trust-foreground/60">
          Numbers that speak for themselves
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group rounded-xl border border-trust-foreground/10 bg-trust-foreground/5 p-6 text-center backdrop-blur-sm transition-all hover:border-cta/30 hover:bg-trust-foreground/10"
            >
              <div className="mb-2 text-3xl">{s.icon}</div>
              <div className="font-display text-2xl font-extrabold text-cta md:text-3xl">{s.value}</div>
              <div className="mt-1 text-sm text-trust-foreground/70">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Salary highlight */}
        <div className="mx-auto mt-8 max-w-md rounded-2xl border-2 border-cta/40 bg-cta/10 p-6 text-center backdrop-blur-sm">
          <div className="mb-1 text-3xl">💰</div>
          <div className="font-display text-3xl font-extrabold text-cta md:text-4xl">₹3–9 LPA</div>
          <div className="mt-2 text-sm font-medium text-trust-foreground/80">Average Salary Range for Our Graduates</div>
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
