// **************************** IMPORTS *****************************************//
import { StyleSheet, Image, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from '@components/Background'
import { ThemedText } from '@components/ThemedText'
import { useThemeColors } from '@hooks/useThemeColors'
// *****************************************************************************//

export function ScoresScreen() {
  const colors = useThemeColors()
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.primary }]}
      edges={['top', 'bottom', 'left', 'right']}
    >
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image
          source={require('@assets/favicon.png')}
          style={{ width: 24, height: 24 }}
        />
        <ThemedText typography="headline" color="textWhite">
          ScoreScreen
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
    paddingBottom: 6,
    paddingLeft: 6,
    paddingRight: 6,
  },
  body: {
    flex: 1,
    alignItems: 'center', // centré horizontalement
    justifyContent: 'center', // centré verticalement
  },
})
