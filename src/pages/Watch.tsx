import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

const Watch = () => {
  const { id } = useParams();

  // Estrutura principal de filmes e séries
  const movieDetails: Record<
    string,
    {
      title: string;
      description: string;
      type: "movie" | "series";
      embedUrl?: string;
      seasons?: {
        [seasonNumber: string]: {
          [episodeNumber: string]: {
            title: string;
            embedUrl: {
              dublado: string;
              legendado: string;
            };
          };
        };
      };
    }
  > = {
    QiOnk_8Sw: {
      title: "A Longa Marcha, Caminhe ou Morra",
      description:
        "Em um futuro distópico, cem jovens são forçados a participar de uma competição mortal onde devem caminhar sem parar. Se pararem ou diminuírem o ritmo, são eliminados. Uma jornada intensa de sobrevivência e resistência.",
      type: "movie",
      embedUrl: "https://mxdrop.to/e/dkrd6m1eu8k8p6",
    },

    mostro_florenca: {
      title: "O Monstro de Florença",
      description:
        "Mini série de 4 episódios baseada em fatos reais sobre os assassinatos que aterrorizaram Florença, Itália, durante décadas. Uma história perturbadora de crime, investigação e mistério.",
      type: "series",
      seasons: {
        "1": {
          "1": {
            title: "Episódio 1 - O Início",
            embedUrl: {
              dublado: "https://mxdrop.to/e/gjdk3n9jsplpd0",
              legendado: "https://mxdrop.to/e/episodio1-leg",
            },
          },
          "2": {
            title: "Episódio 2 - O Mistério Aprofunda",
            embedUrl: {
              dublado: "https://mxdrop.to/e/1no47n60crzvqo",
              legendado: "https://mxdrop.to/e/episodio2-leg",
            },
          },
          "3": {
            title: "Episódio 3 - As Pistas Somem",
            embedUrl: {
              dublado: "https://mxdrop.to/e/episodio3-dub",
              legendado: "https://mxdrop.to/e/episodio3-leg",
            },
          },
          "4": {
            title: "Episódio 4 - A Verdade Vem à Tona",
            embedUrl: {
              dublado: "https://mxdrop.to/e/episodio4-dub",
              legendado: "https://mxdrop.to/e/episodio4-leg",
            },
          },
        },

  const movie = movieDetails[id || ""] || movieDetails.QiOnk_8Sw;

  // Estados para controle das seleções
  const [selectedSeason, setSelectedSeason] = useState("1");
  const [selectedEpisode, setSelectedEpisode] = useState("1");
  const [selectedLanguage, setSelectedLanguage] = useState<
    "dublado" | "legendado"
  >("dublado");

  // URL final do vídeo (dinâmico conforme seleção)
  const videoUrl =
    movie.type === "movie"
      ? movie.embedUrl
      : movie.seasons?.[selectedSeason]?.[selectedEpisode]?.embedUrl?.[
          selectedLanguage
        ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-12">
        <Link to="/movies">
          <Button
            variant="ghost"
            className="mb-6 text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar aos Filmes
          </Button>
        </Link>

        <div className="max-w-7xl mx-auto">
          {/* Seletor de temporada / episódio / idioma */}
          {movie.type === "series" && (
            <div className="mb-6 flex flex-wrap gap-4 items-center">
              {/* Temporada */}
              <select
                value={selectedSeason}
                onChange={(e) => {
                  setSelectedSeason(e.target.value);
                  setSelectedEpisode("1");
                }}
                className="border rounded-md bg-background text-foreground p-2"
              >
                {Object.keys(movie.seasons || {}).map((season) => (
                  <option key={season} value={season}>
                    Temporada {season}
                  </option>
                ))}
              </select>

              {/* Episódio */}
              <select
                value={selectedEpisode}
                onChange={(e) => setSelectedEpisode(e.target.value)}
                className="border rounded-md bg-background text-foreground p-2"
              >
                {Object.keys(movie.seasons?.[selectedSeason] || {}).map((ep) => (
                  <option key={ep} value={ep}>
                    Episódio {ep} -{" "}
                    {movie.seasons?.[selectedSeason]?.[ep].title}
                  </option>
                ))}
              </select>

              {/* Idioma */}
              <select
                value={selectedLanguage}
                onChange={(e) =>
                  setSelectedLanguage(
                    e.target.value as "dublado" | "legendado"
                  )
                }
                className="border rounded-md bg-background text-foreground p-2"
              >
                <option value="dublado">Dublado</option>
                <option value="legendado">Legendado</option>
              </select>
            </div>
          )}

          {/* Player */}
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-black mb-6">
            <iframe
              src={videoUrl}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay"
              allowFullScreen
              title={movie.title}
            />
          </div>

          {/* Descrição */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              {movie.title}
            </h1>
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
