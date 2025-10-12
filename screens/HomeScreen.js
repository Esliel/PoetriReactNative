// **************************** IMPORTS *****************************************//
import { StyleSheet, Image, View, Button, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '@components/Header'
import { Background } from '@components/Background'
import { ThemedText } from '@components/ThemedText'
import { useThemeColors } from '@hooks/useThemeColors'

// *****************************************************************************//

export function HomeScreen({ navigation }) {
  const colors = useThemeColors()

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.primary }]}
      edges={['top', 'bottom', 'left', 'right']}
    >
      <Header />
      <ThemedText
        typography="subtitle1"
        color="textWhite"
        style={styles.consigne}
      >
        Le jeu de la poésie à reconstituer
      </ThemedText>

      <Background style={styles.body}>
        <ThemedText
          typography="subtitle2"
          color="textWhite"
          style={styles.consigne}
        >
          Découvre des poèmes dont les vers sont mélangés et amuse-toi à les
          remettre dans l’ordre pour révéler toute la beauté de la poésie.
        </ThemedText>
        <ThemedText
          typography="subtitle1"
          color="textWhite"
          style={styles.consigne}
        >
          Choisir mon poème à remettre dans l'ordre :
        </ThemedText>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ChoixSpecifique')}
        >
          <ThemedText
            typography="bodyLarger"
            color="textBlack"
            style={styles.choixPoeme}
          >
            Poème spécifique
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ChoixAleatoire')}
        >
          <ThemedText
            typography="bodyLarger"
            color="textBlack"
            style={styles.choixPoeme}
          >
            Poème aléatoire
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
  consigne: {
    paddingBottom: 9,
  },
  choixPoeme: {
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderRadius: 30,
    margin: 6,
    textAlign: 'center',
  },
  button: {
    borderRadius: 30,
    overflow: 'hidden',
  },
})
