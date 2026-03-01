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
              <h3 className="font-display text-lg font-bold text-muted-foreground">Traditional Digital Marketing</h3>
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

        {/* AI Tools Section */}
        <div className="mt-12 rounded-xl border border-cta/20 bg-gradient-to-br from-cta/5 to-accent/5 p-6 md:p-8">
          <h3 className="mb-6 text-center font-display text-2xl font-bold text-foreground md:text-3xl">
            What AI <span className="text-gradient">You Will Learn?</span>
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-3 rounded-lg bg-card/50 p-4 backdrop-blur-sm transition-all hover:bg-card/80">
              <span className="text-cta-green">✔</span>
              <div>
                <span className="font-semibold text-foreground">Perplexity</span>
                <span className="text-sm text-muted-foreground"> – deep research</span>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-card/50 p-4 backdrop-blur-sm transition-all hover:bg-card/80">
              <span className="text-cta-green">✔</span>
              <div>
                <span className="font-semibold text-foreground">Replit</span>
                <span className="text-sm text-muted-foreground"> – full stack AI developer</span>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-card/50 p-4 backdrop-blur-sm transition-all hover:bg-card/80">
              <span className="text-cta-green">✔</span>
              <div>
                <span className="font-semibold text-foreground">N8N</span>
                <span className="text-sm text-muted-foreground"> – workflow based automation (advance)</span>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-card/50 p-4 backdrop-blur-sm transition-all hover:bg-card/80">
              <span className="text-cta-green">✔</span>
              <div>
                <span className="font-semibold text-foreground">Zapier</span>
                <span className="text-sm text-muted-foreground"> – easy automation tool</span>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-card/50 p-4 backdrop-blur-sm transition-all hover:bg-card/80">
              <span className="text-cta-green">✔</span>
              <div>
                <span className="font-semibold text-foreground">Jasper</span>
                <span className="text-sm text-muted-foreground"> – AI agentic marketing tool that does marketing for you</span>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-card/50 p-4 backdrop-blur-sm transition-all hover:bg-card/80">
              <span className="text-cta-green">✔</span>
              <div>
                <span className="font-semibold text-foreground">Midjourney</span>
                <span className="text-sm text-muted-foreground"> – realistic image generation tool</span>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-card/50 p-4 backdrop-blur-sm transition-all hover:bg-card/80">
              <span className="text-cta-green">✔</span>
              <div>
                <span className="font-semibold text-foreground">Nano Banana</span>
                <span className="text-sm text-muted-foreground"> – detailed image generation</span>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-card/50 p-4 backdrop-blur-sm transition-all hover:bg-card/80">
              <span className="text-cta-green">✔</span>
              <div>
                <span className="font-semibold text-foreground">Veo</span>
                <span className="text-sm text-muted-foreground"> – video generation model from google</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              const heroSection = document.getElementById("hero");
              if (heroSection) {
                heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
                setTimeout(() => {
                  document.querySelector<HTMLInputElement>('form input[type="text"]')?.focus();
                }, 800);
              }
            }}
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
