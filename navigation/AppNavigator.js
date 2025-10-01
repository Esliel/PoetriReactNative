// **************************** IMPORTS *****************************************//
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// Screens
import { HomeScreen } from '@screens/HomeScreen'
import { ScoresScreen } from '@screens/ScoresScreen'
// *****************************************************************************//

const Stack = createNativeStackNavigator()

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scores" component={ScoresScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
