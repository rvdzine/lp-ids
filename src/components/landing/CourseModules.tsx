const modules = [
  { title: "SEO (with AI Tools)", desc: "On-page, off-page, technical SEO powered by AI research", icon: "🔍" },
  { title: "Google Ads (AI Optimization)", desc: "Smart bidding, automated campaigns & AI ad copy", icon: "📊" },
  { title: "Meta Ads Automation", desc: "AI-driven targeting, creative testing & scaling", icon: "📱" },
  { title: "AI Content Systems", desc: "Prompt engineering, ChatGPT workflows & content at scale", icon: "🤖" },
  { title: "Email Automation", desc: "Drip campaigns, AI personalization & funnels", icon: "📧" },
  { title: "Analytics & Reporting", desc: "Google Analytics, automated dashboards & insights", icon: "📈" },
  { title: "No-Code Funnel Building", desc: "Landing pages, lead funnels & conversion optimization", icon: "🚀" },
  { title: "Prompt Engineering for Marketing", desc: "Master AI prompts for ads, content & strategy", icon: "✨" },
];

const CourseModules = () => (
  <section className="py-16" id="course">
    <div className="container">
      <h2 className="mb-4 text-center font-display text-3xl font-extrabold text-foreground md:text-4xl">
        AI + Digital Marketing <span className="text-gradient">Mastery</span>
      </h2>
      <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground">
        Comprehensive AI-integrated curriculum designed by industry experts
      </p>

      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-4">
        {modules.map((m) => (
          <div key={m.title} className="rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-card-hover">
            <div className="mb-3 text-2xl">{m.icon}</div>
            <h3 className="mb-1 font-display text-sm font-bold text-foreground">{m.title}</h3>
            <p className="text-xs text-muted-foreground">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CourseModules;
