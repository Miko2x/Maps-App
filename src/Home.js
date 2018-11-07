import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';

export default class Home extends React.Component {
    moveScreen() {
        this.props.navigation.navigate('Screen2')
    }
    render() {
        return(
                <View style={styles.container}>
                    <ImageBackground
                        source={require('./assets/BgHome.png')} 
                        style={styles.bg}
                    >
                    <Text style={styles.text1}>Hello!</Text>
                    <Text style={styles.text2}>Welcome to Map App.</Text>
                        <TouchableOpacity 
                            style={styles.finger}
                        >
                            <Image
                                source={require('./assets/fingerTouch.png')}
                                style={styles.fingerIcon}
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            onPress={() => this.moveScreen()}
                            style={styles.login}
                        >
                            <View style={styles.loginView}>
                                <Text style={styles.loginText}>Login</Text>
                            </View>
                        </TouchableOpacity>
                        
                    </ImageBackground>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    text1: {
        color: 'white',
        fontSize: 60,
        fontWeight: '400',
        fontFamily: 'HelveticaNeueLight',
        paddingLeft: 25,
        marginTop: 60,
    },
    text2: {
        color: 'white',
        fontSize: 40,
        paddingLeft: 25,
        marginTop: 10,
        fontFamily: 'HelveticaNeueLight',

    },
    bg: { 
        height: '100%', 
        width: '100%' 
    },
    finger: {  
        position: 'absolute', 
        alignSelf: 'center',
        justifyContent: 'center', 
        marginTop: 350,
    },
    fingerIcon: { 
        height: 100, 
        width: 100,
    },
    login: { 
        position: 'absolute', 
        alignSelf: 'center', 
        justifyContent: 'center', 
        marginTop: 540
    },
    loginView: { 
        backgroundColor: 'rgb(210, 210, 210)', 
        height: 50, 
        width: 300, 
        borderRadius: 10, 
    },
    loginText: { 
        fontSize: 16,
        textAlign: 'center', 
        fontFamily: 'HelveticaNeueLight',
        marginTop: 15,
    },
})