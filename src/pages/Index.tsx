import { useState } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AdSpace from "@/components/AdSpace";
import DevelopmentsSection from "@/components/DevelopmentsSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import { useProjects } from "@/hooks/useProjects";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { projects, loading: projectsLoading } = useProjects();

  // Transform database projects to match component format
  const transformedProjects = projects.map((p) => ({
    name: p.name,
    description: p.description,
    status: p.status === "coming_soon" ? ("Coming Soon" as const) : ("Beta" as const),
    logo: p.logo_url || "",
    users: p.users_count,
    likes: p.likes_count,
  }));

  const ongoingProjects = transformedProjects.filter((p) => p.status === "Beta");
  const upcomingProjects = transformedProjects.filter((p) => p.status === "Coming Soon");

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
          
          {!projectsLoading && ongoingProjects.length > 0 && (
            <DevelopmentsSection
              title="Ongoing Developments"
              subtitle="Active projects in beta and continuous development"
              projects={ongoingProjects}
            />
          )}
          
          {!projectsLoading && upcomingProjects.length > 0 && (
            <DevelopmentsSection
              title="Upcoming Developments"
              subtitle="Next-generation solutions in planning and pre-launch"
              projects={upcomingProjects}
            />
          )}
          
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
