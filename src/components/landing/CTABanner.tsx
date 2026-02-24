const CTABanner = () => {
  return (
    <section className="bg-hero py-16">
      <div className="container text-center">
        <h2 className="mb-4 font-display text-3xl font-extrabold text-hero-foreground md:text-4xl">
          Ready to Become a Future-Ready{" "}
          <span className="text-gradient">AI Digital Marketer</span>?
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-hero-foreground/70">
          Seats Filling Fast – Secure Your Spot Today
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
            Book Free Career Counseling →
          </a>
          <a
            href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20course%20details"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-cta-green/40 px-6 py-4 font-display text-sm font-bold text-cta-green transition-all hover:bg-cta-green/10"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
