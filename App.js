import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './Componentes/Details';
import Principal from './Componentes/Principal';
import ListarMedicos from './Componentes/Listadoc';

import HomeScreen from './Pages/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Details" component={Details} options={{
          headerShown: true,
          headerTintColor: 'white',
          // headerTitleStyle: {
          //   color: 'white'
          // },
          headerStyle: {
            backgroundColor: 'red',
          }
        }}/>
        <Stack.Screen name="Principal" component={Principal} options={{ headerShown: true}}/>
        <Stack.Screen name="ListarMedicos" component={ListarMedicos} options={{ headerShown: true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App; 