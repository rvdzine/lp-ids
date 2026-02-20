const tools = [
  "ChatGPT", "Google Ads", "Meta Ads",
  "Canva", "Google Analytics", "Tag Manager",
  "WordPress", "Shopify", "HubSpot",
  "Pabbly", "Mailchimp", "Automation Tools",
];

const ToolsGrid = () => {
  return (
    <section className="bg-section-alt py-16" id="tools">
      <div className="container">
        <h2 className="mb-4 text-center font-display text-3xl font-extrabold text-foreground md:text-4xl">
          AI + Industry Tools You'll <span className="text-gradient">Master</span>
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground">
          20+ tools used by top AI-powered digital marketers worldwide
        </p>

        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-6">
          {tools.map((tool) => (
            <div
              key={tool}
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center transition-all hover:border-accent/40 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 font-display text-lg font-bold text-accent">
                {tool.charAt(0)}
              </div>
              <span className="text-xs font-medium text-foreground">{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;
