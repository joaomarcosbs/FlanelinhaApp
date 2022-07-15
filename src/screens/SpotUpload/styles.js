import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#D9A23D',
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 40,
        //position: "absolute"
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

    description: {
        marginTop: 10,
        paddingTop: 13,
        marginBottom: 15,
        backgroundColor: '#D9A23D',
        width: 350,
        minHeight: 50,
        borderRadius: 30,
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center',
        fontFamily: 'Poppins-Light',
        color: 'black',
        
    },

    radioContainer: {
        alignItems: "center"
    },  

    radioLabel: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15, 
        textAlign: "center", 
        marginBottom: 15, 
        marginTop: 15, 
        color: 'black'
    },

    searchBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D9A23D",
        width: '80%',
        height: 50,
        borderRadius: 30,
        marginLeft: -30
    },

    searchBarIcon: {
        marginTop: 3,
        marginLeft: 18,
        marginRight: 0
    },

    searchBarIcon2: {
        marginTop: 11,
        marginLeft: 18,
        marginRight: 0
    },

    timeContainer: {
        width: 350,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    timeText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: 'black',
        marginTop: 10,
        marginLeft: 25,
        marginRight: 30

    },

    timePicker: {
        display: "flex",
        height: 50,
        width: '45%',
        backgroundColor: '#D9A23D',
        marginTop: 10,
        borderRadius: 40,
        borderWidth: 1,
        textAlign: "center"
        //justifyContent: "center",
        //alignItems: "center"
    },

    button: {
        display: "flex",
        height: 50,
        width: 280,
        backgroundColor: '#D9A23D',
        marginTop: 40,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        color: 'black',
        fontFamily: 'Poppins-Regular'
        
    },

    pictureContainer: {
        display: "flex",
        width: '100%',
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },

    picture: {
        width: '100%',
        height: 200,
        aspectRatio: 3/2,
        resizeMode: 'cover',
        
        borderColor: 'white',
        borderWidth: 5,
        
    },

    publishButtonContainer: {
        position: "absolute",
        bottom: 0
    },

    publishButton: {
        display: "flex",
        height: 50,
        width: 350,
        backgroundColor: 'black',
        bottom: 30,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center"
    },

    publishButtonText: {
        color: 'white',
        fontFamily: 'Poppins-Bold',
        fontSize: 22
        
    },
});

export default styles;