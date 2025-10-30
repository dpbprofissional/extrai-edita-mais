import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Film } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <Film className="h-24 w-24 text-primary mx-auto mb-6" />
        <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">Página não encontrada</p>
        <Link to="/">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Voltar ao Início
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
