import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#D9A23D'
    },
    
    detailsContainer: {
        height: '100%',
        bottom: 0,
        padding: 20,
        backgroundColor: "#D9A23D",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -26
    },
    
    picture: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        marginTop: 22
    },

    spotType: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 10
    },

    spotTypeText: {
        display: "flex",
        marginLeft: 10,
        marginTop: 10,
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: 'black'
    },

    spotTypeIconBike: {
        marginTop: 10
    },
    
    spotTypeIconCar: {
        marginTop: 8,
        marginLeft: -2
    },

    spotTypeIconTruck: {
        marginTop: 10,
        marginLeft: 3
    },

    spotTitle: {
        marginTop: 0,
        marginLeft: 2,
        fontFamily: "Poppins-Regular",
        fontSize: 35,
        color: "black"
    },

    spotDescription: {
        marginLeft: 2,
        textAlign: "justify" ,
        color: "black",
        fontFamily: "Poppins-Light",
        fontSize: 16,
        marginTop: 10
    },

    spotHour: {
        marginLeft: 2,
        textAlign: "justify" ,
        color: "black",
        fontFamily: "Poppins-Bold",
        fontSize: 18,
        marginTop: 10
    },

    spotContact: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 10,
        marginRight: 20,
        marginBottom: 20,
        width: 100
    },

    spotPrice: {
        fontFamily: "Poppins-Bold",
        fontSize: 25,
        color: "black",
        marginTop: 30,
        marginLeft: 2
    },

    profileContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 10,
        marginRight: 20,
        width: 170
    },

    profilePicture: {
        width: 50,
        height: 50,
        aspectRatio: 1/1,
        borderRadius: 100,
        resizeMode: 'cover',
        marginTop: 30,
        marginLeft: -5
    },

    profileText: {
        color: "black",
        fontFamily: "Poppins-Regular",
        fontSize: 20,
        marginTop: 43
    },

    rentButton: {
        width: '100%',
        height: 60,
        marginTop: 40,
        bottom: 20,
        backgroundColor: 'black',
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center"
    },

    rentButtonText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 30,
        color: 'white'
    }

    

});

export default styles;