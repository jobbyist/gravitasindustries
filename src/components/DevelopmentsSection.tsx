import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  name: string;
  description: string;
  descriptionLong: string;
  status: "Beta" | "Coming Soon";
  logo: string;
  users: number;
  likes: number;
  websiteUrl: string;
  appraisalValue: number;
}

interface DevelopmentsSectionProps {
  title: string;
  subtitle: string;
  projects: Project[];
}

const DevelopmentsSection = ({ title, subtitle, projects }: DevelopmentsSectionProps) => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">{title}</h2>
            <p className="text-muted-foreground mt-2">{subtitle}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentsSection;
