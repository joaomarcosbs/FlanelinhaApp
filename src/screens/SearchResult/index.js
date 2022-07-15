import React, { useState, useEffect } from "react";
import { View, FlatList, ScrollView, Text, Button, TouchableOpacity } from "react-native";

import SpotPost from "../../components/SpotPost";
import { useNavigation } from "@react-navigation/native";
import { useUserContext } from "../../context/userContext";

const SearchResult = (props) => {

    const { user } = useUserContext();
    const navigation = useNavigation();

    const {posts} = props;

    return (
        <View style = {{width: '100%', height: '100%' , backgroundColor: '#D9A23D'}}>

            {
                !posts[0]
                ?
                <View style = {{height: '100%', justifyContent: "center", alignItems: "center"}}>
                    <Text style = {{color:'black', fontFamily: "Poppins-Bold", fontSize: 80}}>:(</Text>
                    <Text style = {{color:'black', fontFamily: "Poppins-Regular", fontSize: 20}}>Não há vagas nesta área</Text>
                </View>
                
                :
                <FlatList
                    data = {posts}
                    renderItem = {({item}) => <SpotPost post = {item}/> }
                    showsVerticalScrollIndicator = {false}
                />
            }
            
        </View>
    );
};

export default SearchResult;