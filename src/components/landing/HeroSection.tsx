import heroBg from "@/assets/hero-bg.jpg";
import LeadForm from "./LeadForm";

const benefits = [
  "Beginner Friendly – No Coding Required",
  "AI-Infused Live Client Projects",
  "20+ Industry & AI Tools",
  "Resume + LinkedIn Optimization",
  "Dedicated Placement Support",
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-hero" id="hero">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        loading="eager"
      />
      <div className="relative z-10 container py-12 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cta/30 bg-cta/10 px-4 py-1.5 text-sm font-medium text-cta">
              <span className="h-2 w-2 animate-pulse-slow rounded-full bg-cta" />
              🔥 India's AI-First Digital Marketing Institute | 2026 Updated Curriculum
            </div>

            <h1 className="mb-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-hero-foreground md:text-5xl lg:text-[3.5rem]">
              Launch Your Career as an{" "}
              <span className="text-gradient">AI-Powered Digital Marketer</span>{" "}
              in 3–6 Months
            </h1>

            <p className="mb-3 max-w-lg text-lg leading-relaxed text-hero-foreground/80">
              Master AI-Driven SEO, Google Ads, Meta Ads & Automation with Live Client Projects + Placement Assistance
            </p>

            <p className="mb-8 inline-block rounded-md bg-cta/15 px-3 py-1.5 text-sm font-semibold text-cta">
              ⚡ AI is changing hiring. Companies now prefer AI-enabled marketers.
            </p>

            <ul className="mb-8 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-hero-foreground/90">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cta-green/20 text-cta-green">
                    ✔
                  </span>
                  <span className="text-sm font-medium md:text-base">{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href="#hero"
                onClick={() => {
                  document.querySelector<HTMLInputElement>('form input[type="text"]')?.focus();
                }}
                className="inline-flex items-center rounded-lg bg-cta-gradient px-8 py-4 font-display text-base font-bold text-cta-foreground shadow-cta transition-all hover:scale-105 active:scale-95 lg:hidden"
              >
                Book Free Career Counseling →
              </a>
              <a
                href="https://wa.me/919315471293?text=Hi%2C%20I%20want%20course%20details"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if ((window as any).dataLayer) {
                    (window as any).dataLayer.push({ event: "whatsapp_click", location: "hero" });
                  }
                }}
                className="inline-flex items-center gap-2 rounded-lg border border-cta-green/40 bg-cta-green/10 px-6 py-4 font-display text-sm font-bold text-cta-green transition-all hover:bg-cta-green/20"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.4 0-4.636-.812-6.424-2.18l-.148-.117-3.079 1.033 1.033-3.079-.117-.148A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Mobile Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 lg:hidden">
              <div className="rounded-lg bg-hero-foreground/5 p-3 backdrop-blur-sm">
                <div className="font-display text-2xl font-extrabold text-cta">2000+</div>
                <div className="text-xs text-hero-foreground/70">Students Trained</div>
              </div>
              <div className="rounded-lg bg-hero-foreground/5 p-3 backdrop-blur-sm">
                <div className="font-display text-2xl font-extrabold text-accent">95%</div>
                <div className="text-xs text-hero-foreground/70">Placement Rate</div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="hidden lg:block">
            <LeadForm />
          </div>
        </div>
      </div>

      {/* Mobile Form */}
      <div className="container pb-6 lg:hidden">
        <LeadForm />
      </div>
    </section>
  );
};

export default HeroSection;
