// **************************** IMPORTS *****************************************//
import { StyleSheet, Image, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '@components/Header'
import { Background } from '@components/Background'
import { ThemedText } from '@components/ThemedText'
import { useThemeColors } from '@hooks/useThemeColors'
// *****************************************************************************//

export function ScoresScreen() {
  const colors = useThemeColors()
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.primary }]}
      edges={['top', 'bottom', 'left', 'right']}
    >
      <Header />
      <Background style={styles.body}>
        <ThemedText typography="headline" color="textWhite">
          ScoreScreen
        </ThemedText>
      </Background>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 6,
    paddingLeft: 6,
    paddingRight: 6,
  },
  body: {
    flex: 1,
    alignItems: 'center', // centré horizontalement
    justifyContent: 'center', // centré verticalement
    backgroundColor: 'background',
  },
})
