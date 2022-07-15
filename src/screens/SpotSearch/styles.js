import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#D9A23D',
        height: '100%'
    },

    searchBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        width: '80%',
        height: 50,
        borderRadius: 30,
        marginLeft: '10%'
    },

    searchBarIcon: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },

    searchBarText: {
        fontFamily: 'Poppins-Light',
        fontSize: 18,
        
        color: 'black',
        marginTop: 3
    },

    icon: {
        marginTop: 2,
        marginLeft: 15,
        marginRight: 15
    },

    loadingArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        color: 'black'
    },
    
    loadingText: {
        color: 'black',
        marginTop: 5
    }

});

export default styles;