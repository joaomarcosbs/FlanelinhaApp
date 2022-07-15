import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = ({title}) => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style = {styles.container}>
            <TouchableOpacity onPress={navigation.goBack}>
                <Ionicons style = {styles.icon} name = "arrow-back" size = {34} color={"black"} />
            </TouchableOpacity>
            <Text style = {styles.title}>{title}</Text>
        </SafeAreaView>
    );
};

export default Header;