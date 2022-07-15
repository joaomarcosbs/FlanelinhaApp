import React from 'react';
import { View, Text } from 'react-native';
import { Marker } from 'react-native-maps';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";


const SpotMarker = (props) => {

    const post = props.post;
    const lat = post.latitude;
    const long = post.longitude;
    const price = post.price;
    
    const navigation = useNavigation();
    
    return(
        <Marker coordinate = {{latitude: lat, longitude: long}} >
            <View style = {styles.marker} >
                <Text style = {styles.markerText}>R${price}</Text>
            </View>
        </Marker>
    );
};

export default SpotMarker;