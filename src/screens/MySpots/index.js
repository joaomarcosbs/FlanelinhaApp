import React, {useEffect, useState} from 'react';
import {View, FlatList, Text } from 'react-native';

import { useNavigation } from "@react-navigation/native";
import { useUserContext } from "../../context/userContext";

import SpotPost from '../../components/SpotPost';
import ChatRow from '../../components/ChatRow';

import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';

const MySpots = (props) => {

    const [post, setPost] = useState([]);

    const { user } = useUserContext();
    const navigation = useNavigation();

    var path = props.route.name;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const result = await API.graphql(
                    graphqlOperation(listPosts, {
                        filter: {
                            and: {
                                user_id: {
                                    eq: user?.uid
                                }
                            }
                        }
                    })
                )
                setPost(result.data.listPosts.items);
                //console.log(result);
            } catch (error) {
                console.log(error);
            }
        };

        fetchPosts();

    }, []);    

    return(
        
        <View style = {{width: '100%', height: '100%' , backgroundColor: '#D9A23D'}}>
            
            {
                !post[0]
                ?
                <View style = {{height: '100%', justifyContent: "center", alignItems: "center"}}>
                    <Text style = {{color:'black', fontFamily: "Poppins-Bold", fontSize: 80}}>:(</Text>
                    <Text style = {{color:'black', fontFamily: "Poppins-Regular", fontSize: 20}}>Você ainda não fez nenhum anúncio</Text>
                </View>
                
                :
                <FlatList
                    data = {post}
                    renderItem = {({item}) => <SpotPost post = {item} path = {path}/> }
                    showsVerticalScrollIndicator = {false}
                />
            }
        </View>    
        
    )
}

export default MySpots; 