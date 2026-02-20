const rows = [
  { feature: "Training Style", others: "Only Theory", ids: "Live Client Projects" },
  { feature: "AI Tools", others: "No AI Tools", ids: "AI Marketing & Automation" },
  { feature: "Mentorship", others: "No Mentorship", ids: "Industry Experts" },
  { feature: "Placement Support", others: "No Placement Support", ids: "Dedicated Placement Team" },
  { feature: "Post-Course Access", others: "Limited Support", ids: "Lifetime Resource Access" },
];

const ComparisonTable = () => {
  return (
    <section className="bg-section-alt py-16" id="compare">
      <div className="container max-w-4xl">
        <h2 className="mb-4 text-center font-display text-3xl font-extrabold text-foreground md:text-4xl">
          Why IDS is <span className="text-gradient">Different</span>
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground">
          See how we stack up against other institutes
        </p>

        <div className="overflow-hidden rounded-xl border border-border shadow-lg">
          <div className="grid grid-cols-3 bg-primary text-primary-foreground">
            <div className="p-4 text-sm font-semibold">Feature</div>
            <div className="p-4 text-center text-sm font-semibold opacity-60">Others</div>
            <div className="bg-cta p-4 text-center text-sm font-bold text-cta-foreground">IDS ⭐</div>
          </div>
          {rows.map((row, i) => (
            <div key={row.feature} className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-card" : "bg-muted/50"}`}>
              <div className="p-4 text-sm font-medium text-foreground">{row.feature}</div>
              <div className="flex items-center justify-center p-4 text-center text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="text-urgency">✗</span> {row.others}
                </span>
              </div>
              <div className="flex items-center justify-center bg-cta/5 p-4 text-center text-sm font-semibold text-foreground">
                <span className="flex items-center gap-1">
                  <span className="text-cta-green">✔</span> {row.ids}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
