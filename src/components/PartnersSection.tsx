import supabaseLogo from "@/assets/logos/supabase.svg";
import foxyLogo from "@/assets/logos/foxy.svg";
import webflowLogo from "@/assets/logos/webflow.svg";
import stitchLogo from "@/assets/logos/stitch.svg";
import nameLogo from "@/assets/logos/name.svg";
import shopifyLogo from "@/assets/logos/shopify.svg";
import googleLogo from "@/assets/logos/google.svg";
import flippaLogo from "@/assets/logos/flippa.svg";

const partners = [
  { name: "Supabase", logo: supabaseLogo, id: 1 },
  { name: "Foxy", logo: foxyLogo, id: 2 },
  { name: "Webflow", logo: webflowLogo, id: 3 },
  { name: "Stitch", logo: stitchLogo, id: 4 },
  { name: "Name", logo: nameLogo, id: 5 },
  { name: "Shopify", logo: shopifyLogo, id: 6 },
  { name: "Google", logo: googleLogo, id: 7 },
  { name: "Flippa", logo: flippaLogo, id: 8 },
];

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
                className="flex-shrink-0 w-32 h-16 rounded-lg bg-card border border-border flex items-center justify-center p-3"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
