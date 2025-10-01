// **************************** IMPORTS *****************************************//
import { StyleSheet, Image, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '@components/Header'
import { Background } from '@components/Background'
import { ThemedText } from '@components/ThemedText'
import { useThemeColors } from '@hooks/useThemeColors'
// *****************************************************************************//

export function HomeScreen() {
  const colors = useThemeColors()
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.primary }]}
      edges={['top', 'bottom', 'left', 'right']}
    >
      <Header />
      <Background style={styles.body}>
        <ThemedText
          typography="bodyLarger"
          color="textBlack"
          style={styles.vers}
        >
          PoéTri - HomeScreen
        </ThemedText>
      </Background>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    alignItems: 'center', // centré horizontalement
    justifyContent: 'center', // centré verticalement
  },
  vers: {
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderRadius: 15,
  },
})
