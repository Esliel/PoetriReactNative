import React, { useState, useEffect } from 'react'
// **************************** IMPORTS *****************************************//
import { StyleSheet, TouchableOpacity } from 'react-native' // StyleSheet pour gérer le style ; TouchableOpacity pour rendre les éléments "cliquables" et détecter les pressions tactiles
import { SafeAreaView } from 'react-native-safe-area-context' // SafeAreaView permet de respecter les zones sûres de l'écran (ex : éviter la zone de l'encoche sur iPhone)
import DragList from 'react-native-draglist' // Composant DragList pour avoir une liste dont on peut réordonner les éléments par glisser-déposer
import { useRoute } from '@react-navigation/native' // import pour récupérer params
// components / hooks / data / utils
import { Header } from '@components/Header'
import { Background } from '@components/Background'
import { ThemedText } from '@components/ThemedText'
import { useThemeColors } from '@hooks/useThemeColors'
import { poemesDataBase } from '@data/poemesDataBase'
// *****************************************************************************//

export function GameScreen() {
  const colors = useThemeColors()

  const route = useRoute()

  const { poemeId } = route.params || {} // récupération du paramètre poemeId
  const poeme =
    poemesDataBase.find((p) => p.idPoeme === poemeId) || poemesDataBase[0] // poème choisi ou premier par défaut

  // Préparation des vers sous forme de tableau {key, text} :
  const versArray = Object.entries(poeme)
    .filter(([key]) => key.startsWith('vers'))
    .map(([key, text]) => ({ key, text }))

  // Défini l'ordre correct attendu (adapter selon nombre de vers) :
  const ordreAttendu = versArray.map((v) => v.key).sort()

  // Etat pour gérer dynamiquement l'ordre des vers (initialisé de façon aléatoire) :
  const [vers, setVers] = useState(
    [...versArray].sort(() => Math.random() - 0.5)
  ) // La fonction Math.random() - 0.5 génère des nombres aléatoires entre -0.5 et +0.5 // La méthode sort utilise cela pour mélanger aléatoirement les éléments du tableau
  // On crée une copie du tableau versArray avec le spread operator [...versArray]
  //
  // Etat pour savoir si l'ordre est correct :
  const [ordreCorrect, setOrdreCorrect] = useState(false)

  // Fonction appelée quand l'utilisateur déplace un vers dans la liste :
  async function onReordered(fromIndex, toIndex) {
    const copie = [...vers]
    const [removed] = copie.splice(fromIndex, 1)
    copie.splice(toIndex, 0, removed)
    setVers(copie)

    // Vérification de l'ordre après déplacement :
    const ordreUtilisateur = copie.map((item) => item.key)
    const estDansLeBonOrdre = ordreUtilisateur.every(
      (val, idx) => val === ordreAttendu[idx]
    )
    setOrdreCorrect(estDansLeBonOrdre)
  }

  // Effet pour déclencher une action quand l'ordre est correct :
  useEffect(() => {
    if (ordreCorrect) {
      alert('Félicitations ! Tous les vers sont dans le bon ordre :)')
    }
  }, [ordreCorrect])

  // Fonction pour afficher chaque vers, avec gestion du drag :
  function renderItem({ item, onDragStart, onDragEnd }) {
    return (
      <TouchableOpacity
        onPressIn={onDragStart}
        onPressOut={onDragEnd}
        style={styles.vers}
      >
        <ThemedText typography="bodyLarge" color="textBlack">
          {item.text}
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
          data={vers}
          keyExtractor={(item) => item.key}
          renderItem={renderItem}
          onReordered={onReordered}
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
