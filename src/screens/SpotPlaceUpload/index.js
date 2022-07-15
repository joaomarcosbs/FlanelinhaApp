import React, {useState} from "react";
import { TouchableOpacity, SafeAreaView, View, Text, TextInput, ActivityIndicator } from "react-native";
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import SpotSearchResult from '../../components/SpotSearchResult';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Header from "../../components/Header";


const SpotPlaceUpload = (props) => {

    const navigation = useNavigation();
    const [spotDetails, setSpotDetails] = useState();
    const [loading, setLoading] = useState(false);

    var phone = props.route.params.phone;
    var user_image = props.route.params.profilePic;
     console.log(user_image);

    const goToPage = (loc) => {
        
        navigation.navigate('SpotUpload', { phone: phone, user_image: user_image, lat: loc.lat, lng: loc.lng });
    }
    
    return (
        <SafeAreaView style = {styles.container}>

             <View>
                <GooglePlacesAutocomplete
                    placeholder='Qual é o endereço da vaga?'
                    placeholderTextColor = 'black'
                    fetchDetails
                    onPress={(data, details)  => {
                        // 'details' is provided when fetchDetails = true
                        const loc = details.geometry.location;
                        
                        console.log(loc);
                        goToPage(loc);
                    }}
                    
                    enablePoweredByContainer={false}
                    textInputProps = {{ placeholderTextColor: 'black' }}
                        styles = {{
                            textInputContainer:{
                                height: 50,
                                backgroundColor: '#D9A23D',
                                color: 'black',
                                borderRadius: 30,
                                borderColor: 'black',
                                borderWidth: 1,
                                width: '80%',
                                margin: '10%',
                                display: "flex",
                                flexDirection: 'row',
                                justifyContent: "flex-start",
                                marginTop: (Platform.OS === 'ios') ? 10 : 0
                            },

                            textInput: {
                                color: 'black',
                                fontSize: 14,
                                marginTop: 2,
                                width: '70%',
                                fontFamily: 'Poppins-Light',
                                textAlign: "center"
                            }
                        }}
                         
                    renderLeftButton = {() => <AntDesign style = {styles.searchBarIcon} name = "search1" size = {25} color = "black"/>}

                    query={{
                        key: '#API KEY HERE',
                        language: 'pt-br',
                    }}
                    renderRow = {(item) => <SpotSearchResult item = {item}/>}
                    suppressDefaultStyles
                />
            </View>

        </SafeAreaView>
    );
};

export default SpotPlaceUpload;