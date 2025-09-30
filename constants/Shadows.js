// ************************** Shadows.js *******************************//
//
// Cet objet contient des styles d'ombre réutilisables pour les vues (View) dans React Native.
//
// ************************************************************************//

export const Shadows = {
  dp2: {
    // ombre appelée "dp2" (Density-Independent Pixel level 2) : utile pour donner de la profondeur visuelle à un composant.
    shadowOpacity: 0.2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 }, // Décalage de l'ombre (x=0 pour un centrage horizontal, y=1 pour une ombre vers le bas)
    shadowRadius: 3, // iOS
    elevation: 2, // Android
  },
}

// Pour utiliser ce style dans un composant React Native :
// <View style={Shadows.dp2} />
