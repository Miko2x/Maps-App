import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native';
import BgHome from '../assets/BgHome.png';
import userLogin from '../assets/userLogin.png';
import key from '../assets/key.png';
import {styles} from '../styles/Styles.Login';

class Login extends Component {
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
            <View style={styles.container}>
                <ImageBackground
                    source={BgHome}
                    style={styles.BgHome}
                >
                    <View style={styles.bubble}>
                        <Text style={styles.bubbleText}>Login</Text>
                        <Image
                            source={userLogin}
                            style={styles.userLogin}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => this.setState({username: text})}
                            placeholder="Username"
                            placeholderTextColor='#cdcdcd'
                        />
                        <View style={ styles.line } />
                        <Image 
                            source={key}
                            style={styles.key}
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
                            style={styles.buttonLogin}
                        >
                            <Text style={styles.textLogin}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default Login;