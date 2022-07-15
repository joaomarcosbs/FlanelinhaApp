import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Touchable, StatusBar, Platform, Alert } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useUserContext } from "../../context/userContext";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

import { API, graphqlOperation, selectInput } from 'aws-amplify';
import { listUserInfos } from '../../graphql/queries';
import { createUserInfo, updateUserInfo } from "../../graphql/mutations";


const Home = (props) => {

    const navigation = useNavigation();
    
    const signUpInfo = props.route.params;
    const [userInfo, setUserInfo] = useState([]);

    const { user } = useUserContext();

    useEffect(() => { 
            fetchUserInfo(); 
    }, []);   

    const fetchUserInfo = async () => {
        try {
            const result = await API.graphql(
                graphqlOperation(listUserInfos, {
                    filter: {
                        and: {
                            user_id: {
                                eq: user?.uid
                            }
                        }
                    }
                })
            )
            setUserInfo(result.data.listUserInfos.items[0]);
            console.log(result.data.listUserInfos.items[0]);


        } catch (error) {
            console.log(error);
        }   
    }

    const signOutUser = async () => {
        await signOut(auth);
        console.log(user);
    };
   
    const postAlert = () => Alert.alert(
        "IH! Meteu Essa?", 
        "Funcionalidade ainda em teste!",
        [
            {
                text: "Ok"
            }
        ]
    );
    

    return (
        <SafeAreaView style = {styles.container}>
             <StatusBar barStyle={(Platform.OS === "ios" ? 'dark-content' : 'light-content')} />
             <View style = {styles.header}>
               
                 <TouchableOpacity onPress={() => navigation.navigate('Profile', {phone: userInfo.phone, profilePic: userInfo.profilePic, id: userInfo.id})}>
                     <Ionicons name = "person-circle-outline" size={45} color = "black"/>
                 </TouchableOpacity>
                 <Text style = {styles.subTitle}>FLANELINHA</Text>
                 <TouchableOpacity onPress={() => {postAlert()}}>
                     <Ionicons name = "md-chatbubbles-outline" size={45} color = "black"/>
                 </TouchableOpacity>
                 
             </View>
           
             <View>
                 <Text style = {styles.mainTitle}>Olá</Text>
                 <Text style = {styles.mainTitle}>{!auth.currentUser.displayName ? userInfo?.user_name : auth.currentUser.displayName}</Text>
             </View>
 
             <View style = {styles.buttonsArea}>
                     <TouchableOpacity style = {styles.spotButton} onPress = {() => navigation.navigate('SpotSearch')}>
                         <View styles = {styles.spotButtonLogo}>
                             <AntDesign style = {styles.spotButtonIcon} name = "search1" size = {50} color = "white"/>
                             <Text style = {styles.spotButtonText}>procurar vaga</Text>
                         </View>
                     </TouchableOpacity>
 
                     <TouchableOpacity style = {styles.spotButton} onPress={() => navigation.navigate('SpotPlaceUpload', {phone: userInfo.phone, profilePic: userInfo.profilePic })}>
                         <View style = {styles.spotButtonLogo} >
                             <SimpleLineIcons style = {styles.spotButtonIcon} name = "camera" size = {50} color = "white"/>
                             <Text style = {styles.spotButtonText}>anunciar vaga</Text>
                         </View>
                     </TouchableOpacity>
 
                     <TouchableOpacity style = {styles.spotButton} onPress = {() => {navigation.navigate('MySpots')}} >
                         <View styles = {styles.spotButtonLogo}>
                             <Ionicons style = {styles.carSpotButtonIcon} name = "md-car-outline" size = {60} color = "white"/>
                             <Text style = {styles.spotButtonText}>minhas vagas</Text>
                         </View>
                     </TouchableOpacity>
 
                     <TouchableOpacity style = {styles.spotButton} onPress = {() => {postAlert()}}>
                         <View style = {styles.spotButtonLogo}>
                             <MaterialCommunityIcons style = {styles.storeSpotButtonIcon} name = "storefront-outline" size = {60} color = "white"/>
                             <Text style = {styles.spotButtonText}>meus anúncios</Text>
                         </View>
                     </TouchableOpacity>
             </View>
            
             
        </SafeAreaView>
     );
};

export default Home;