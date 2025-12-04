const partners = Array.from({ length: 10 }, (_, i) => ({
  name: `Partner ${i + 1}`,
  id: i + 1,
}));

const PartnersSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-10">
          Trusted Partners
        </h2>
        
        <div className="relative overflow-hidden animate-marquee-pause">
          <div className="flex animate-marquee gap-8">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-16 rounded-lg bg-card border border-border flex items-center justify-center"
              >
                <span className="text-muted-foreground text-sm">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
