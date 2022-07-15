import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert, Platform } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { useNavigation } from '@react-navigation/native';
import SignIn from '../SignIn';
import HomeScreen from '../Home';
import { useUserContext } from '../../context/userContext';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../config/firebase';
import PhoneInput from 'react-native-phone-input';
import styles from './styles';

import { API, graphqlOperation } from 'aws-amplify';
import { listUserInfos } from '../../graphql/queries';
import { createUserInfo } from "../../graphql/mutations";

const SignUp = () => {

    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");

    const { user } = useUserContext(); 


      const {data} = {
          username,
          password,
          email,
          name
        };

      
        const goToPage = () => {
            navigation.navigate('HomeScreen');
        }

        const putUserInfo = async (userId) => {
            try { 
               await API.graphql({
                    query: createUserInfo,
                    variables: 
                        { input: {
                                phone: phone,
                                user_id: userId,
                                user_name: name,                               
                            }
                        }
                });
            } catch (error) {
                console.log(error);
            }
        }       

   const signUpUser = async () => {
        try {

            if (phone.length <= 16 ) {
                phoneAlert();
            } else {
                const user = await createUserWithEmailAndPassword(auth, email, password);
                updateProfile(auth.currentUser , {
                    displayName: name
                });
            
                console.log(auth.currentUser);

                const unsub = await API.graphql({
                    query: createUserInfo,
                    variables: 
                        { input: {
                                phone: phone,
                                user_id: auth.currentUser.uid,
                                user_name: name,                               
                            }
                        }
                });


                goToPage();
            }
            
        } catch (error) {
            errorAlert(error.message);
            console.log(error.message);
        }
    }

    const errorAlert = (msg) => Alert.alert(
        "Erro ao entrar",
        msg, 
        [
            {
                text: "Ok"
            }
        ]
    )

    

    const phoneAlert = () => Alert.alert(
        "Erro no formulário",
        "Preencha o telefone com DDI e DDD \nEx.: +55 51", 
        [
            {
                text: "Ok"
            }
        ]
    )

   


    return (
       
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style = {styles.container} >
            <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
                <View style = {styles.container}>
                    <Text style = {styles.logo}>FLANELINHA</Text>
                    
                    <View>
                        <TextInput
                            style = {styles.email}
                            placeholder = "Nome"
                            placeholderTextColor = "black"
                            autoCapitalize = "words"
                            onChangeText = {(text) => setName(text)}
                            value = {name}
                        />
                    </View>

                    <View >
                        <PhoneInput 
                            style = {{
                                marginTop: 12,
                                width: 350,
                                height: 50,
                                //paddingTop: 10,
                                borderRadius: 30,
                                borderColor: 'black',
                                borderWidth: 1,
                            }}
                            textStyle = {
                                {
                                    fontFamily: 'Poppins-Regular',
                                    fontSize: 18,
                                    marginLeft: 25,
                                    color: 'black'
                                }
                            }
                            flagStyle = {{
                                marginLeft: 25,

                            }}
                            textProps = {{placeholder: '+00 00 00000-0000', placeholderTextColor: 'black', width: 180, marginTop: Platform.OS === 'ios' ? 4 : 10}}
                            //initialCountry = 'br'
                            autoFormat = {true}
                            onChangePhoneNumber = {(value) => setPhone(value)}
                        />
                    </View>
                        
                    <View>
                        <TextInput
                            style = {styles.email}
                            placeholder = "E-mail"
                            placeholderTextColor = "black"
                            keyboardType = "email-address"
                            autoCapitalize = "none"
                            onChangeText = {(text) => setEmail(text)}
                            value = {email}
                        />
                    </View>

                    <View>
                        <TextInput
                            style = {styles.email}
                            placeholder = "Senha"
                            placeholderTextColor = "black"
                            secureTextEntry = {true}
                            onChangeText = {(text) => setPassword(text)}
                            value = {password}
                        />
                    </View>

                    <View>
                        {email === "" || password === "" || name === ""
                            ?
                            <TouchableOpacity style = {styles.button} disabled = {true}>
                                <Text style = {styles.buttonText}>Cadastrar</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style = {styles.button} onPress = {signUpUser}>
                                <Text style = {styles.buttonText}>Cadastrar</Text>
                            </TouchableOpacity>
                        }
                        
                    
                        
                    </View>
                    
                    {/*
                        Platform.OS === "ios"
                            ?
                            <View style = {styles.otherContainer}>
                                
                                <View style = {styles.otherLogIn}>
                                    <Text style = {styles.otherText}>ou cadastre-se com:</Text>
                                </View>
                                
                           

                                <View style = {styles.socialContainer}>
                                    <TouchableOpacity style = {styles.facebook}>
                                        <FontAwesome5 style = {styles.facebookLogo} name = "facebook" size = {25} color = 'white' />
                                        <Text style ={styles.facebookText}>Facebook</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style = {styles.facebook} >
                                        <FontAwesome5 style = {styles.googleLogo} name = "google" size = {25} color = 'white' />
                                        <Text style ={styles.googleText}>Google</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            :
                            <View style = {styles.socialContainer}>
                                <TouchableOpacity style = {styles.facebook}>
                                    <FontAwesome5 style = {styles.facebookLogo} name = "facebook" size = {25} color = 'white' />
                                    <Text style ={styles.facebookText}>Entrar com Facebook</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style = {styles.facebook} >
                                    <FontAwesome5 style = {styles.googleLogo} name = "google" size = {25} color = 'white' />
                                    <Text style ={styles.googleText}>Entrar com Google</Text>
                                </TouchableOpacity>
                            </View>
                    */
                    }

                    <View style = {styles.signUpContainer}>
                        <Text style = {styles.signUpText}>Já é cadastrado? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style = {styles.signUpButtonText}>Entre aqui</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default SignUp;