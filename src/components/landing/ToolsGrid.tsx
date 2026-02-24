const toolsData = [
  { id: 1, name: "SEMRUSH", logo: "/svg/download 7.svg" },
  { id: 2, name: "Hootsuite", logo: "/svg/download 10.svg" },
  { id: 3, name: "HubSpot", logo: "/svg/download 36.svg" },
  { id: 4, name: "Mailchimp", logo: "/svg/download 16.svg" },
  { id: 5, name: "Google Ads", logo: "/svg/download 18.svg" },
  { id: 6, name: "Google Analytics", logo: "/svg/download 20.svg" },
  { id: 7, name: "Salesforce", logo: "/svg/download 28.svg" },
  { id: 8, name: "HubSpot Marketing Hub", logo: "/svg/download 26.svg" },
  { id: 9, name: "Canva", logo: "/svg/download 31.svg" },
  { id: 10, name: "Refersion", logo: "/assets/mask-group.png" },
  { id: 11, name: "AI-Powered Marketing", logo: "/assets/ai-marketing.png" },
  { id: 12, name: "Clarity Hotjar", logo: "/assets/conversion-rate.png" },
  { id: 13, name: "WordPress", logo: "/assets/wordpress.png" },
  { id: 14, name: "Pabbly", logo: "/assets/pabbly.png" },
  { id: 15, name: "Shopify", logo: "/assets/shopify.png" },
];

const ROWS = 3;
const toolsPerRow = Math.ceil(toolsData.length / ROWS);

const rows = Array.from({ length: ROWS }, (_, i) =>
  toolsData.slice(i * toolsPerRow, (i + 1) * toolsPerRow)
);

const ToolsGrid = () => {
  return (
    <section className="bg-section-alt py-16 overflow-hidden" id="tools">
      <div className="container">
        <h2 className="mb-4 text-center font-display text-3xl font-extrabold text-foreground md:text-4xl">
          AI + Industry Tools You'll <span className="text-gradient">Master</span>
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground">
          20+ tools used by top AI-powered digital marketers worldwide
        </p>

        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex w-max gap-3 sm:gap-4 md:gap-6 ${
                rowIndex % 2 === 0
                  ? "animate-scroll-left"
                  : "animate-scroll-right"
              }`}
            >
              {[...row, ...row, ...row].map((tool, index) => (
                <div
                  key={`${tool.id}-${index}`}
                  className="bg-white rounded-xl shadow-md w-[140px] h-[80px] sm:w-[160px] sm:h-[90px] md:w-[180px] md:h-[100px] flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;
