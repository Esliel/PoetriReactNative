// **************************** IMPORTS *****************************************//
import { StyleSheet, Image, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '@components/Header'
import { Background } from '@components/Background'
import { ThemedText } from '@components/ThemedText'
import { useThemeColors } from '@hooks/useThemeColors'
import { poemesDataBase } from '@data/poemesDataBase'
import { getPoem } from '@utils/poemUtils'
// *****************************************************************************//

export function GameScreen() {
  const colors = useThemeColors()
  const poeme = poemesDataBase[0]
  const vers = getPoem(poeme)
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.primary }]}
      edges={['top', 'bottom', 'left', 'right']}
    >
      <Header />
      <Background style={styles.body}>
        {vers.map((v, i) => (
          <ThemedText
            key={i}
            typography="bodyLarge"
            color="textWhite"
            style={styles.versvides}
          >
            {v}
          </ThemedText>
        ))}
        {vers.map((v, i) => (
          <ThemedText
            key={i}
            typography="bodyLarger"
            color="textBlack"
            style={styles.vers}
          >
            {v}
          </ThemedText>
        ))}
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
    backgroundColor: '#EFEFEF',
  },
  versvides: {
    backgroundColor: '#FFFFFF',
    padding: 4,
    borderRadius: 15,
    margin: 3,
  },
  vers: {
    backgroundColor: '#FFFFFF',
    padding: 4,
    borderRadius: 15,
    margin: 2,
  },
})
