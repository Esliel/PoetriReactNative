// **************************** IMPORTS *****************************************//
import { Shadows } from '@constants/Shadows'
import { useThemeColors } from '@hooks/useThemeColors'
import { View } from 'react-native'
// *****************************************************************************//

// ************************** fonction Background *******************************//
//
//  Cette fonction correspond à l'arrière-plan qui sera utilisé dans l'app
//
// *****************************************************************************//

export function Background({ style, ...rest }) {
  const colors = useThemeColors()
  return (
    <View
      style={[style, styles, { backgroundColor: colors.background }]}
      {...rest}
    />
  )
}

const styles = {
  // borderRadius: 8,
  ...Shadows.dp2,
}
