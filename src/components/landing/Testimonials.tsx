const testimonials = [
  {
    name: "Isha Verma",
    role: "Digital Marketing Specialist at Nykaa",
    salary: "₹12 LPA",
    text: "Real projects prepared me to run high-performing campaigns at Nykaa",
    before: "College Graduate",
    after: "DM Specialist",
  },
  {
    name: "Bhoomi gupta",
    role: "Marketing Automation Specialist at Razorpay",
    salary: "₹9.2 LPA",
    text: "Automation skills here helped me power campaigns at Razorpay.",
    before: "Marketing Specialist",
    after: "PPC Manager",
  },
  {
    name: "Arjun yadav",
    role: "Growth Marketing Manager at Razorpay",
    salary: "₹9.2 LPA",
    text: "Growth hacking, CRO & analytics helped me crack Razorpay — this program was a game changer!",
    before: "Marketing Manager",
    after: "Freelancer earning ₹80K/mo",
  },
  {
    name: "Divya Chaudhary",
    role: "Digital Marketing Specialist at Nykaa",
    salary: "₹12 LPA",
    text: "Real projects prepared me to run high-performing campaigns at Nykaa",
    before: "College Graduate",
    after: "DM Specialist",
  },
  {
    name: "Loveleen Sharma",
    role: "Marketing Automation Specialist at Razorpay",
    salary: "₹9.2 LPA",
    text: "Automation skills here helped me power campaigns at Razorpay.",
    before: "Marketing Specialist",
    after: "PPC Manager",
  },
  {
    name: "Daryl Fernandes",
    role: "Growth Marketing Manager at Razorpay",
    salary: "₹9.2 LPA",
    text: "Growth hacking, CRO & analytics helped me crack Razorpay — this program was a game changer!",
    before: "Marketing Manager",
    after: "Freelancer earning ₹80K/mo",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16" id="testimonials">
      <div className="container">
        <h2 className="mb-4 text-center font-display text-3xl font-extrabold text-foreground md:text-4xl">
          Real Students. Real <span className="text-gradient">AI Careers</span>.
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground">
          Real results from students who learned AI-powered digital marketing
        </p>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-border bg-card p-6 transition-all hover:shadow-card-hover">
              <div className="mb-4 flex gap-1 text-highlight">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
              <div className="mb-4 flex items-center gap-2 rounded-lg bg-accent/5 px-3 py-2 text-xs">
                <span className="text-muted-foreground">{t.before}</span>
                <span className="text-accent">→</span>
                <span className="font-semibold text-foreground">{t.after}</span>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-bold text-accent">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                    <p className="text-xs font-semibold text-cta-green">{t.salary}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
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
            className="bg-orange-500 px-8 py-3 rounded-lg text-white text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-[#EA2525]/50"
          >
            Book Free Career Counseling →
          </a>
        </div>
    </section>
  );
};

export default Testimonials;
