import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 0,
        backgroundColor: "white",
        flexDirection: "row",
        height: 150,
        borderRadius: 20,
        width: '80%',
        marginLeft: '2.5%',
        marginBottom: 15
    },
    
    imageContainer: {
        flex: 1
    },

    picture: {
        width: '100%',
        height: '100%',        
        resizeMode: 'cover',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20
    },

    descriptionContainer: {
        flex: 2,
        paddingLeft: 10,
        marginTop: 10
    },

    spotType: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 18
    },

    spotTypeIconBike: {
        marginTop: 10
    },
    
    spotTypeIconCar: {
        marginTop: 5,
        marginLeft: 40
    },

    spotTypeIconTruck: {
        marginTop: 10,
        marginLeft: 45
    },

    spotTitle: {
        marginTop: 15,
        marginLeft: 2,
        fontFamily: "Poppins-Regular",
        fontSize: 19,
        color: "black"
    },

    spotDescription: {
        marginLeft: 2,
        textAlign: "justify" ,
        color: "black",
        fontFamily: "Poppins-Light",
        fontSize: 15,
        width: '95%'
    },

    priceTypeContainer: {
        display: "flex",
        flexDirection: "row",
        marginTop: 5
    },

    spotPrice: {
        fontFamily: "Poppins-Bold",
        fontSize: 17,
        color: "black",
        marginTop: 5,
        marginLeft: 2
    }

});

export default styles;