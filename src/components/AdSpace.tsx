interface AdSpaceProps {
  className?: string;
}

const AdSpace = ({ className = "" }: AdSpaceProps) => {
  return (
    <div className={`card-border p-8 flex items-center justify-center ${className}`}>
      <span className="text-muted-foreground text-sm">Ad Space</span>
    </div>
  );
};

export default AdSpace;
