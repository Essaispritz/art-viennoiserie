// Fichier : src/recettes/index.js
import { plfCertifiee } from './pate-plf/plf-certifiee';
import { briocheCertifiee } from './pate-brioche/brioche-certifiee';
import { sucreeCertifiee } from './pate-sucree/sucree-certifiee';
import { sableeCertifiee } from './pate-sablee/sablee-certifiee';
import { feuilleteeCertifiee } from './pate-feuilletee/feuilletee-certifiee'; // Raccord n°1

// Centralisation de toutes les recettes du site
export const toutesLesRecettes = {
  "pate-plf": plfCertifiee,
  "pate-brioche": briocheCertifiee,
  "pate-sucree": sucreeCertifiee,
  "pate-sablee": sableeCertifiee,
  "pate-feuilletee": feuilleteeCertifiee, // Raccord n°2 (Activé !)
};