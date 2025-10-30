import { Navbar } from "@/components/Navbar";
import { MovieCard } from "@/components/MovieCard";

const Movies = () => {
  const movies = [
    {
      id: "QiOnk_8Sw",
      title: "A Longa Marcha, Caminhe ou Morra",
      description: "Em um futuro distópico, cem jovens são forçados a participar de uma competição mortal onde devem caminhar sem parar. Se pararem ou diminuírem o ritmo, são eliminados.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Filmes Disponíveis</h1>
          <p className="text-muted-foreground">Explore nossa coleção de filmes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              description={movie.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Movies;
