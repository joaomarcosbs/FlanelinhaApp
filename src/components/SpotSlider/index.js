import React from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const SpotSlider = (props) => {

    const post = props.posts;

    return (
        <View style = {styles.container}>
            <View style = {styles.imageContainer}>
                <TouchableOpacity>
                    <Image 
                        style = {styles.picture} 
                        source = {{uri: 'https://dummyimage.com/600x400/000/fff.jpg'}}
                    />
                </TouchableOpacity>
            </View>
            
            <View style = {styles.descriptionContainer}>
                <TouchableOpacity>
                    <Text style = {styles.spotTitle} numberOfLines = {1}>{post.title}</Text>
                    <Text style = {styles.spotDescription} numberOfLines = {2}>{post.description}</Text>
                </TouchableOpacity>

                <View style = {styles.priceTypeContainer}>
                    <Text style = {styles.spotPrice}>R${post.price}/hora</Text>

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
                
            </View>
           
            

        </View>
    );
};

export default SpotSlider;