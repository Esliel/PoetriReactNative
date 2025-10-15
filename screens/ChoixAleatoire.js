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
        <TouchableOpacity
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
        <TouchableOpacity style={styles.button} onPress={choisirPoemeAleatoire}>
          <ThemedText
            typography="bodyLarger"
            color="textBlack"
            style={styles.choixPoeme}
          >
            Relancer
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
  choixPoeme: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 30,
    margin: 6,
    textAlign: 'center',
  },
  button: {
    borderRadius: 30,
    overflow: 'hidden',
  },
})
