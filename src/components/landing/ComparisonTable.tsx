const rows = [
  { feature: "Training Style", others: "Only Theory", ids: "Live Client Projects" },
  { feature: "AI Integration", others: "Not Included", ids: "AI-Driven Marketing" },
  { feature: "Mentorship", others: "Limited", ids: "Industry Experts" },
  { feature: "Placement", others: "Not Structured", ids: "Dedicated Placement Team" },
  { feature: "Support", others: "Limited", ids: "Lifetime Resource Access" },
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

        <div className="overflow-x-auto">
          <div className="min-w-[600px] overflow-hidden rounded-xl border border-border shadow-lg">
            <div className="grid grid-cols-3 bg-primary text-primary-foreground">
              <div className="p-3 text-xs font-semibold md:p-4 md:text-sm">Feature</div>
              <div className="p-3 text-center text-xs font-semibold opacity-60 md:p-4 md:text-sm">Others</div>
              <div className="bg-cta p-3 text-center text-xs font-bold text-cta-foreground md:p-4 md:text-sm">IDS ⭐</div>
            </div>
            {rows.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-card" : "bg-muted/50"}`}>
                <div className="p-3 text-xs font-medium text-foreground md:p-4 md:text-sm">{row.feature}</div>
                <div className="flex items-center justify-center p-3 text-center text-xs text-muted-foreground md:p-4 md:text-sm">
                  <span className="flex items-center gap-1">
                    <span className="text-urgency">✗</span> <span className="hidden sm:inline">{row.others}</span>
                  </span>
                </div>
                <div className="flex items-center justify-center bg-cta/5 p-3 text-center text-xs font-semibold text-foreground md:p-4 md:text-sm">
                  <span className="flex items-center gap-1">
                    <span className="text-cta-green">✔</span> <span className="hidden sm:inline">{row.ids}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
