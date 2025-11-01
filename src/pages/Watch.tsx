import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

const Watch = () => {
  const { id } = useParams();

  const movieDetails: Record<string, { title: string; description: string; embedUrl: string }> = {
    QiOnk_8Sw: {
      title: "A Longa Marcha, Caminhe ou Morra",
      description: "Em um futuro distópico, cem jovens são forçados a participar de uma competição mortal onde devem caminhar sem parar. Se pararem ou diminuírem o ritmo, são eliminados. Uma jornada intensa de sobrevivência e resistência.",
      embedUrl: "https://mxdrop.to/e/dkrd6m1eu8k8p6",
    },
    mostro_florenca: {
      title: "O Monstro de Florença",
      description: "Mini série de 4 episódios baseada em fatos reais sobre os assassinatos que aterrorizaram Florença, Itália, durante décadas. Uma história perturbadora de crime, investigação e mistério que manteve a polícia italiana em alerta por anos.",
      embedUrl: "https://mxdrop.to/e/gjdk3n9jsplpd0",
    },
  };

  const movie = movieDetails[id || ""] || movieDetails.QiOnk_8Sw;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <Link to="/movies">
          <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar aos Filmes
          </Button>
        </Link>

        <div className="max-w-7xl mx-auto">
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-black mb-6">
            <iframe
              src={movie.embedUrl}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay"
              allowFullScreen
              title={movie.title}
            />
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h1 className="text-3xl font-bold text-foreground mb-4">{movie.title}</h1>
            <p className="text-muted-foreground leading-relaxed">
              {movie.description}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Watch;
