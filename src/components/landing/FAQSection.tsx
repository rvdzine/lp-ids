import { useState } from "react";

const faqs = [
  {
    q: "Is this course beginner friendly?",
    a: "Absolutely! Our course is designed for complete beginners. No prior marketing or coding experience is required. We start from the basics and progressively introduce AI tools and advanced strategies.",
  },
  {
    q: "Do I need coding knowledge?",
    a: "No coding required at all. We use no-code AI tools and platforms. Everything is taught with practical, hands-on exercises that anyone can follow.",
  },
  {
    q: "How is AI included in the training?",
    a: "AI is integrated throughout the curriculum — from AI-powered content creation with ChatGPT, to automated campaign optimization, AI-based keyword research, and prompt engineering for marketing. You'll graduate as an AI-enabled marketer.",
  },
  {
    q: "Is placement guaranteed?",
    a: "We provide dedicated placement assistance with 95% placement support rate. This includes resume building, LinkedIn optimization, mock interviews, portfolio creation, and direct connections to 100+ hiring partners.",
  },
  {
    q: "Can I learn while working full-time?",
    a: "Yes! We offer flexible weekend and evening batches. Many of our successful students completed the course while working full-time jobs.",
  },
  {
    q: "Is scholarship available?",
    a: "Yes, we offer early bird scholarships for students who enroll before the batch starts. Contact our counselors for current scholarship offers and payment plans.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-section-alt py-16" id="faq">
      <div className="container max-w-3xl">
        <h2 className="mb-4 text-center font-display text-3xl font-extrabold text-foreground md:text-4xl">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground">
          Got questions? We've got answers.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-border bg-card">
              <button
                className="flex w-full items-center justify-between p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="pr-4 font-display text-sm font-bold text-foreground md:text-base">{faq.q}</span>
                <span className={`shrink-0 text-xl text-muted-foreground transition-transform ${open === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="border-t border-border px-5 pb-5 pt-3">
                  <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
