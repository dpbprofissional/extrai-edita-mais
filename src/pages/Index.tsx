import { Link } from "react-router-dom";
import { Play, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Film className="h-12 w-12 text-primary" />
              <span className="text-sm uppercase tracking-wider text-primary font-semibold">
                Streaming Premium
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Assista aos melhores filmes
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore nossa coleção exclusiva de filmes. Qualidade premium, streaming ilimitado.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/movies">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                  <Play className="mr-2 h-5 w-5" />
                  Começar a assistir
                </Button>
              </Link>
              <Link to="/watch/QiOnk_8Sw">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Ver filme em destaque
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background -z-10" />
      </section>

      {/* Featured Movie Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Em Destaque</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center border border-border">
              <Play className="h-20 w-20 text-primary" />
            </div>
            <div>
              <h3 className="text-4xl font-bold text-foreground mb-4">Filme Especial</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Um filme incrível que você não pode perder. Mergulhe nesta experiência cinematográfica única e emocionante.
              </p>
              <Link to="/watch/QiOnk_8Sw">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Play className="mr-2 h-5 w-5" />
                  Assistir Agora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 CineXos. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
