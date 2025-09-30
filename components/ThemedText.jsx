// **************************** IMPORTS *****************************************//
import { Text } from 'react-native'
import { useThemeColors } from '@hooks/useThemeColors' // hook personalisé pour récupérer l'objet colors selon le thème en cours (light ou dark)
import { styles } from '@style/typography'
// *****************************************************************************//

// ************************** fonction ThemedText *******************************//
// C'est un composant qui affiche du texte stylisé.
// Il accepte plusieurs propriétés (props) :
// - variant : le type de style de texte à utiliser (ex : body1, headline, caption...)
// - color : la couleur du texte, choisie parmi les couleurs définies dans constant/Colors.js
// - style : un style supplémentaire optionnel (pour surcharger ou ajouter des styles)
// - children : le contenu texte à afficher
// - ...rest : autres propriétés passées au composant Text (ex : onPress, numberOfLines...)
// *****************************************************************************//

export function ThemedText({ typography, color, style, children, ...rest }) {
  const colors = useThemeColors()

  // On retourne le composant Text avec le style appliqué
  // Le style est composé de :
  // - le style typographique demandé (variant) ou "body3" par défaut
  // - la couleur choisie ou 'textBlack' par défaut, récupérée depuis la const colors
  // - tout style supplémentaire passé en prop
  // Enfin, on transmet toutes les autres propriétés au composant Text grâce à {...rest}
  return (
    <Text
      style={[
        styles[typography ?? 'body3'],
        { color: colors[color ?? 'textBlack'] },
        style,
      ]}
      {...rest}
    >
      {children} {/* Affiche le contenu texte fourni */}
    </Text>
  )
}
