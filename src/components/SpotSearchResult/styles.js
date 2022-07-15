import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        paddingLeft: 10,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: '#D9A23D',
        width: '80%'
    },

    searchResultIcon: {
        backgroundColor: 'black',
        borderRadius: 10,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },

    searchResultTextContainer: {
        justifyContent: "center"
    },

    searchResultText: {
        fontFamily: "Poppins-Regular",
        fontSize: 20,
        marginLeft: 20,
        color: 'black'
    }


});

export default styles;