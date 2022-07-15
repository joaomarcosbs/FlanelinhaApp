import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#D9A23D"
    },
    
    picture: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 20,
    },

    spotType: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 10
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
        fontSize: 30,
        color: "black"
    },

    spotDescription: {
        marginLeft: 2,
        textAlign: "justify" ,
        color: "black",
        fontFamily: "Poppins-Light",
        fontSize: 18
    },

    spotPrice: {
        fontFamily: "Poppins-Bold",
        fontSize: 25,
        color: "black",
        marginTop: 5,
        marginLeft: 2
    }

});

export default styles;