import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9A23D',
        width: '100%',
        height: '100%'
    },
    
    logo: {
        fontFamily: 'Poppins-Bold',
        color: 'black',
        fontSize: (Platform.OS === "ios" ? 48 : 60),
        marginBottom: '20%'
    },

    email: {
        marginTop: 10,
        backgroundColor: '#D9A23D',
        width: 350,
        height: 50,
        borderRadius: 30,
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center',
        fontFamily: 'Poppins-Light',
        color: 'black'
    },

    button: {
        marginTop: 30,
        backgroundColor: '#000',
        width: 180,
        height: 45,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        color: 'white'
    },

    otherContainer: {
        width: '100%',
        display: 'flex',
        //justifyContent: 'center',
        alignItems: 'center'
    },

    otherLogIn: {
       top: 35
    },

    otherText: {
        fontFamily: 'Poppins-Regular'
    },

    socialContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '86%',
        marginTop: 30
    },

    facebook: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        marginTop: 20,
        borderRadius: 30,
        borderWidth: 1,
        width: (Platform.OS === "ios" ? 160 : 170),
        height: 30
    },

    facebookLogo: {
        marginLeft: 1,
        marginTop: (Platform.OS === "ios" ? 0.3 : -1.3)
    },

    facebookText: {
        color: 'white',
        fontFamily: 'Poppins-Light',
        fontSize: (Platform.OS === "ios" ? 13 : 15),
        marginLeft: (Platform.OS === 'ios' ? 27 : 5),
        marginTop: 1
    },

    googleLogo: {
        marginLeft: 2,
        marginTop: -1.4
    },

    googleText: {
        marginLeft: (Platform.OS === 'ios' ? 32 : 12),
        marginTop: 1,
        fontFamily: 'Poppins-Light',
        color: 'white',
        fontSize: (Platform.OS === "ios" ? 13 : 15),
    },

    signUpContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30
    },

    signUpText: {
        fontFamily: 'Poppins-Regular',
        color: 'black'
    },

    signUpButtonText: {
        fontFamily: 'Poppins-Regular',
        color: '#0000bb',
        textDecorationLine: 'underline'
    }
});

export default styles;