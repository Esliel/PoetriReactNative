// **************************** IMPORTS *****************************************//
import { StyleSheet, Image, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from '@components/Background'
import { ThemedText } from '@components/ThemedText'
import { useThemeColors } from '@hooks/useThemeColors'
// *****************************************************************************//

export default function App() {
  const colors = useThemeColors()
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.primary }]}
      edges={['top', 'bottom', 'left', 'right']}
    >
      {/* ajouter 'top', 'bottom', 'left', 'right' dans edges ci-dessus si beug d'affichage header */}
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image source={require('@assets/favicon.png')} width={24} height={24} />
        <ThemedText typography="headline" color="textWhite">
          PoéTri
        </ThemedText>
      </View>
      <Background style={styles.body}>
        <ThemedText typography="headline" color="textWhite">
          PoéTri
        </ThemedText>
      </Background>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 6, // parfois le padding fait bugger la SafeAreaView
  },
  body: {
    flex: 1,
    alignItems: 'center', // centré horizontalement
    justifyContent: 'center', // centré verticalement
  },
})
