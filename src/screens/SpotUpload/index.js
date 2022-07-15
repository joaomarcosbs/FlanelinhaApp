import React, { useState } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Pressable, TouchableOpacity, Alert, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useUserContext } from '../../context/userContext';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SpotSearchResult from '../../components/SpotSearchResult';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {launchImageLibrary} from 'react-native-image-picker';
import RadioForm from 'react-native-simple-radio-button';
import NumberPlease from 'react-native-number-please'; 

import mime from "mime";

import { RNS3 } from 'react-native-aws3';

import {API, graphqlOperation } from 'aws-amplify';
import { createPost } from "../../graphql/mutations";
import { useNavigation } from "@react-navigation/native";


const SpotUpload = (props) => {

    const { user } = useUserContext();
    const navigation = useNavigation();

    const [date, setDate] = useState();
    const [date2, setDate2] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [isCovered, setIsCovered] = useState(true);
    const [spots_available, setSpots_available] = useState();
    const [type, setType] = useState("car");
    const [image, setImage] = useState();
    const user_id = user?.uid;
    
    var latitude = props.route.params.lat;
    var longitude = props.route.params.lng;
    var phone = props.route.params.phone;
    var user_image = props.route.params.profilePic;

    var msg = 'preencha todos os campos';
    
    const [imageURI, setImageURI] = useState();
    
    const mime = require('mime');
    
    const initialOpenHour = {id: 'openHour', value: 1};
    const [openHour, setOpenHour] = useState(initialOpenHour);
    const openHourNumbers = {id: 'openHour', label: '', min: 0,  max: 23 };

    var radio_props = [
        {label: 'coberta       ', value: true },
        {label: 'descoberta', value: false }
      ];

    var radio_props1 = [
        {label: 'carro   ', value: "car" },
        {label: 'moto   ', value: "bike" },
        {label: 'caminhão', value: "truck" }
      ];

    const pickImageFromGallery = async () => {
        const options = {
            mediaType: 'photo',
            maxWidth: 600,
            maxHeight: 600
        }

        const result = await launchImageLibrary(options);

        if (result?.assets) {
            setImageURI(result.assets[0].uri);
        }
    }


    const uploadPost = async () => {
            const file = {
                uri: imageURI,
                name: title,
                type: mime.getType(imageURI)
            }

            const config = {
                keyPrefix: "Spots/" + user?.uid,
                bucket: 'flanelinhacorp',
                region: 'sa-east-1',
                accessKey: '#ACCESS KEY HERE',
                secretKey: '#SECRET ACCESS KEY HERE',
                successActionStatus: 201
            }
        try {
            const result = await RNS3.put(file, config).then((response) => {
                console.log(response.body.postResponse.location);
            
                const unsub = API.graphql({
                    query: createPost,
                    variables: 
                        { input: {
                                title: title,
                                description: description,
                                price: price,
                                open: date,
                                close: date2, 
                                isCovered: isCovered,
                                spots_available: spots_available,
                                type: type,
                                latitude: latitude,
                                longitude: longitude,
                                image: response.body.postResponse.location,
                                user_id: user_id,
                                phone: phone,
                                user_name: user?.displayName,
                                user_image: user_image
                            }
                        }
                    }
                );
            
            })
            
            postAlert();
            navigation.navigate('HomeScreen');

        } catch (error) {
            console.log(error);
            errorAlert(error);
        }
    }

    const postAlert = (msg) => Alert.alert(
        "Vaga Postada!", 
        msg,
        [
            {
                text: "Ok"
            }
        ]
    );

    const errorAlert = (msg) => Alert.alert(
        "Erro ao postar a vaga",
        msg, 
        [
            {
                text: "Ok"
            }
        ]
    );

    
    const fieldAlert = (msg) => Alert.alert(
        "Erro ao postar a vaga",
        "preencha todos os campos!", 
        [
            {
                text: "Ok"
            }
        ]
    );
    

    return(
        
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style = {styles.container} >
            <ScrollView contentContainerStyle = {{paddingBottom: '40%'}} showsVerticalScrollIndicator = {false}>
                
                <View>
                    <TextInput
                    style = {styles.email}
                    placeholder = "título do anúncio"
                    placeholderTextColor = "black"
                    onChangeText = {text => setTitle(text)}
                    />
                </View>
                <View>
                    <TextInput
                    style = {styles.description}
                    placeholder = "descrição do anúncio"
                    placeholderTextColor = "black"
                    multiline = {true}
                    onChangeText = {text => setDescription(text)}
                    />
                </View>

                <View style = {styles.radioContainer}>
                    <Text style = {styles.radioLabel}>a vaga é coberta?</Text>
                    <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        buttonColor = {'black'}
                        buttonSize = {18}
                        formHorizontal = {true}
                        selectedButtonColor = {'black'}
                        labelStyle = {{fontFamily: 'Poppins-Regular'}}
                        onPress={(value) => {setIsCovered(value)}}
                    />    
                </View>

                <View style = {styles.radioContainer}>
                    <Text style = {styles.radioLabel}>para qual tipo de veículo?</Text>
                    <RadioForm
                        radio_props={radio_props1}
                        initial={0}
                        buttonColor = {'black'}
                        buttonSize = {18}
                        formHorizontal = {true}
                        selectedButtonColor = {'black'}
                        labelStyle = {{fontFamily: 'Poppins-Regular'}}
                        onPress={(value) => {setType(value)}}
                    />    
                </View>
                        
                <View>
                <TextInput
                    style = {styles.email}
                    placeholder = "preço por hora"
                    placeholderTextColor = "black"
                    keyboardType = "numeric"
                    onChangeText={value => setPrice(value)}
                    />
                </View>
                
                <View>
                <TextInput
                    style = {styles.email}
                    placeholder = "lugares disponíveis"
                    placeholderTextColor = "black"
                    keyboardType = "numeric"
                    onChangeText={text => setSpots_available(text)}
                    />
                </View>

                <View >
                    <View style = {styles.timeContainer}>
                        <Text style = {styles.timeText}>horário inicial</Text>
                        <Text style = {styles.timeText}>horário final</Text>
                    </View>

                    <View style = {styles.timeContainer}>
                        <TextInput
                            style = {styles.timePicker} 
                            placeholder = "00:00"
                            placeholderTextColor = "black"
                            keyboardType = "numeric"
                            onChangeText={text => setDate(text)}
                        />

                       <TextInput
                            style = {styles.timePicker} 
                            placeholder = "00:00"
                            placeholderTextColor = "black"
                            keyboardType = "numeric"
                            onChangeText={text => setDate2(text)}
                        />
                    </View>
                </View>
                
                <View style = {styles.radioContainer}>
                    <TouchableOpacity style = {styles.button} onPress = {pickImageFromGallery}>
                        <Text style = {styles.buttonText}>carregar foto</Text>
                    </TouchableOpacity>
                </View>

                {
                    !imageURI
                    ? 
                    null
                    :
                    <View style = {styles.pictureContainer}>
                        <Image
                            style = {styles.picture}
                            source = {{uri: imageURI}}
                        />
                    </View>
                }

            </ScrollView>

            <View style = {styles.publishButtonContainer}>
                <View>
                    {
                        title === '' || description === '' || price === '' || type === '' || spots_available === '' || date === '' || date2 === '' || image === ''
                        ?
                        <TouchableOpacity style = {styles.publishButton} onPress = {fieldAlert}>
                            <Text style = {styles.publishButtonText}>anunciar</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style = {styles.publishButton} onPress = {uploadPost}>
                            <Text style = {styles.publishButtonText}>anunciar</Text>
                        </TouchableOpacity>
                    }
                    
                </View>

           </View>
        </KeyboardAvoidingView>
        
    );

};

export default SpotUpload;

