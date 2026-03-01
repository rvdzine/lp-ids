import { Star, Play, X } from "lucide-react";
import { useRef, useState } from "react";

// Import images from assets
import loveleenImg from "@/assets/Loveleen.jpg";
import bhumiImg from "@/assets/Bhumi.jpg";
import divyaImg from "@/assets/Divya.png";
import ishaImg from "@/assets/Isha Verma.jpeg";

const reels = [
  {
    img: loveleenImg,
    video: "/videos/loveleen.mp4",
    rating: 5,
    username: "Loveleen Sharma",
    text: "This journey strengthened my skills to lead social media at Paytm.",
    logo: "/svg/Paytm.svg",
  },
  {
    img: bhumiImg,
    video: "/videos/Bhumi.mp4",
    rating: 5,
    username: "Bhumi Gupta",
    text: "Automation skills here helped me power campaigns at Razorpay.",
    logo: "/svg/razorpay.svg",
  },
  {
    img: divyaImg,
    video: "/videos/Divya.mp4",
    rating: 5,
    username: "Divya Chaudhary",
    text: "Content strategy training shaped me into a stronger brand storyteller.",
    logo: "/svg/testbook.svg",
  },
  {
    img: ishaImg,
    video: "/videos/Isha .mp4",
    rating: 5,
    username: "Isha Verma",
    text: "Real projects prepared me to run high-performing campaigns at Nykaa.",
    logo: "/svg/Nykaa.svg",
  },
];

export default function ReelsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const stopVideo = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setPlayingIndex(null);
  };

  return (
    <section className="relative py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900">
          Hear from IDS Alumni
        </h2>
        <p className="text-gray-600 text-center mt-3 md:mt-4 mb-8 md:mb-10 max-w-3xl mx-auto text-base md:text-lg px-4">
          Hear directly from our students how IDS&apos;s Programs have helped them accelerate their professional journey.
        </p>

        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 lg:gap-10 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2"
        >
          {reels.map((item, index) => (
            <div
              key={index}
              className="relative w-[240px] sm:w-[260px] md:w-[280px] h-[420px] sm:h-[460px] md:h-[500px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg bg-black"
            >
              {playingIndex === index ? (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={item.video}
                  autoPlay
                  controls
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <img src={item.img} alt="reel" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40"></div>
                </>
              )}

              {playingIndex !== index && (
                <div
                  onClick={() => setPlayingIndex(index)}
                  className="absolute inset-0 cursor-pointer flex justify-center items-center z-10"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/40 backdrop-blur-xl rounded-full flex justify-center items-center">
                    <Play size={28} className="text-white sm:w-8 sm:h-8" />
                  </div>
                </div>
              )}

              {playingIndex === index && (
                <button
                  onClick={() => stopVideo(index)}
                  className="absolute top-2 right-2 md:top-3 md:right-3 bg-black/60 text-white p-1.5 md:p-2 rounded-full z-10"
                >
                  <X size={18} className="md:w-5 md:h-5" />
                </button>
              )}

              {/* Bottom Section */}
              <div className="absolute bottom-0 w-full px-3 sm:px-4 md:px-5 pb-3 md:pb-4 pt-4 md:pt-6 bg-gradient-to-t from-black/90 to-transparent text-white z-10">
                <div className="flex gap-1 text-yellow-400 mb-1.5 md:mb-2">
                  {Array(item.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={16} fill="#facc15" stroke="#facc15" className="sm:w-[18px] sm:h-[18px]" />
                    ))}
                </div>

                <div className="flex justify-between items-end gap-2 text-xs sm:text-sm opacity-90">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold truncate">{item.username}</p>
                    <p className="opacity-80 line-clamp-2 text-[11px] sm:text-xs">{item.text}</p>
                  </div>

                  {item.logo && (
                    <img
                      src={item.logo}
                      alt="company logo"
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 opacity-90 object-contain flex-shrink-0"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
