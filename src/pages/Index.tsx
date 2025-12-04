import { useState } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AdSpace from "@/components/AdSpace";
import DevelopmentsSection from "@/components/DevelopmentsSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const ongoingProjects = [
  {
    name: "Jobbyist",
    description: "Africa's Premier Job Discovery & Career Management Platform",
    status: "Beta" as const,
    logo: "https://gravitas-industries.lovable.app/assets/jobbyist-logo-CBO-SdVr.png",
    users: 8542,
    likes: 342,
  },
  {
    name: "Laundri",
    description: "AI-Powered Fashion Label Creation & Design Tool",
    status: "Beta" as const,
    logo: "https://gravitas-industries.lovable.app/assets/laundri-logo-BLumjY3g.png",
    users: 6234,
    likes: 287,
  },
  {
    name: "SkinLabs",
    description: "Your All-In-One Skincare Nexus",
    status: "Beta" as const,
    logo: "https://gravitas-industries.lovable.app/assets/skinlabs-logo-Cle9Lm7v.png",
    users: 7891,
    likes: 412,
  },
  {
    name: "YUTE",
    description: "SA's Next-Generation Financial Wellness & Literacy Platform",
    status: "Beta" as const,
    logo: "https://gravitas-industries.lovable.app/assets/yute-logo-CBNfTqqE.png",
    users: 9156,
    likes: 523,
  },
  {
    name: "Outlandr",
    description: "The Expert Emigration Pre-Assessment & Travel Roadmap Tool",
    status: "Beta" as const,
    logo: "https://gravitas-industries.lovable.app/assets/outlandr-logo-oniM6uAU.png",
    users: 5623,
    likes: 198,
  },
  {
    name: "Auntie Tini's",
    description: "On-Demand Herbal Tincture Formulated with Love by Auntie Tini",
    status: "Beta" as const,
    logo: "https://gravitas-industries.lovable.app/assets/auntietinis-logo-B_3r-U-6.png",
    users: 4567,
    likes: 234,
  },
];

const upcomingProjects = [
  {
    name: "HausOfAura",
    description: "AI-Powered Home Improvement & Interior Design Marketplace",
    status: "Coming Soon" as const,
    logo: "https://gravitas-industries.lovable.app/assets/hausofaura-logo-BCpOpbqe.png",
    users: 3421,
    likes: 156,
  },
  {
    name: "Monogamy",
    description: "Digital Asset Management & AI Workflow Automation for Law Firms",
    status: "Coming Soon" as const,
    logo: "https://gravitas-industries.lovable.app/assets/monogamy-logo-WUo0KgRN.png",
    users: 2789,
    likes: 98,
  },
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div className={`min-h-screen bg-background ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}>
        <Header />
        
        <main>
          <HeroSection />
          
          <div className="px-6">
            <div className="max-w-6xl mx-auto">
              <AdSpace />
            </div>
          </div>
          
          <DevelopmentsSection
            title="Ongoing Developments"
            subtitle="Active projects in beta and continuous development"
            projects={ongoingProjects}
          />
          
          <DevelopmentsSection
            title="Upcoming Developments"
            subtitle="Next-generation solutions in planning and pre-launch"
            projects={upcomingProjects}
          />
          
          <div className="px-6 py-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <AdSpace />
              <AdSpace />
            </div>
          </div>
          
          <PartnersSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
