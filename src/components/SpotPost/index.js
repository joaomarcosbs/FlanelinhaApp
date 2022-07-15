import React from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from "@react-navigation/native"; 

const SpotPost = (props) => {

    const navigation = useNavigation();

    const post = props.post;
    const path = props.path;

    const goToPage = () => {
        navigation.navigate('SpotPostDetails', {id: post.id , description: post.description, title: post.title, type: post.type, price: post.price, open: post.open, close: post.close, isCovered: post.isCovered, user_id: post.user_id, spots_available: post.spots_available, phone: post.phone, user_name: post.user_name, image: post.image, user_image: post.user_image, path: path}); 
    };


    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress={goToPage}>
               <Image 
                    style = {styles.picture} 
                    source = {{uri: post.image}}
                />
            </TouchableOpacity>
                
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
            </View>

            <TouchableOpacity onPress = {goToPage}>
                <Text style = {styles.spotTitle}>{post.title}</Text>
                <Text style = {styles.spotDescription} numberOfLines = {5}>{post.description}</Text>
            </TouchableOpacity>

            <Text style = {styles.spotPrice}>R${post.price}/hora</Text>

        </View>
    );
};

export default SpotPost;