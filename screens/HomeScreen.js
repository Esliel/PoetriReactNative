// **************************** IMPORTS *****************************************//
import { StyleSheet, Image, View, Button, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '@components/Header'
import { Background } from '@components/Background'
import { ThemedText } from '@components/ThemedText'
import { useThemeColors } from '@hooks/useThemeColors'
import { poemesDataBase } from '@data/poemesDataBase'
import { getPoem } from '@utils/poemUtils'
// *****************************************************************************//

export function HomeScreen({ navigation }) {
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
        <TouchableOpacity // bouton au style personalisable
          onPress={() => navigation.navigate('Game')}
          style={styles.button}
        >
          <ThemedText typography="headline" color="primary" style={styles.vers}>
            Démarrer le jeu
          </ThemedText>
        </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'primary',
  },
  vers: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 30,
    margin: 4,
    textAlign: 'center',
  },
  button: {
    borderRadius: 30,
    overflow: 'hidden',
  },
})
