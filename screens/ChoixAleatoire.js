// **************************** IMPORTS *****************************************//
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '@components/Header'
import { Background } from '@components/Background'
import { ThemedText } from '@components/ThemedText'
import { useThemeColors } from '@hooks/useThemeColors'
import { poemesDataBase } from '@data/poemesDataBase'
import { authorDataBase } from '@data/authorDataBase'
import { useState, useEffect } from 'react'
// *****************************************************************************//

export function ChoixAleatoire({ navigation }) {
  const colors = useThemeColors()
  const [poeme, setPoeme] = useState(null)

  // Fonction pour sélectionner un poème aléatoire
  const choisirPoemeAleatoire = () => {
    const randomIndex = Math.floor(Math.random() * poemesDataBase.length)
    setPoeme(poemesDataBase[randomIndex])
  }

  useEffect(() => {
    choisirPoemeAleatoire()
  }, [])

  if (!poeme) return null

  const auteur = authorDataBase.find((a) => a.idAuthor === poeme.idAuthor) || {}
  const nomAffiche =
    auteur.prenomAuteur && auteur.nomAuteur
      ? `${auteur.prenomAuteur} ${auteur.nomAuteur}`
      : poeme.idAuthor

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.primary }]}
      edges={['top', 'bottom', 'left', 'right']}
    >
      <Header />

      <Background style={styles.body}>
        <ThemedText
          typography="bodyLarger"
          color="textWhite"
          style={styles.consigne1}
        >
          Le poème avec lequel vous allez jouer est :
        </ThemedText>
        <ThemedText
          typography="bodyLarger"
          color="textWhite"
          style={styles.consigne2}
        >
          {poeme.titrePoeme},
        </ThemedText>
        <ThemedText
          typography="bodyLarger"
          color="textWhite"
          style={styles.consigne3}
        >
          {nomAffiche}
        </ThemedText>
        <TouchableOpacity
          style={styles.button1}
          onPress={() =>
            navigation.navigate('Game', { poemeId: poeme.idPoeme })
          }
        >
          <ThemedText
            typography="headline"
            color="primary"
            style={styles.choixPoeme}
          >
            C’est parti !
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={choisirPoemeAleatoire}
        >
          <ThemedText
            typography="bodyLarger"
            color="primary"
            style={styles.choixPoeme}
          >
            ↻ Un autre poème
          </ThemedText>
        </TouchableOpacity>
      </Background>
    </SafeAreaView>
  )
}

// **************************** STYLES *****************************************//
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
  consigne1: {
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 30,
  },
  consigne2: {
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  consigne3: {
    textAlign: 'center',
    paddingRight: 50,
    paddingBottom: 80,
    paddingLeft: 50,
    fontWeight: 'bold',
  },
  choixPoeme: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 30,
    margin: 6,
    textAlign: 'center',
  },
  button1: {
    borderRadius: 30,
    overflow: 'hidden',
    paddingBottom: 80,
  },
  button2: {
    borderRadius: 30,
    overflow: 'hidden',
  },
})
