import React from 'react';

// Vos données avec des images haute définition de viennoiseries d'exception
const categories = [
  {
    id: "pate-brioche",
    title: "La Pâte à Brioche",
    technicalName: "La Pâte Levée",
    description: "Maîtrise des longues fermentations, du réseau glutineux et de l'incorporation parfaite du beurre pour un alvéolage filant unique.",
    image: "https://unsplash.com"
  },
  {
    id: "pate-plf",
    title: "La Pâte Levée Feuilletée",
    technicalName: "La P.L.F. Certifiée",
    description: "L'alchimie secrète des grands chefs : l'équilibre parfait entre le croustillant des tours et le moelleux de la pousse.",
    image: "https://unsplash.com"
  },
  {
    id: "pate-feuilletee",
    title: "La Pâte Feuilletée Classique",
    technicalName: "Le Feuilletage Tradition",
    description: "L'art géométrique du tourage pour des textures aériennes et un développement spectaculaire à la cuisson.",
    image: "https://unsplash.com"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#e5e5e5] flex flex-col justify-between px-8 py-16 font-sans">
      
      {/* En-tête : Style Maison de Haute Couture */}
      <header className="text-center max-w-4xl mx-auto mt-8 space-y-6">
        <span className="text-xs uppercase tracking-[0.3em] text-[#c48f45] font-medium block">
          HAUTE BOULANGERIE D'EXCELLENCE
        </span>
        <h1 className="text-4xl md:text-7xl font-light tracking-tight text-white font-serif font-extralight">
          L'art de la Viennoiserie
        </h1>
        <div className="h-[1px] w-16 bg-[#c48f45]/40 mx-auto my-6"></div>
        <p className="text-sm md:text-base text-gray-400 font-light tracking-wide max-w-xl mx-auto uppercase">
          Le savoir-faire des Maîtres Boulangers décodé de A à Z.
        </p>
      </header>

      {/* Les 3 Encarts Dynamiques de Prestige */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full mx-auto my-16">
        {categories.map((category) => (
          <div 
            key={category.id}
            className="group relative bg-[#121212] rounded-none border border-white/5 cursor-pointer overflow-hidden
                       transition-all duration-700 ease-out
                       hover:border-[#c48f45]/50 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]"
          >
            {/* Conteneur Image avec zoom ultra-fluide */}
            <div className="h-72 overflow-hidden relative">
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover transition-transform duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1) group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
              />
              {/* Voile doré subtil au survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-750" />
            </div>

            {/* Conteneur Textes Épurés */}
            <div className="p-8 flex flex-col justify-between h-64 bg-[#121212]">
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-[#c48f45] uppercase tracking-[0.2em] block">
                  {category.technicalName}
                </span>
                <h2 className="text-xl md:text-2xl font-light text-white tracking-wide group-hover:text-[#c48f45] transition-colors duration-500">
                  {category.title}
                </h2>
                <p className="text-xs text-gray-400 font-light leading-relaxed tracking-wide pt-2">
                  {category.description}
                </p>
              </div>
              
              {/* Bouton d'action élégant */}
              <div className="pt-4 flex items-center text-[10px] uppercase tracking-[0.2em] text-white font-medium group-hover:text-[#c48f45] transition-colors duration-300">
                <span className="border-b border-white/20 group-hover:border-[#c48f45] pb-1 transition-all duration-300">
                  Accéder au module
                </span>
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">&rarr;</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pied de page discret */}
      <footer className="text-center text-[10px] tracking-widest text-gray-600 uppercase mt-8">
        &copy; {new Date().getFullYear()} L'art de la Viennoiserie &mdash; Recettes Certifiées
      </footer>

    </div>
  );
}

export default App;