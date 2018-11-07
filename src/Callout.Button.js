import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Callout } from 'react-native-maps';

export default class CalloutMap extends React.Component{
    render(){
        return(
        <View style={{ flex: 1 }}>
            <View style={{ marginTop: '7%', marginLeft: '77%' }}>
                <Callout>
                    <TouchableOpacity style={styles.image}>
                        <Image
                            source={require('./assets/search.png')}
                            style={styles.imageIcon}
                        />
                    </TouchableOpacity>
                </Callout>
            </View>
            <View style={{ alignItems: 'center', bottom: 2 }}>
                <Callout>
                    <Text style={styles.textFind}>Find</Text>
                    <Text style={styles.textFind}>ATM</Text>
                </Callout>
            </View>
            <View style={{ alignItems: 'flex-start', right: '5%' }}>
                <TouchableOpacity style={styles.image}>
                    <Image
                        source={require('./assets/user.png')}
                        style={styles.imageIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        backgroundColor: 'transparent',
        height: 20,
        width: 20
    },
    imageIcon: {
        height: 20,
        width: 20
    },
    textFind: {
        fontSize: 15
    }
})