const traditional = [
  "Manual content writing",
  "Manual ad optimization",
  "Manual reporting",
  "Basic SEO research",
];

const aiPowered = [
  "Prompt-driven ad copy creation",
  "AI-assisted campaign optimization",
  "Automated analytics dashboards",
  "AI-based keyword & competitor research",
  "No-code AI funnels",
];

const AIAdvantage = () => {
  return (
    <section className="py-16" id="ai-advantage">
      <div className="container max-w-5xl">
        <h2 className="mb-4 text-center font-display text-3xl font-extrabold text-foreground md:text-4xl">
          India's <span className="text-gradient">AI-Integrated</span> Digital Marketing Program
        </h2>
        <p className="mx-auto mb-4 max-w-2xl text-center text-muted-foreground">
          At IDS, you don't just learn digital marketing. You learn how to combine AI with marketing to become 10x more efficient and future-ready.
        </p>
        <p className="mx-auto mb-12 max-w-2xl text-center font-display text-sm font-bold text-accent">
          This is not a traditional digital marketing course. This is AI-infused career training.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Traditional */}
          <div className="rounded-xl border border-border bg-muted/50 p-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted-foreground/10 text-lg">📋</span>
              <h3 className="font-display text-lg font-bold text-muted-foreground">Traditional Marketing</h3>
            </div>
            <ul className="space-y-3">
              {traditional.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="text-urgency">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* AI-Powered */}
          <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-lg">🤖</span>
              <h3 className="font-display text-lg font-bold text-accent">AI-Powered Marketing at IDS</h3>
            </div>
            <ul className="space-y-3">
              {aiPowered.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="text-cta-green">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#hero"
            className="inline-flex items-center rounded-lg bg-cta-gradient px-8 py-4 font-display text-base font-bold text-cta-foreground shadow-cta transition-all hover:scale-105 active:scale-95"
          >
            See How AI Changes Marketing →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIAdvantage;
