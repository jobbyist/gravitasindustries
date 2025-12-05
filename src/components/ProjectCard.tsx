import { useState } from "react";
import { Users, Heart } from "lucide-react";
import ProjectDetailModal from "./ProjectDetailModal";

interface ProjectCardProps {
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

const ProjectCard = (props: ProjectCardProps) => {
  const { name, description, status, logo, users, likes } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const statusStyles = status === "Beta" 
    ? "bg-primary/20 text-primary" 
    : "bg-muted text-muted-foreground";

  return (
    <>
      <div className="group relative bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:bg-card/80">
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
              <img src={logo} alt={`${name} logo`} className="w-10 h-10 object-contain" />
            </div>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusStyles}`}>
              {status}
            </span>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold font-display text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              <span>{users.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Heart className="w-4 h-4" />
              <span>{likes}</span>
            </div>
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full mt-2 py-2.5 px-4 rounded-lg bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-colors duration-300"
          >
            Learn More
          </button>
        </div>
      </div>

      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={props}
      />
    </>
  );
};

export default ProjectCard;
