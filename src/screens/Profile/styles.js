import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        //justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#D9A23D',
        //paddingTop: 80
    },

    profilePic: {
        width: '100%',
        display: "flex",
        alignItems: "center",
        marginTop: '10%',
        marginBottom: '15%'
    },

    camLogo: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: 'white',
        width: 58,
        height: 58,
        borderRadius: 30,
        //borderWidth: 7,
        //borderColor: 'black',
        
        //borderRightColor: '#D9A23D',
        //borderTopColor: '#D9A23D',
        paddingLeft: 12,
        marginBottom: -55,
       
        marginRight: -100,
        zIndex: 1
    },

    picture: {
        width: 180,
        height: 180,
        aspectRatio: 1/1,
        resizeMode: 'cover',
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 8,
        
    },

    profileInfo: {
        display: "flex",
        width: '80%',
        height: '30%' ,
        //backgroundColor: 'white'
    },

    profileInfoLabel: {
        fontFamily: 'Poppins-Bold',
        fontSize: 25,
        color: 'black'
    },
    
    profileInfoText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        color: 'black',
        marginBottom:'10%'
    },

    logoutButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center", 
        width: 230,
        height: 50,
        backgroundColor: 'black',
        borderRadius: 50,
        marginTop: '30%'
    },

    logout: {
       
        fontFamily: "Poppins-Regular",
        color: 'white',
        fontSize: 25,
    }

});

export default styles;