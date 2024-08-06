import { createStackNavigator } from '@react-navigation/stack';
import { InicioPantalla } from '../screen/InicioPantalla';
import { SecondScreen } from '../screen/SecondScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={InicioPantalla} />
      <Stack.Screen name="Segunda" component={SecondScreen} />
    </Stack.Navigator>
  );
}