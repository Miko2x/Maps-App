import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { styles } from '../styles/Styles.Home';
import BgHome from '../assets/BgHome.png';
import fingerTouch from '../assets/fingerTouch.png';

class Home extends React.Component {
    moveScreen() {
        this.props.navigation.navigate('Screen2')
    }
    render() {
        return(
                <View style={styles.container}>
                    <ImageBackground
                        source={BgHome} 
                        style={styles.bg}
                    >
                    <Text style={styles.text1}>Hello!</Text>
                    <Text style={styles.text2}>Welcome to Map App.</Text>
                        <TouchableOpacity 
                            style={styles.finger}
                        >
                            <Image
                                source={fingerTouch}
                                style={styles.fingerIcon}
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            onPress={() => this.moveScreen()}
                            style={styles.loginButton}
                        >
                            <View style={styles.loginView}>
                                <Text style={styles.loginText}>Login</Text>
                            </View>
                        </TouchableOpacity>
                        
                    </ImageBackground>
                </View>
        );
    }
}

export default Home;