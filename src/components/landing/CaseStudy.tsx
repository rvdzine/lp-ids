const CaseStudy = () => {
  return (
    <section className="bg-section-alt py-16" id="case-study">
      <div className="container max-w-4xl">
        <h2 className="mb-4 text-center font-display text-3xl font-extrabold text-foreground md:text-4xl">
          From Beginner to{" "}
          <span className="text-gradient">₹7.5 LPA</span> – Real Student Transformation
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground">
          Real Skills. Real Results.
        </p>

        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
          <div className="grid md:grid-cols-2">
            {/* Before */}
            <div className="border-b border-border p-8 md:border-b-0 md:border-r">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-urgency/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-urgency">
                Before IDS
              </div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted font-display text-2xl font-bold text-muted-foreground">
                AS
              </div>
              <h3 className="mb-1 font-display text-lg font-bold text-foreground">Arjun Singh</h3>
              <p className="mb-3 text-sm text-muted-foreground">Fresh B.Com Graduate</p>
              <div className="rounded-lg bg-muted/50 p-4">
                <p className="text-2xl font-extrabold text-urgency">₹12,000<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                <p className="mt-1 text-xs text-muted-foreground">Part-time data entry job. No career direction.</p>
              </div>
            </div>

            {/* After */}
            <div className="p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cta-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cta-green">
                After IDS
              </div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 font-display text-2xl font-bold text-accent">
                AS
              </div>
              <h3 className="mb-1 font-display text-lg font-bold text-foreground">Arjun Singh</h3>
              <p className="mb-3 text-sm text-muted-foreground">Digital Marketing Executive at WebScale Digital</p>
              <div className="rounded-lg bg-cta-green/5 p-4">
                <p className="text-2xl font-extrabold text-cta-green">₹7.5 LPA</p>
                <p className="mt-1 text-xs text-muted-foreground">Placed in just 4 months after enrollment.</p>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="border-t border-border p-8">
            <h4 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-accent">
              Transformation Story
            </h4>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              Arjun joined IDS with zero marketing knowledge. Within weeks, he was running live Google Ads campaigns for real clients. The AI tools training — especially prompt engineering and automated reporting — gave him skills that most experienced marketers don't have. He received 3 job offers and chose a role at WebScale Digital.
            </p>
            <div className="flex flex-wrap gap-2">
              {["ChatGPT", "Google Ads", "Meta Ads", "SEO", "Analytics"].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              ⏱ Timeline: 4 months from enrollment to placement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
