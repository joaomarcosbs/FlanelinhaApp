import React, {useState, useEffect} from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, Pressable } from "react-native";

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import { RNS3 } from 'react-native-aws3';
import { API, graphqlOperation } from 'aws-amplify';

import { useUserContext } from "../../context/userContext";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import styles from "./styles";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { listUserInfos } from "../../graphql/queries";
import { updateUserInfo } from "../../graphql/mutations";


import mime from "mime";

const Profile = (props) => {

    const { user } = useUserContext();
    const [imageURI, setImageURI] = useState();
    const [downloadURL, setDownloadURL] = useState(props.route.params.profilePic);
    const phoneNumber = props.route.params.phone;

    var phone = phoneNumber;
    
    const mime = require('mime');

    const signOutUser = async () => {
        await signOut(auth);
        console.log(user);
    };

    useEffect(() => {
        getProfilePic();
    }, []);

    const getProfilePic = async () => {    
        try {                  
            const result = await API.graphql(
                graphqlOperation(listUserInfos, {
                    filter: {
                        and: {
                            user_id: {
                                eq: user?.uid
                            }
                        }
                    }
                })
            )
            setDownloadURL(result.data.listUserInfos.items[0].profilePic);
            console.log("---> " + result.data.listUserInfos.items[0].profilePic);
           
            
        } catch (error) {
            console.log(error);
        }
    }

    const pickImageFromGallery = async () => {
        const options = {
            mediaType: 'photo',
            maxWidth: 500,
            maxHeight: 200
        }

        const result = await launchImageLibrary(options);

        if (result?.assets) {
            setImageURI(result.assets[0].uri);
            //console.log(result.assets[0].uri);
        }

        const file = {
            uri: imageURI,
            name: user?.uid,
            type: mime.getType(imageURI)
        }

        const config = {
            keyPrefix: "ProfilePics/",
            bucket: 'flanelinhacorp',
            region: 'sa-east-1',
            accessKey: '#ACCESS KEY HERE',
            secretKey: '#SECRET ACCESS KEY HERE',
            successActionStatus: 201
        }

        try {
            const result = await RNS3.put(file, config).then((response) => {
                console.log(response.body.postResponse.location);
                setDownloadURL(response.body.postResponse.location)
                
                const unsub = API.graphql(
                    graphqlOperation(updateUserInfo, {
                        input: {
                            id: props.route.params.id,
                            profilePic: response.body.postResponse.location
                        }
                    })
                );
            
            })
        } catch (error) {
            console.log(error);
        }

        getProfilePic();
            
    }
    

    return (
        <SafeAreaView style = {styles.container}>

            <View style = {styles.profilePic} >
                <View style = {styles.camLogo}>
                    <TouchableOpacity onPress = {pickImageFromGallery}>
                        <MaterialIcons name = "photo-library" size = {35} color = 'black'/>
                    </TouchableOpacity>   
                </View>
                
                <Image
                    style = {styles.picture}
                    source = {{uri: downloadURL}}
                />

            </View>

            <View style = {styles.profileInfo}>
                <Text style = {styles.profileInfoLabel}>Nome</Text>
                <Text style = {styles.profileInfoText}>{user?.displayName}</Text>
                <Text style = {styles.profileInfoLabel}>E-mail</Text>
                <Text style = {styles.profileInfoText}>{user?.email}</Text>
                <Text style = {styles.profileInfoLabel}>Telefone</Text>
                <Text style = {styles.profileInfoText}>{phone}</Text>
            </View>
            
            
            <TouchableOpacity style = {styles.logoutButton} onPress={signOutUser}>
                <Text style = {styles.logout}>sair</Text>
            </TouchableOpacity>

            
        </SafeAreaView>
        
    );
};

export default Profile;