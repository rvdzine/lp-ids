const modules = [
  { title: "Search Engine Optimization (SEO)", desc: "On-page, off-page, technical SEO & local SEO", icon: "🔍" },
  { title: "Google Ads (PPC)", desc: "Search, display, shopping & YouTube ads", icon: "📊" },
  { title: "Meta Ads (Facebook & Instagram)", desc: "Campaign setup, targeting & optimization", icon: "📱" },
  { title: "Social Media Marketing", desc: "Strategy, content planning & community management", icon: "📣" },
  { title: "Content Marketing", desc: "Blog writing, copywriting & content strategy", icon: "✍️" },
  { title: "AI Tools & Automation", desc: "ChatGPT, AI content, marketing automation", icon: "🤖" },
  { title: "Email Marketing", desc: "Campaigns, funnels & automation workflows", icon: "📧" },
  { title: "Analytics & Reporting", desc: "Google Analytics, Data Studio & dashboards", icon: "📈" },
];

const CourseModules = () => (
  <section className="py-16" id="course">
    <div className="container">
      <h2 className="mb-4 text-center font-display text-3xl font-extrabold text-foreground md:text-4xl">
        What You'll <span className="text-gradient">Learn</span>
      </h2>
      <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground">
        Comprehensive curriculum designed by industry experts
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
