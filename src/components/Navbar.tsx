import { Link, useLocation } from "react-router-dom";
import { Film } from "lucide-react";

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Film className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-bold text-foreground">CineXos</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Início
            </Link>
            <Link
              to="/movies"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/movies" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Filmes
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
