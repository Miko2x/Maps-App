import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Callout } from 'react-native-maps';
import search from '../assets/search.png';
import user from '../assets/user.png';

class CalloutMap extends Component{
    render(){
        return(
        <View style={styles.container}>
            <View style={styles.searchView}>
                <Callout>
                    <TouchableOpacity style={styles.imageButton}>
                        <Image
                            source={search}
                            style={styles.imageIcon}
                        />
                    </TouchableOpacity>
                </Callout>
            </View>
            <View style={styles.findView}>
                <Callout>
                    <Text style={styles.textFind}>Find</Text>
                    <Text style={styles.textFind}>ATM</Text>
                </Callout>
            </View>
            <View style={styles.userView}>
                <TouchableOpacity style={styles.imageButton}>
                    <Image
                        source={user}
                        style={styles.imageIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
        );
    }
}

export default CalloutMap;