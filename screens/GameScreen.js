import React, { useState } from 'react'
// **************************** IMPORTS *****************************************//
import { StyleSheet, TouchableOpacity } from 'react-native' // StyleSheet pour gérer le style ; TouchableOpacity pour rendre les éléments "cliquables" et détecter les pressions tactiles
import { SafeAreaView } from 'react-native-safe-area-context' // SafeAreaView permet de respecter les zones sûres de l'écran (ex : éviter la zone de l'encoche sur iPhone)
import DragList from 'react-native-draglist' // Composant DragList pour avoir une liste dont on peut réordonner les éléments par glisser-déposer
// components / hooks / data / utils
import { Header } from '@components/Header'
import { Background } from '@components/Background'
import { ThemedText } from '@components/ThemedText'
import { useThemeColors } from '@hooks/useThemeColors'
import { poemesDataBase } from '@data/poemesDataBase'
import { getPoem } from '@utils/poemUtils'
// *****************************************************************************//

export function GameScreen() {
  const colors = useThemeColors() // Récupère les couleurs du thème actif pour styliser l'écran
  const poeme = poemesDataBase[0] // choix du poéme à réordonner

  // Préparation des vers sous forme de tableau {key, text} :
  const versArray = Object.entries(poeme)
    .filter(([key]) => key.startsWith('vers')) // Ne garde que les propriétés dont la clé commence par "vers" (ex : vers01, vers02, etc.)
    .map(([key, text]) => ({ key, text })) // Transforme chaque entrée en un objet {key, text} pour faciliter l'affichage

  // Etat pour gérer dynamiquement l'ordre des vers (initialisé dans un ordre aléatoire) :
  const [vers, setVers] = useState(
    [...versArray].sort(() => Math.random() - 0.5)
  )
  // On crée une copie du tableau versArray avec le spread operator [...versArray]
  // La fonction Math.random() - 0.5 génère des nombres aléatoires entre -0.5 et +0.5
  // La méthode sort utilise cela pour mélanger aléatoirement les éléments du tableau

  // Fonction appelée quand l'utilisateur déplace un vers dans la liste :
  async function onReordered(fromIndex, toIndex) {
    const copie = [...vers] // Création d'une copie du tableau actuel des vers
    const [removed] = copie.splice(fromIndex, 1) // Supprime le vers à la position fromIndex (celui qui est déplacé)
    copie.splice(toIndex, 0, removed) // Insère le vers supprimé à la nouvelle position toIndex
    setVers(copie) // Met à jour l'état avec le nouveau tableau ordonné
  }

  // Fonction pour afficher chaque vers, avec gestion du drag :
  function renderItem({ item, onDragStart, onDragEnd }) {
    return (
      <TouchableOpacity
        onPressIn={onDragStart} // Démarre le drag quand l'utilisateur appuie
        onPressOut={onDragEnd} // Termine le drag quand l'utilisateur relâche
        style={styles.vers}
      >
        <ThemedText typography="bodyLarger" color="textBlack">
          {item.text} {/* Affiche le texte du vers */}
        </ThemedText>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.primary }]}
      edges={['top', 'bottom', 'left', 'right']}
    >
      <Header />
      <Background style={styles.body}>
        <DragList
          data={vers} // Données à afficher dans la liste (les vers ordonnés)
          keyExtractor={(item) => item.key} // Clé unique pour chaque élément
          renderItem={renderItem} // Fonction pour afficher chaque vers avec contrôle du drag
          onReordered={onReordered} // Fonction appelée quand un vers est déplacé
          contentContainerStyle={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFEFEF',
  },
  vers: {
    backgroundColor: '#FFFFFF',
    padding: 4,
    borderRadius: 15,
    margin: 2,
  },
})
