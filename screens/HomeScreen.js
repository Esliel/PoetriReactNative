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
        style={styles.slogan}
      >
        Le jeu de la poésie à reconstituer
      </ThemedText>

      <Background style={styles.body}>
        <ThemedText
          typography="bodyLarger"
          color="textWhite"
          style={styles.consigne1}
        >
          Découvre des poèmes dont les vers sont mélangés et amuse-toi à les
          remettre dans l’ordre pour révéler toute la beauté de la poésie.
        </ThemedText>
        <ThemedText
          typography="bodyLarger"
          color="textWhite"
          style={styles.consigne2}
        >
          Pour commencer choisi le poème avec lequel tu veux jouer :
        </ThemedText>

        <View style={styles.blocBoutons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ChoixSpecifique')}
          >
            <ThemedText
              typography="headline"
              color="primary"
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
              typography="headline"
              color="primary"
              style={styles.choixPoeme}
            >
              Poème aléatoire
            </ThemedText>
          </TouchableOpacity>
        </View>
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
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 50,
    paddingRight: 50,
    paddingLeft: 50,
    backgroundColor: 'primary',
  },
  slogan: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
  consigne1: {
    textAlign: 'justify',
  },
  consigne2: {
    paddingTop: 10,
  },
  blocBoutons: {
    flex: 1,
    justifyContent: 'center',
  },
  choixPoeme: {
    backgroundColor: '#FFFFFF',
    paddingTop: 15,
    paddingRight: 5,
    paddingBottom: 15,
    paddingLeft: 5,
    borderRadius: 30,
    margin: 15,
    textAlign: 'center',
  },
  button: {
    borderRadius: 30,
    overflow: 'hidden',
  },
})
