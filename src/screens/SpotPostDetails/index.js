import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, Pressable, StatusBar, Linking, Alert } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import styles from "./styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../components/Header';
import SpotButton from '../../components/SpotButton';
import ChatRow from '../../components/ChatRow';
import { useNavigation } from "@react-navigation/native";

import {API, graphqlOperation } from 'aws-amplify';
import { deletePost } from "../../graphql/mutations";

const SpotPostDetails = ({route}) => {

    const post = route.params;
    const navigation = useNavigation();

    var phone = route.params.phone;

    phone = phone.slice(1,3) + phone.slice(4,6) + phone.slice(7,12) + phone.slice(13);

    const vemDeZap = () => {
        Linking.canOpenURL("whatsapp://send?phone=" + phone + "&text=Olá " + post.user_name + ", vi sua vaga " + post.title + " no aplicativo Flanelinha, vamos conversar sobre ela?").then(supported => {
           if(supported){
            return Linking.openURL("whatsapp://send?phone=" + phone + "&text=Olá " + post.user_name + ", vi sua vaga " + post.title + " no aplicativo Flanelinha, vamos conversar sobre ela?");
           } else {
            return Linking.openURL("https://api.whatsapp.com/send?phone=" + phone + "&text=Olá " + post.user_name + ", vi sua vaga " + post.title + " no aplicativo Flanelinha, vamos conversar sobre ela?");
           } 
        })
    }

    const spotCall = () => {
        Linking.openURL("tel:" + phone);
    }

    const deleteAlert = () => Alert.alert(
        "ATENÇÃO!", 
        "Você realmente deseja excluir o post?",
        [
            {
                text: "Ok",
                onPress: () => deleteSelectedPost()
            },
            {
                text: "Cancelar"
            }
            
        ]
    );
    
    const deletedAlert = () => Alert.alert(
        "Aviso: ", 
        "Seu vaga " + post.title + "\nfoi deletada!",
        [
            {
                text: "Ok"
            }       
        ]
    );

    const deleteSelectedPost = async () => {
        try {
            const unsub = await API.graphql(
                graphqlOperation(deletePost,{
                    input: {
                        id: post.id
                    }
                })
            );
            console.log(unsub);
            deletedAlert();
            navigation.navigate('HomeScreen');

        } catch (error) {
            console.log(error);
        }
    }



    return (  
        
            
            <ScrollView style = {styles.container} showsVerticalScrollIndicator = {false}>
                <StatusBar barStyle='light-content'/> 
           
                

                    <View>
                        <Image 
                            style = {styles.picture} 
                            source = {{uri: post.image}}
                        />
                    </View> 
                    
                    <View style = {styles.detailsContainer}>
                        <View style = {styles.spotType}>
                            {
                                post.type === "car" ? 
                                    <Ionicons style = {styles.spotTypeIconCar} name = "car" size = {23} color = "black"/>
                                    :
                                    post.type === "truck" ? 
                                        <Fontisto style = {styles.spotTypeIconTruck} name = "truck" size = {18} color = "black" />
                                        :
                                        <Fontisto style = {styles.spotTypeIconBike} name = "motorcycle" size = {18} color = "black"/>
                            }
                            {
                                post.type === "car" ? 
                                    <Text style = {styles.spotTypeText}>Carro</Text>
                                    :
                                    post.type === "truck" ? 
                                    <Text style = {styles.spotTypeText}>Caminhão</Text>
                                        :
                                        <Text style = {styles.spotTypeText}>Motocicleta</Text>
                            }
                            
                        </View>

                    
                        <Text style = {styles.spotTitle}>{post.title}</Text>
                        <Text style = {styles.spotDescription}>{post.description}</Text>

                        <Text style = {styles.spotHour}>Horário de abertura:</Text>
                        <Text style = {styles.spotDescription}>{post.open}</Text>
                        
                        <Text style = {styles.spotHour}>Horário de fechamento:</Text>
                        <Text style = {styles.spotDescription}>{post.close}</Text>
                        
                        <Text style = {styles.spotHour}>Cobertura:</Text>
                        { 
                            post.isCovered == true 
                            ? 
                            <Text style = {styles.spotDescription}>Coberta</Text>
                            :
                            <Text style = {styles.spotDescription}>Descoberta</Text>
                        }
                        
                        <Text style = {styles.spotHour}>Capacidade:</Text>
                        <Text style = {styles.spotDescription}>{post.spots_available}</Text>

                        <Text style = {styles.spotHour}>Entrar em contato:</Text>

                        <View style = {styles.spotContact}>
                            <TouchableOpacity onPress = {vemDeZap}>
                                <Fontisto style = {styles.spotTypeIconBike}  name = "whatsapp" size = {35} color = "black"/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {spotCall}>
                                <Ionicons style = {styles.spotTypeIconBike}  name = "ios-call-outline" size = {35} color = "black"/>
                            </TouchableOpacity>
                        </View>

                        <Text style = {styles.spotHour}>Anunciada por:</Text>
                        
                        <View style = {styles.profileContainer}>

                            {
                                !post.user_image
                                ?
                                null
                                :
                                <Image 
                                    style = {styles.profilePicture}
                                    source = {{uri: post.user_image}}
                                />
                            }

                            <Text style = {styles.profileText}>{post.user_name}</Text>
                        </View>
                        <Text style = {styles.spotPrice}>R${post.price}/hora</Text>

                    {
                        
                        post.path 
                        ?
                        <TouchableOpacity style = {styles.rentButton} onPress={deleteAlert}>
                            <Text style = {styles.rentButtonText}>excluir</Text>
                        </TouchableOpacity>
                        :
                        null
                    }

                    </View>
          
            </ScrollView>
               
    );
};

export default SpotPostDetails;