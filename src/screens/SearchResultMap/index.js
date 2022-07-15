import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './styles';
import SpotMarker from '../../components/SpotMarker';

import { useNavigation } from "@react-navigation/native";

const SearchResultMap = (props) => {

    const {posts} = props;
    const {local} = props;
    
    const [selectedSpotId, setSelectedSpotId] = useState([]);

    const navigation = useNavigation();

    return(
        <View style = {styles.container}>
           <MapView
                style={styles.map}
                //provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: local.lat,
                    longitude: local.lng,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04,
                 }}
            >
            
            {posts.map(posts => (
                <View onPress={() => navigation.navigate('SpotPostDetails', {id: posts.id , description: posts.description, title: posts.title, type: posts.type, price: posts.price, open: posts.open, close: posts.close, isCovered: posts.isCovered, user_id: posts.user_id, spots_available: posts.spots_available, phone: posts.phone, image: posts.image, user_name: posts.user_name, user_image: posts.user_image})}>
                     <SpotMarker post = {posts} />
           
                </View>
              
            ))
            }
            
         </MapView>

        </View>
    );
};

export default SearchResultMap;