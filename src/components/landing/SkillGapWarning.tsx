const warnings = [
  "Traditional marketers are being replaced by AI tools",
  "Salaries are stagnating for outdated skillsets",
  "Companies prefer automation-ready professionals",
  "AI-skilled marketers are getting higher-paying roles",
];

const SkillGapWarning = () => {
  return (
    <section className="py-16" id="skill-gap">
      <div className="container max-w-4xl">
        <h2 className="mb-4 text-center font-display text-3xl font-extrabold text-foreground md:text-4xl">
          What Happens If You{" "}
          <span className="text-urgency">Don't Upgrade</span> Your Skills?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground">
          The marketing industry is evolving fast. Those who don't adapt will be left behind.
        </p>

        <div className="mx-auto max-w-2xl space-y-4">
          {warnings.map((w) => (
            <div
              key={w}
              className="flex items-center gap-4 rounded-xl border border-urgency/20 bg-urgency/5 p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-urgency/10 text-lg text-urgency">
                ⚠
              </span>
              <p className="text-sm font-medium text-foreground md:text-base">{w}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-cta/20 bg-cta/5 p-6 text-center">
          <p className="font-display text-lg font-extrabold text-foreground md:text-xl">
            Don't Get Left Behind in the <span className="text-gradient">AI Revolution</span>.
          </p>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#hero"
            className="inline-flex items-center rounded-lg bg-cta-gradient px-8 py-4 font-display text-base font-bold text-cta-foreground shadow-cta transition-all hover:scale-105 active:scale-95"
          >
            Future-Proof My Career →
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillGapWarning;
