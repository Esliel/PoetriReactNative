// **************************** IMPORTS *****************************************//
import { StyleSheet } from 'react-native'
// *****************************************************************************//

// ************************** typography.js *******************************//
//
// Ici est géré le style d'écriture utilisé dans cette application.
//
// ************************************************************************//

export const styles = StyleSheet.create({
  body: {
    // Corps de texte par défault
    fontSize: 10,
    lineHeight: 16,
  },
  bodyLarge: {
    // Corps de texte plus grand
    fontSize: 12,
    lineHeight: 16,
  },
  bodyLarger: {
    // Corps de texte encore plus grand
    fontSize: 14,
    lineHeight: 16,
  },
  small: {
    // Légendes et annotations (caption)
    fontSize: 8,
    lineHeight: 12,
  },
  subtitle1: {
    // Sous-trites de rang 1
    fontSize: 14,
    lineHeight: 16,
    fontWeight: 'bold',
  },
  subtitle2: {
    // Sous-trites de rang 2
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 'bold',
  },
  subtitle3: {
    // Sous-trites de rang 3
    fontSize: 10,
    lineHeight: 16,
    fontWeight: 'bold',
  },
  headline: {
    // Titre de l'application
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
  },
})
