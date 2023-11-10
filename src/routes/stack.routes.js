import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/Login';
//import { Splash } from '../lotties/Splash';
import AuthRoutes from './tab.routes';
import Usuario from '../screens/Usuario';
import NovoUsuario from '../screens/NovoUsuario';
import agua from '../screens/agua';
import solo from '../screens/solo';
import bateria from '../screens/bateria';
import rega from '../screens/rega';
import umidade from '../screens/umidade';
const Stack = createNativeStackNavigator();

function StackNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            

            <Stack.Screen name="Home" component={AuthRoutes} />      
            <Stack.Screen name="Usuario" component={Usuario} /> 
            <Stack.Screen name="NovoUsuario" component={NovoUsuario} /> 
            <Stack.Screen name="agua" component={agua} />
            <Stack.Screen name="solo" component={solo}/>
            <Stack.Screen name="bateria" component={bateria}/>
            <Stack.Screen name="rega" component={rega}/>
            <Stack.Screen name="umidade" component={umidade}/>
            <Stack.Screen name="Login" component={Login} /> 
        </Stack.Navigator>
    )
}

function AppRoutes(){
    return(
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
export default AppRoutes;