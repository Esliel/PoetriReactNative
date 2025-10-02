// ************************** fonction getPoem *******************************//
// Récupère dynamiquement et dans l'ordre les vers de chaque poème
// ***************************************************************************//

export function getPoem(poeme) {
  // On récupère uniquement les clés qui commencent par 'vers'
  return Object.keys(poeme)
    .filter((key) => key.startsWith('vers'))
    .sort() // pour les avoir dans l'ordre: vers01, vers02...
    .map((key) => poeme[key])
}

// Pour l'utiliser dans un screen :
//
// **************************** IMPORTS *****************************************//
// import { poemesDataBase } from '@data/poemesDataBase';
// import { getPoeme } from '@utils/poemUtils';
// *****************************************************************************//
//
// // Supposons que l'on souhaite afficher le premier poème :
// const poeme = poemesDataBase[0];
// const vers = getPoeme(poeme);
//
// // Puis faire un .map dans le render :
// { vers.map((v, i) => <Text key={i}>{v}</Text>) }
