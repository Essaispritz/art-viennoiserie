import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toutesLesRecettes } from '../recettes';

export default function PageRecette() {
  const { id } = useParams();
  const recipe = toutesLesRecettes[id];

  const [multiplier, setMultiplier] = useState(1);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-[#0b0b0b] text-white flex flex-col items-center justify-center space-y-6 font-body">
        <p className="text-gray-400 tracking-wide">Fiche technique en cours de rédaction dans le laboratoire...</p>
        <Link to="/" className="text-xs uppercase tracking-widest text-[#c48f45] border-b border-[#c48f45]/30 pb-1 hover:border-[#c48f45]">
          &larr; Retour à l'accueil
        </Link>
      </div>
    );
  }

  const formatQuantity = (quantiteStr, mult) => {
    const numero = parseFloat(quantiteStr);
    if (isNaN(numero)) return quantiteStr;
    const unite = quantiteStr.replace(/[0-8.,]/g, '').trim();
    return `${(numero * mult).toFixed(0).replace(/\.0+$/, '')}${unite}`;
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#e5e5e5] px-6 py-12 md:py-20 font-body">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* BOUTON RETOUR */}
        <Link to="/" className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-[#c48f45] transition-colors duration-300">
          &larr; Retour à l'essentiel
        </Link>

        {/* EN-TÊTE DE LA RECETTE (Sous-titre éclairci) */}
        <header className="space-y-4">
          <span className="text-[10px] font-mono text-[#c48f45] uppercase tracking-[0.3em] block">
            MODULE DE FORMATION &bull; {recipe.difficulte}
          </span>
          <h1 className="text-3xl md:text-5xl font-light tracking-tight text-white font-serif leading-tight">
            {recipe.titre}
          </h1>
          <p className="text-sm text-gray-300 font-light max-w-2xl leading-relaxed">
            {recipe.sousTitre}
          </p>
        </header>

        {/* CALCULATEUR DE VOLUMES ET RENDEMENT AUTOMATIQUE (Descriptif éclairci) */}
        <section className="bg-[#121212] border border-[#c48f45]/20 p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#c48f45]">
              Rendement &amp; Calibrage
            </h3>
            <p className="text-xs text-gray-300 font-light leading-relaxed">
              La recette de base donne environ <strong className="text-white font-medium">{recipe.rendement?.poidsTotal || '1kg'}</strong> de pâte.<br />
              Cela vous permet de réaliser : <span className="text-[#c48f45] italic font-serif">{recipe.rendement?.exemples || 'Vos pièces de prestige'}.</span>
            </p>
          </div>
          
          <div className="bg-[#0b0b0b] border border-white/5 p-6 flex flex-col items-center justify-center space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-mono">Ajuster le volume</span>
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => setMultiplier(Math.max(0.5, multiplier - 0.5))}
                className="w-10 h-10 border border-white/10 text-white font-light text-xl hover:border-[#c48f45] hover:text-[#c48f45] transition-all duration-300"
              >
                -
              </button>
              <span className="text-2xl font-light font-serif text-white w-16 text-center">
                x{multiplier}
              </span>
              <button 
                onClick={() => setMultiplier(multiplier + 0.5)}
                className="w-10 h-10 border border-white/10 text-white font-light text-xl hover:border-[#c48f45] hover:text-[#c48f45] transition-all duration-300"
              >
                +
              </button>
            </div>
            <span className="text-[9px] text-[#c48f45] uppercase tracking-wider text-center">
              Poids total estimé : {parseFloat(recipe.rendement?.poidsTotal) * multiplier}g
            </span>
          </div>
        </section>

        {/* SECTION : LA SCIENCE DE LA PÂTE (Texte éclairci) */}
        <section className="bg-[#121212] border border-white/5 p-8 space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#c48f45]">
            {recipe.science.titre}
          </h3>
          <p className="text-sm text-gray-300 font-light leading-relaxed">
            {recipe.science.description}
          </p>
        </section>

        {/* SECTION : LES INGRÉDIENTS (Noms éclaircis) */}
        <section className="space-y-6">
          <div className="flex justify-between items-baseline">
            <h2 className="text-lg md:text-xl font-light text-white font-serif tracking-wide">
              Les Ingrédients Précis
            </h2>
            <span className="text-[10px] text-gray-500 italic font-light">Poids recalculés automatiquement</span>
          </div>
          <div className="h-[1px] w-12 bg-[#c48f45]/30"></div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 border-t border-white/5 pt-4">
            {recipe.ingredients.map((ing, index) => (
              <li key={index} className="flex justify-between items-center text-sm py-2 border-b border-white/5 font-light">
                <span className="text-gray-300">{ing.nom}</span>
                <span className="font-mono text-[#c48f45] font-medium">
                  {formatQuantity(ing.quantite, multiplier)}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* SECTION : LE PROTOCOLE OPÉRATOIRE */}
        <section className="space-y-6">
          <h2 className="text-lg md:text-xl font-light text-white font-serif tracking-wide">
            Protocole Opératoire de Réussite
          </h2>
          <div className="h-[1px] w-12 bg-[#c48f45]/30"></div>
          <div className="space-y-6 border-t border-white/5 pt-6">
            {recipe.etapes.map((etape, index) => (
              <p key={index} className="text-sm text-gray-300 font-light leading-relaxed pl-4 border-l-2 border-[#c48f45]/20 hover:border-[#c48f45] transition-colors duration-300">
                {etape}
              </p>
            ))}
          </div>
        </section>

        {/* SECTION : LES ASTUCES */}
        <section className="space-y-6 pt-4">
          <h2 className="text-lg md:text-xl font-light text-white font-serif tracking-wide">
            Les Secrets du Laboratoire
          </h2>
          <div className="h-[1px] w-12 bg-[#c48f45]/30"></div>
          <div className="space-y-5 bg-[#16120e]/30 border border-[#c48f45]/10 p-8 rounded-none">
            {recipe.astuces.map((astuce, index) => (
              <div key={index} className="flex items-start space-x-3 text-sm text-gray-300 font-light leading-relaxed">
                <span className="text-[#c48f45] font-bold text-base">&bull;</span>
                <span>{astuce}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}