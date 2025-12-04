import gravitasLogo from "@/assets/gravitas-logo.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <img
          src={gravitasLogo}
          alt="Gravitas Industries"
          className="h-14 md:h-20 w-auto mx-auto animate-fade-in-up"
        />
        
        <div className="status-badge status-available animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="status-dot" />
          AVAILABLE FOR WORK
        </div>
        
        <p
          className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          An independently owned, operated, and social benefit enterprise positioning 
          itself as one of South Africa's top players in the rapidly evolving tech 
          industry through strategic product development and a noteworthy digital 
          asset portfolio.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
