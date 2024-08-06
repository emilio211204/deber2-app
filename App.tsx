import React from 'react'
import{NavigationContainer} from '@react-navigation/native'
import { StackNavigator } from './src/navigator/StartNavigator'
import 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
    <StackNavigator/>
    </NavigationContainer>
  )
}


export default App;