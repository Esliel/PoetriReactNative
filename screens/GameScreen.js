// **************************** IMPORTS *****************************************//
import { FlatList, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
// components / hooks / data / utils
import { Header } from '@components/Header'
import { Background } from '@components/Background'
import { ThemedText } from '@components/ThemedText'
import { useThemeColors } from '@hooks/useThemeColors'
import { poemesDataBase } from '@data/poemesDataBase'
import { getPoem } from '@utils/poemUtils'
// *****************************************************************************//

export function GameScreen() {
  const colors = useThemeColors() // Récupération des couleurs du thème actuel via un hook personnalisé
  const poeme = poemesDataBase[0] // Sélection du poème dans la base de données
  // Transforme l’objet poème en tableau d'objets {key, text} contenant uniquement :
  const versArray = Object.entries(poeme)
    .filter(([key]) => key.startsWith('vers')) // Garde uniquement les propriétés commençant par 'vers'
    .map(([key, text]) => ({ key, text })) // Transforme en objet {key, text} pour faciliter l'affichage
  // Randomize l'ordre d'affichage des vers sans altérer la data :
  const versAleatoire = [...versArray].sort(() => Math.random() - 0.5)
  //  [...vers] : c'est le spread operator — il sert à créer une copie du tableau
  // () => Math.random() - 0.5 : cette fonction retourne un nombre aléatoire entre -0.5 et +0.5,
  // ce qui donne à sort un moyen de décider aléatoirement si deux éléments doivent être échangés ou non
  return (
    <SafeAreaView // SafeAreaView gère les marges en fonction des zones sûres de l'écran (ex : encoche)
      style={[styles.container, { backgroundColor: colors.primary }]}
      edges={['top', 'bottom', 'left', 'right']}
    >
      <Header />
      <Background style={styles.body}>
        <FlatList
          data={versAleatoire} // Source de données pour la liste
          keyExtractor={(item) => item.key} // Clef unique pour chaque élément
          // fonction de rendu personnalisable de chaque item :
          renderItem={({ item }) => (
            <ThemedText
              typography="bodyLarger"
              color="textBlack"
              style={styles.vers}
            >
              {item.text} {/* Affiche le texte du vers */}
            </ThemedText>
          )}
          contentContainerStyle={{
            alignItems: 'center', // centre la liste horizontalement
            flex: 1,
            justifyContent: 'center', // Centre la liste verticalement
          }}
        />
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
