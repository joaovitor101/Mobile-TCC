import React from 'react';

import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import fonts from '../styles/fonts';

import DrawerRoutes from './drawer.routes';
import Usuario from '../screens/Usuario';
import agua from '../screens/agua';
import solo from '../screens/solo';
import bateria from '../screens/bateria';
import rega from '../screens/rega';
import grafico from '../screens/grafico';

import { DrawerActions, useNavigation } from '@react-navigation/native';


const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    const navigation = useNavigation();

    return (
        <AppTab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "green",
                tabBarInactiveTintColor: 'gray',
                tabBarHideOnKeyboard: false,
                tabBarLabelPosition: 'below-icon',
                headerShown: false,

                tabBarStyle: {
                    height: 65,
                    paddingTop: 10
                },
            }}

        >
            <AppTab.Screen
                name="Inicio"
                component={DrawerRoutes}

                options={{
                    tabBarIcon: (({ size, color }) => (
                        <AntDesign
                            name="home"
                            size={size}
                            color={color}
                        />
                    )),

                    tabBarLabel: (({ focused, color }) => (
                        <View>
                            <Text
                                style={focused ? {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12,
                                    textAlign: 'center',
                                } : {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12
                                }}
                            >
                                Inicio
                            </Text>
                            <View
                                style={focused ? {

                                    backgroundColor: color,
                                    borderColor: color,
                                    width: 45,
                                    height: 2,
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    marginTop: 5,
                                } : {
                                    height: 2,
                                }}
                            >
                            </View>
                        </View>
                    ))
                }}
            />

            <AppTab.Screen
                name="Usuario"
                component={Usuario}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="people-outline"
                            size={size}
                            color={color}
                        />
                    )),

                    tabBarLabel: (({ focused, color }) => (
                        <View>
                            <Text
                                style={focused ? {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12,
                                    textAlign: 'center',

                                } : {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12
                                }}
                            >
                                Cadastros
                            </Text>
                            <View
                                style={focused ? {
                                    backgroundColor: color,
                                    borderColor: color,
                                    width: 65,
                                    height: 2,
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    marginTop: 5,
                                } : {
                                    height: 2,
                                }}
                            >
                            </View>
                        </View>
                    ))
                }}
            />
<AppTab.Screen
                name="Aba 33"
                component={grafico}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="graphic-eq"
                            size={size}
                            color={color}
                        />
                    )),

                    tabBarLabel: (({ focused, color }) => (
                        <View>
                            <Text
                                style={focused ? {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12,
                                    textAlign: 'center',
                                } : {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12
                                }}
                            >
                                Grafico
                            </Text>
                            <View
                                style={focused ? {
                                    backgroundColor: color,
                                    borderColor: color,
                                    width: 90,
                                    height: 2,
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    marginTop: 5,
                                } : {
                                    height: 2,
                                }}
                            >
                            </View>
                        </View>
                    ))
                }}
            />
           <AppTab.Screen
                name="Aba 3"
                component={agua}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialCommunityIcons
                            name="water-outline"
                            size={size}
                            color={color}
                        />
                    )),

                    tabBarLabel: (({ focused, color }) => (
                        <View>
                            <Text
                                style={focused ? {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12,
                                    textAlign: 'center',
                                } : {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12
                                }}
                            >
                                Irrigar
                            </Text>
                            <View
                                style={focused ? {
                                    backgroundColor: color,
                                    borderColor: color,
                                    width: 90,
                                    height: 2,
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    marginTop: 5,
                                } : {
                                    height: 2,
                                }}
                            >
                            </View>
                        </View>
                    ))
                }}
            />

<AppTab.Screen
                name="Aba 4"
                component={solo}

                options={{
                    tabBarIcon: (({ size, color }) => (
                        <Ionicons
                            name="leaf-outline"
                            size={size}
                            color={color}
                        />
                    )),

                    tabBarLabel: (({ focused, color }) => (
                        <View>
                            <Text
                                style={focused ? {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12,
                                    textAlign: 'center',

                                } : {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12
                                }}
                            >
                                Casa
                            </Text>
                            <View
                                style={focused ? {
                                    backgroundColor: color,
                                    borderColor: color,
                                    width: 60,
                                    height: 2,
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    marginTop: 5,
                                } : {
                                    height: 2,
                                }}
                            >
                            </View>
                        </View>
                    ))
                }}
            />

 




            <AppTab.Screen
                name="Aba 5"
                component={bateria}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialCommunityIcons
                            name="battery-charging-outline"
                            size={size}
                            color={color}
                        />
                    )),

                    tabBarLabel: (({ focused, color }) => (
                        <View>
                            <Text
                                style={focused ? {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12,
                                    textAlign: 'center',
                                } : {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12
                                }}
                            >
                                Água
                            </Text>
                            <View
                                style={focused ? {
                                    backgroundColor: color,
                                    borderColor: color,
                                    width: 90,
                                    height: 2,
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    marginTop: 5,
                                } : {
                                    height: 2,
                                }}
                            >
                            </View>
                        </View>
                    ))
                }}
            />



            <AppTab.Screen
                name="Aba 6"
                component={rega}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialCommunityIcons
                            name="eyedrop-outline"
                            size={size}
                            color={color}
                        />
                    )),

                    tabBarLabel: (({ focused, color }) => (
                        <View>
                            <Text
                                style={focused ? {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12,
                                    textAlign: 'center',
                                } : {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12
                                }}
                            >
                                Rega
                            </Text>
                            <View
                                style={focused ? {
                                    backgroundColor: color,
                                    borderColor: color,
                                    width: 90,
                                    height: 2,
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    marginTop: 5,
                                } : {
                                    height: 2,
                                }}
                            >
                            </View>
                        </View>
                    ))
                }}
            /> 
        </AppTab.Navigator>
    )
}

export default AuthRoutes;