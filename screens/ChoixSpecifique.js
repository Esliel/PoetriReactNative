// **************************** IMPORTS *****************************************//
import { StyleSheet, Image, View, Button, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '@components/Header'
import { Background } from '@components/Background'
import { ThemedText } from '@components/ThemedText'
import { useThemeColors } from '@hooks/useThemeColors'
import { poemesDataBase } from '@data/poemesDataBase'
import { authorDataBase } from '@data/authorDataBase'
// *****************************************************************************//

export function ChoixSpecifique({ navigation }) {
  const colors = useThemeColors()

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.primary }]}
      edges={['top', 'bottom', 'left', 'right']}
    >
      <Header />
      <Background style={styles.body}>
        {/* <ThemedText
          typography="headline"
          color="textWhite"
          style={styles.consigne}
        >
          Choisis un poème à réorganiser :
        </ThemedText> */}

        {poemesDataBase.map((poeme) => {
          const auteur =
            authorDataBase.find((a) => a.idAuthor === poeme.idAuthor) || {}
          const nomAffiche =
            auteur.prenomAuteur && auteur.nomAuteur
              ? `${auteur.prenomAuteur} ${auteur.nomAuteur}`
              : poeme.idAuthor

          return (
            <TouchableOpacity
              key={poeme.idPoeme}
              style={styles.button}
              onPress={() =>
                navigation.navigate('Game', { poemeId: poeme.idPoeme })
              }
            >
              <ThemedText
                typography="bodyLarger"
                color="textBlack"
                style={styles.choixPoeme}
              >
                {poeme.titrePoeme}, {nomAffiche}
              </ThemedText>
            </TouchableOpacity>
          )
        })}
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
