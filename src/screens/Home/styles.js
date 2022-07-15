import { Platform, StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        //justifyContent: "space-around",
        backgroundColor: '#D9A23D',
        //paddingTop: 80
    },
    
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: '90%',
        //position: "absolute",
        marginTop: (Platform.OS === 'ios') ? 0 : 15,
        marginLeft: '4.5%'
    },

    mainTitle: {
        height: 60,
        width: '90%',
        fontSize: (Platform.OS === 'ios') ? 40 : 50,
        fontFamily: "Poppins-Bold",
        textAlign: "left",
        color: 'black',
        marginLeft: '5%',
        top: (Platform.OS === "ios") ? '30%' : '25%'
    },

    subTitle: {
        fontSize: 25,
        fontFamily: "Poppins-Bold",
        color: 'black',
        marginTop: 10
    },

    buttons: {
        display: "flex",
        marginTop: (Platform.OS === "ios") ? '90%' : '60%',
        backgroundColor: 'blue',
        //justifyContent: "space-between"
        height: 300,
        width: 100
    },

    buttonsArea: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: '20%',
        marginLeft: '5%',
        width: '90%'
    },

    spotButton: {
        height: 200,
        width: '47.5%',
        marginBottom: 15,
        backgroundColor: 'black',
        display: "flex",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },

    spotButtonLogo: {
        display: "flex",
        justifyContent: "center"
    },

    spotButtonIcon: {
        marginLeft: (Platform.OS === 'ios') ? 38 : 35
    },

    storeSpotButtonIcon: {
        marginLeft: 35
    },

    carSpotButtonIcon: {
        marginLeft: 30
    },

    spotButtonText: {
        marginTop: 15,
        fontSize: (Platform.OS === 'ios') ? 17 : 20,
        fontFamily: 'Poppins-Regular',
        color: 'white'
    }
});

export default styles;