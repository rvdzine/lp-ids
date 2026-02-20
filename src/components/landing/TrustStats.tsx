const stats = [
  { value: "2000+", label: "Students Trained", icon: "🎓" },
  { value: "500+", label: "Students Placed", icon: "💼" },
  { value: "95%", label: "Placement Assistance", icon: "📈" },
  { value: "100+", label: "Hiring Partners", icon: "🤝" },
  { value: "₹3–6 LPA", label: "Avg. Salary Range", icon: "💰" },
];

const TrustStats = () => {
  return (
    <section className="bg-trust py-16" id="trust">
      <div className="container">
        <h2 className="mb-12 text-center font-display text-3xl font-extrabold text-trust-foreground md:text-4xl">
          Trusted by <span className="text-gradient">Thousands</span> of Students
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
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
      </div>
    </section>
  );
};

export default TrustStats;
