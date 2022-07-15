import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 90, 
        backgroundColor: '#FBC45F',
        marginLeft: '2%',
        marginTop: (Platform.OS === 'ios') ? 10 : 0,
        marginBottom: (Platform.OS === 'ios') ? 0 : 10,
        borderRadius: 20,
        shadowColor: 'white',
        shadowRadius: 50,
        shadowOffset: {
            width: 10,
            height: 100
        }
    },

    touchableArea: {
        display: 'flex',
        flexDirection: "row"
       
        
    },

    textContainer: {
        marginTop: 17,
        marginLeft: 15
    },

    picture: {
        width: 60,
        aspectRatio: 1 / 1,
        resizeMode: 'cover',
        borderRadius: 60,
        marginTop: 16,
        marginLeft: 10
    },

    userName: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        color: 'black'
    },

    lastMessege: {
        fontFamily: 'Poppins-Light',
        fontSize: 14,
        color: 'black',
        marginTop: 2
    }
});

export default styles;