import React from 'react';
import { View, Pressable, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';

const SpotButton = ({func}) => {
    return(
        <SafeAreaView style = {styles.container}>
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>{func}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default SpotButton; 