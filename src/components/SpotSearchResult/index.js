import React from "react";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Entypo from 'react-native-vector-icons/Entypo';
import styles from "./styles";

const SpotSearchResult = ({item}) => {

    const navigation = useNavigation();

    return(
        <View style = {styles.container}>
            
                <View style = {styles.searchResultIcon}>
                    <Entypo name = "location-pin" size = {40} color = "white"/>
                </View>

                <View style = {styles.searchResultTextContainer}>
                    <Text style = {styles.searchResultText} >{item.description}</Text>
                </View>
            

            
        </View>
    );
};

export default SpotSearchResult;