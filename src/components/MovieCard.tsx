import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { Button } from "./ui/button";

interface MovieCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
}

export const MovieCard = ({ id, title, description, thumbnail }: MovieCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary transition-all duration-300">
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
        {thumbnail ? (
          <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        ) : (
          <Play className="h-16 w-16 text-primary/50 group-hover:text-primary transition-colors" />
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {description}
        </p>
        <Link to={`/watch/${id}`}>
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <Play className="mr-2 h-4 w-4" />
            Assistir
          </Button>
        </Link>
      </div>
    </div>
  );
};
