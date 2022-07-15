import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        height: (Platform.OS === "ios") ? 100 : 80,
        width: '100%',
        backgroundColor: 'transparent',
        
        justifyContent: 'flex-start',
        alignItems: 'center',
        top: 20
    },

    title: {
        color: "black",
        fontFamily: 'Poppins-Regular',
        fontSize: 25
    },

    icon: {
        marginTop: 2,
        marginLeft: 15,
        marginRight: 15
    }
});

export default styles;