// **************************** IMPORTS *****************************************//
import { Colors } from '@constants/Colors'
import { useColorScheme } from 'react-native'
// *****************************************************************************//

// ************************** useThemeColors.js *******************************//
//
// Ici est géré le light et le dark mode
//
// ************************************************************************//

export function useThemeColors() {
  const theme = useColorScheme() ?? 'light' // nous donne une couleur qui sera soit light soit dark, et si jamais rien de défini on part sur du light par défault (?? "light")
  return Colors[theme] // On retourne la clef qui correspond au théme (soit light soit dark)
}
