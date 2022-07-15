import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 50,
        position: "absolute", 
        bottom: 50
    },
    
    button: {
        width: '100%',
        height: 50,
        //marginTop: 40,
        //bottom: 20,
        backgroundColor: 'black',
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        //position: "absolute"
    },

    buttonText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 30,
        color: 'white'
    }
});

export default styles;