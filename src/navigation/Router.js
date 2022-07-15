import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResult from '../screens/SearchResult';
import SignIn from '../screens/SignIn';
import SpotSearch from '../screens/SpotSearch';
import SignUp from '../screens/SignUp';
import ChatFeed from '../screens/ChatFeed';
import ChatRoom from '../screens/ChatRoom';
import Profile from '../screens/Profile';
import SearchTab from './SearchTab';
import SpotPostDetails from '../screens/SpotPostDetails';
import SpotUpload from '../screens/SpotUpload';
import SpotPlaceUpload from '../screens/SpotPlaceUpload';
import { useUserContext } from '../context/userContext';
import { Platform } from 'react-native';
import MySpots from '../screens/MySpots';


const Stack = createStackNavigator();




const Router = () => {

    const { user } = useUserContext();
    
    return(

        
        <Stack.Navigator>

            {user ?  (
                
                <>
                <Stack.Screen
                    name = {"HomeScreen"}
                    component = {HomeScreen}
                    options = {{
                        title: "Início",
                        headerShown: false
                    }}
                />
        
                <Stack.Screen
                    name = {"SpotSearch"}
                    component = {SpotSearch}
                    options = {{
                        headerShown: true,
                        title: "Locais",
                        headerTitleStyle: {
                            fontFamily: 'Poppins-Bold',
                            fontSize: (Platform.OS === 'ios' ? 20 : 25),
                            marginTop: (Platform.OS === 'ios' ? 2 : 4)
                        },
                        headerStyle: {backgroundColor: '#D9A23D'},
                        headerShadowVisible: false,
                        headerBackTitleVisible: false
                    }}
                />

                <Stack.Screen
                    name = {"SearchResult"}
                    component = {SearchTab}
                    options = {{
                        headerShown: true,
                        title: "Vagas",
                        headerTitleStyle: {
                            fontFamily: 'Poppins-Regular',
                            fontSize: 20
                        },
                        headerStyle: {backgroundColor: '#D9A23D'},
                        headerShadowVisible: false,
                        headerBackTitleVisible: false
                    }}
                />
                
                <Stack.Screen
                    name = {"SpotPostDetails"}
                    component = {SpotPostDetails}
                    options = {{
                        headerShown: true,
                        title: 'Anúncio',
                        headerTitleStyle: {
                            fontFamily: 'Poppins-Regular',
                            fontSize: 20
                        },
                        headerStyle: {backgroundColor: '#D9A23D'},
                        headerShadowVisible: false,
                        headerBackTitleVisible: false
                    }}
                />

                <Stack.Screen
                    name = {"SpotPlaceUpload"}
                    component = {SpotPlaceUpload}
                    options = {{
                        headerShown: true,
                        title: "Anunciar Vaga",
                        headerTitleStyle: {
                            fontFamily: 'Poppins-Regular',
                            fontSize: (Platform.OS === 'ios' ? 20 : 25),
                            marginTop: (Platform.OS === 'ios' ? 2 : 4)
                        },
                        headerStyle: {backgroundColor: '#D9A23D'},
                        headerShadowVisible: false,
                        headerBackTitleVisible: false
                    }}
                />

                <Stack.Screen
                    name = {"SpotUpload"}
                    component = {SpotUpload}
                    options = {{
                        headerShown: true,
                        title: "Anunciar Vaga",
                        headerTitleStyle: {
                            fontFamily: 'Poppins-Regular',
                            fontSize: 20
                        },
                        headerStyle: {backgroundColor: '#D9A23D'},
                        headerShadowVisible: false,
                        headerBackTitleVisible: false
                    }}
                />

                <Stack.Screen
                    name = {"MySpots"}
                    component = {MySpots}
                    options = {{
                        headerShown: true,
                        title: "Meus Anúncios",
                        headerTitleStyle: {
                            fontFamily: 'Poppins-Bold',
                            fontSize: (Platform.OS === 'ios' ? 20 : 25),
                            marginTop: (Platform.OS === 'ios' ? 2 : 4)
                        },
                        headerStyle: {backgroundColor: '#D9A23D'},
                        headerShadowVisible: false,
                        headerBackTitleVisible: false
                    }}
                />

                <Stack.Screen
                    name = {"Profile"}
                    component = {Profile}
                    options = {{
                        headerShown: true,
                        title: "Perfil",
                        headerTitleStyle: {
                            fontFamily: 'Poppins-Bold',
                            fontSize: (Platform.OS === 'ios' ? 20 : 25),
                            marginTop: (Platform.OS === 'ios' ? 2 : 4)
                        },
                        headerStyle: {backgroundColor: '#D9A23D'},
                        headerShadowVisible: false,
                        headerBackTitleVisible: false
                    }}
                />

                <Stack.Screen
                    name = {"ChatFeed"}
                    component = {ChatFeed}
                    options = {{
                        headerShown: true,
                        title: "Mensagens",
                        headerTitleStyle: {
                            fontFamily: 'Poppins-Bold',
                            fontSize: (Platform.OS === 'ios' ? 20 : 25),
                            marginTop: (Platform.OS === 'ios' ? 2 : 4)
                        },
                        headerStyle: {backgroundColor: '#D9A23D'},
                        headerShadowVisible: false,
                        headerBackTitleVisible: false
                    }}
                />

                <Stack.Screen
                    name = {"ChatRoom"}
                    component = {ChatRoom}
                    options = {{
                        headerShown: true,
                        title: "nome do usuário",
                        headerTitleStyle: {
                            fontFamily: 'Poppins-Bold',
                            fontSize: (Platform.OS === 'ios' ? 20 : 25),
                            marginTop: (Platform.OS === 'ios' ? 2 : 4)
                        },
                        headerStyle: {backgroundColor: '#D9A23D'},
                        headerShadowVisible: false,
                        headerBackTitleVisible: false
                    }}
                />
                </>
                
    
            ) : (

                    <> 
                    <Stack.Screen
                    name = {"SignIn"}
                    component = {SignIn}
                    options = {{
                        headerShown: false
                    }}
                    />

                    <Stack.Screen
                    name = {"SignUp"}
                    component = {SignUp}
                    options = {{
                        headerShown: false
                    }}
                    />
                    
                   
                </>

            )}
     
        </Stack.Navigator>

    );
};


export default Router;