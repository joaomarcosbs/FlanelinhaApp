import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResult from '../screens/SearchResult';
import SearchResultMap from '../screens/SearchResultMap';
import styles from './styles';

import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../graphql/queries';



const Tab = createMaterialTopTabNavigator();

const SearchTab = ({route}) => {

    const latitude = route.params.loc.lat;
    const longitude = route.params.loc.lng;

    const local = route.params.loc;
    
    const [post, setPost] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const result = await API.graphql(
                    graphqlOperation(listPosts, {
                        filter: {
                            and: {
                                latitude: {
                                    between: [(latitude - 0.002), (latitude + 0.002)]
                                },
                                longitude: {
                                    between: [(longitude - 0.002), (longitude + 0.002)]
                                }
                            }
                        }
                    })
                )
                setPost(result.data.listPosts.items);
                
            } catch (error) {
                console.log(error);
            }
        };

        fetchPosts();

    }, []);

    return(
        <Tab.Navigator 
        screenOptions={{
            tabBarStyle: { backgroundColor: '#D9A23D' },
            tabBarIndicatorContainerStyle: {color: 'white'},
            tabBarActiveTintColor: 'black'
          }}
        style={{backgroundColor: 'black'}}>
            <Tab.Screen 
            name = {"Lista"}
            >
                {() => (<SearchResult posts = {post}/>)}
            </Tab.Screen>
            
            <Tab.Screen 
            name = {"Mapa"} 
            >
                {() => (<SearchResultMap posts = {post} local = {local}/>)}
            </Tab.Screen>
           
        </Tab.Navigator>
    );
};

export default SearchTab;