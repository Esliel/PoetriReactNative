// **************************** IMPORTS *****************************************//
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// Screens
import { HomeScreen } from '@screens/HomeScreen'
import { GameScreen } from '@screens/GameScreen'
import { ScoresScreen } from '@screens/ScoresScreen'
// *****************************************************************************//

const Stack = createNativeStackNavigator()

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // masquer le header titre de l'onglet
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Scores"
          component={ScoresScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
