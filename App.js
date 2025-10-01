// **************************** IMPORTS *****************************************//
import { SafeAreaProvider } from 'react-native-safe-area-context'
// Navigation entre les screens :
import AppNavigator from '@navigation/AppNavigator'
// *****************************************************************************//

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  )
}
