export function formaterBadge(utilisateur) {
  // 1. Early return si utilisateur est absent ou sans nom
  if (!utilisateur || !utilisateur.nom) {
    return 'Utilisateur anonyme';
  }

  // 2. Extraire ville avec ?. et ?? ('Ville inconnue')
  const ville = utilisateur.adresse?.ville ?? 'Ville inconnue';

  // 3. Extraire points avec ?? (0 par défaut)
  const points = utilisateur.points ?? 0;

  // 4. Retourner `${nom} (${ville}) - ${points} pts`
  return `${utilisateur.nom} (${ville}) - ${points} pts`;
}

export function comparerStrict(a, b) {
  // Retourner l'égalité stricte entre a et b
  return a === b;
}