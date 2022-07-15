import { StyleSheet } from "react-native";
import { isSelected } from "./index";

const styles = StyleSheet.create({
    marker: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 35,
        width: 70,
        padding: 6,
        backgroundColor: isSelected ? 'black' : 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#bbb'
    },

    markerText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        color: 'black'
    }

});

export default styles;