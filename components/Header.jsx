// **************************** IMPORTS *****************************************//
import { StatusBar } from 'expo-status-bar'
import { ThemedText } from '@components/ThemedText'
import { StyleSheet, Image, View } from 'react-native'
import { useThemeColors } from '@hooks/useThemeColors'
// *****************************************************************************//

// ************************** fonction Header *******************************//
//
//  Cette fonction correspond au header de l'app
//
// *****************************************************************************//

export function Header({ style, ...rest }) {
  const colors = useThemeColors()
  return (
    <View>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image
          source={require('@assets/favicon.png')}
          style={{ width: 24, height: 24 }}
        />
        <ThemedText typography="headline" color="textWhite">
          PoéTri
        </ThemedText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 0,
    paddingRight: 6,
    paddingBottom: 6,
    paddingLeft: 6,
  },
})
