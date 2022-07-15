import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert, Platform } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import SignUp from '../SignUp';
import { useUserContext } from '../../context/userContext';
import styles from './styles';

import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../../config/firebase';

const SignIn = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorSignIn, setErrorSignIn] = useState("");

    const { user } = useUserContext();

    const signInUser = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
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

    return (
       
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style = {styles.container} >
            <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
                <View style = {styles.container}>
                    <Text style = {styles.logo}>FLANELINHA</Text>
                    
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
                        {email === "" || password === "" 
                            ?
                            <TouchableOpacity style = {styles.button} disabled = {true}>
                                <Text style = {styles.buttonText}>Entrar</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style = {styles.button} onPress = {signInUser}>
                                <Text style = {styles.buttonText}>Entrar</Text>
                            </TouchableOpacity>
                        }
                        {errorSignIn === true
                            ?
                            errorAlert
                            :
                            null

                        }
                    
                        
                    </View>

                    {/*
                        Platform.OS === "ios"
                            ?
                            <View style = {styles.otherContainer}>
                                
                                <View style = {styles.otherLogIn}>
                                    <Text style = {styles.otherText}>ou entre com:</Text>
                                </View>
                                
                           

                                <View style = {styles.socialContainer}>
                                    <TouchableOpacity style = {styles.facebook}>
                                        <FontAwesome5 style = {styles.facebookLogo} name = "facebook" size = {25} color = 'white' />
                                        <Text style ={styles.facebookText}>Facebook</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style = {styles.facebook}>
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

                                <TouchableOpacity style = {styles.facebook}>
                                    <FontAwesome5 style = {styles.googleLogo} name = "google" size = {25} color = 'white' />
                                    <Text style ={styles.googleText}>Entrar com Google</Text>
                                </TouchableOpacity>
                            </View>
                        */
                    }
                    
                    

                    <View style = {styles.signUpContainer}>
                        <Text style = {styles.signUpText}>Ainda não está cadastrado? </Text>
                        <TouchableOpacity onPress = {() => navigation.navigate('SignUp')}>
                            <Text style = {styles.signUpButtonText}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default SignIn;