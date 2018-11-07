import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput } from 'react-native';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', 
            password: ''
        }
    }
    submit() {
        if(this.state.username==''){
            return null
        }
        else if(this.state.password==''){
            return null
        }
        else {
        return this.props.navigation.navigate('Screen3')
        }
    }
    render(){
        return (
            <ImageBackground
                source={require('./assets/BgHome.png')}
                style={{ width: 360, height: 620 }}
            >
            <View style={{ justifyContent: 'center', alignSelf: 'center', backgroundColor: 'white', height: '55%', width: '85%', borderRadius: 5, top: '23%'}}>
                <Text style={{ fontSize: 25, alignSelf: 'center', bottom: 20 }}>Login</Text>
                <Image
                    source={require('./assets/userLogin.png')}
                    style={{ height: 20, width: 20, top: '10%', left: '11%' }}
                />
                
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({username: text})}
                    placeholder="Username"
                    placeholderTextColor='#cdcdcd'
                />
                <View style={ styles.line } />
                <Image 
                    source={require('./assets/key.png')}
                    style={{ height: 20, width: 19, top: '10%', left: '11%' }}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({password: text})}
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor='#cdcdcd'
                />
                <View style={styles.line}/>
                <TouchableOpacity
                    onPress={() => this.submit()}
                    style={{ width: '85%', height: '15%', backgroundColor: '#2db784', borderRadius: 10, alignSelf: 'center', top: '8%', elevation: 3}}
                >
                <Text style={{ color: 'white', textAlign: 'center', top: 10, fontSize: 18 }}>Login</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        bottom: 5,
        margin: 5,
        left: 55,
    },
    line: {
        bottom: 13,
        width: 250,
        justifyContent: 'center',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#dbdbdb',
    }
});