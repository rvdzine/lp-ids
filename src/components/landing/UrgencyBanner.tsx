import { useState, useEffect } from "react";

const getNextBatchDate = () => {
  const now = new Date();
  
  // Set the next official batch start date (example: March 7, 2026)
  // Update this date when you want to change the batch start date
  const nextBatchDate = new Date('2026-03-07T00:00:00');
  
  // If current date is past the batch date, add 7 days to the batch date
  if (now >= nextBatchDate) {
    // Calculate how many weeks have passed since the batch date
    const weeksPassed = Math.ceil((now.getTime() - nextBatchDate.getTime()) / (7 * 24 * 60 * 60 * 1000));
    // Add that many weeks to get the next batch date
    const updatedBatchDate = new Date(nextBatchDate.getTime() + (weeksPassed * 7 * 24 * 60 * 60 * 1000));
    return updatedBatchDate;
  }
  
  return nextBatchDate;
};

const UrgencyBanner = () => {
  const batchDate = getNextBatchDate();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = batchDate.getTime() - Date.now();
      if (diff <= 0) {
        // When countdown reaches zero, reload to get next batch date
        window.location.reload();
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [batchDate]);

  const batchStr = batchDate.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

  return (
    <section className="bg-cta-gradient py-4 md:py-6 fixed bottom-0 left-0 right-0 z-50" id="urgency">
      <div className="container">
        <div className="flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left md:gap-6">
          <div>
            <p className="font-display text-sm font-bold text-cta-foreground md:text-xl">
              🔥 Next Batch: {batchStr}
            </p>
            <p className="hidden mt-1 text-sm text-cta-foreground/80 md:block">
              Early Bird Scholarship Closing Soon · Limited Seats Only
            </p>
          </div>

          <div className="flex gap-2 md:gap-3">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Min", value: timeLeft.minutes },
              { label: "Sec", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center rounded-lg bg-primary/80 px-3 py-1 md:px-4 md:py-2 backdrop-blur-sm">
                <span className="font-display text-lg md:text-2xl font-extrabold text-cta-foreground">{String(item.value).padStart(2, "0")}</span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-cta-foreground/70">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencyBanner;
