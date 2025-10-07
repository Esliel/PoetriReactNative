// **************************** IMPORTS *****************************************//
import { StatusBar } from 'expo-status-bar'
import { ThemedText } from '@components/ThemedText'
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import { useThemeColors } from '@hooks/useThemeColors'
import { useNavigation } from '@react-navigation/native'
// *****************************************************************************//

// ************************** fonction Header *******************************//
//
//  Cette fonction correspond au header de l'app
//
// *****************************************************************************//

export function Header({ style, ...rest }) {
  const colors = useThemeColors()
  const navigation = useNavigation()
  return (
    <View>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity // bouton au style personalisable
          onPress={() => navigation.navigate('Home')}
        >
          <Image
            source={require('@assets/logo-poetri-white.png')}
            style={{ width: 110, height: 50 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
    paddingRight: 6,
    paddingBottom: 6,
    paddingLeft: 6,
  },
})
