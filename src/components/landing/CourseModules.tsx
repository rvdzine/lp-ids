const modules = [
  { title: "Digital Marketing Foundations", desc: "Introduction to digital marketing, customer journey, marketing channels, and industry tools.", icon: "🔍" },
  { title: "SEO & Google Ranking (with AI Tools)", desc: "Keyword research, on-page SEO, off-page SEO, technical SEO, and Google My Business (GMB) optimization.", icon: "📊" },
  { title: "Facebook & Instagram Ads", desc: "Campaign setup, targeting strategies, retargeting, ad creatives, and scaling Meta ad campaigns.", icon: "📱" },
  { title: "Google Ads Mastery", desc: "Search ads, display ads, smart bidding, AI ad copy, and conversion optimization.", icon: "🤖" },
  { title: "YouTube Marketing & Ads", desc: "YouTube channel growth, video SEO, ad campaigns, and audience targeting.", icon: "📧" },
  { title: "AI Content Creation & Prompt Engineering", desc: "Using AI tools for content writing, marketing strategy, ad copy, and automation workflows", icon: "📈" },
  { title: "Graphic Design for Marketing", desc: "Social media creatives, ad banners, thumbnails, and branding basics using modern tools", icon: "🚀" },
  { title: "Website Development & Landing Pages", desc: "Build professional websites and high-converting landing pages without coding", icon: "✨" },
  { title: "Sales Funnels & Marketing Automation", desc: "Lead generation funnels, CRM automation, chatbot flows, and conversion optimization", icon: "📧" },
  { title: "Email Marketing Automation", desc: "Email campaigns, drip sequences, personalization, and customer nurturing systems", icon: "📈" },
  { title: "Affiliate Marketing", desc: "Learn how to promote products, generate commissions, and build passive income systems", icon: "🚀" },
  { title: "E-commerce, Dropshipping & Analytics", desc: "Online store marketing, product ads strategy, tracking, analytics, and campaign optimization", icon: "✨" },

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
