import gravitasLogo from "@/assets/gravitas-logo-new.svg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <img
          src={gravitasLogo}
          alt="Gravitas Industries"
          className="h-24 md:h-32 lg:h-40 w-auto mx-auto animate-fade-in-up"
        />
        
        <div className="status-badge status-available animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="status-dot" />
          AVAILABLE FOR WORK
        </div>
        
        <div
          className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up space-y-6"
          style={{ animationDelay: "0.2s" }}
        >
          <p>
            Founded in 2017 by father-son team Michael and the late Samuel Chigbu, Gravitas Industries (formerly called Beta Concepts) began as a small, self-funded venture that allowed Michael to learn the ropes of starting and running it successfully just as his father had demonstrated to him throughout his life. Reimagined today in honour of Samuel's relentless work ethic, the company has evolved into a 100% youth-owned innovation hub with the structure of a modern holding company.
          </p>
          <p>
            Gravitas Industries is home to a growing portfolio of tech startups and digital platforms, all united by a shared commitment: unlocking youth empowerment, technological progress, and socio-economic transformation through meaningful partnerships across South Africa and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
