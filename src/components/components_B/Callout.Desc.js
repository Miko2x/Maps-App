import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Callout } from 'react-native-maps';
import Null from './assets/null.png';

class CalloutDesc extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Callout>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <TouchableOpacity style={styles.bubble}>
                            <Text style={styles.fontTitle}>Bank of America ATM</Text>
                            <Text style={styles.distance}>0.2 mile</Text>
                            <View style={styles.desc}>
                                <Text style={styles.textDesc}>1 Pace Plaza, New York, NY{"\n"}10038{"\n"}+1 800-622-8731{"\n"}Hours:</Text>
                                <Text style={styles.hours}>24 Hours</Text>
                            </View>
                            <TouchableOpacity style={styles.buttonDirect}>
                                <Text style={styles.textDirect}>Get       {"\n"}Directions</Text>
                            </TouchableOpacity>
                            <View style={styles.nullIconView}>
                                <Image
                                    source={Null}
                                    style={styles.nullIcon}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bubble}>
                            <Text style={styles.fontTitle}>Bank of America</Text>
                            <Text style={styles.distance}>1.2 km</Text>
                            <View style={styles.desc}>
                                <Text style={styles.textDesc}>77 W 55th St, New York, NY{"\n"}10019{"\n"}+1 800-622-87{"\n"}Hours:</Text>
                                <Text style={styles.hours}>08:00 - 21:00</Text>
                            </View>
                            <TouchableOpacity style={styles.buttonDirect}>
                                <Text style={styles.textDirect}>Get      {"\n"}Directions</Text>
                            </TouchableOpacity>
                            <View style={styles.nullIconView}>
                                <Image
                                    source={Null}
                                    style={styles.nullIcon}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bubble}>
                            <Text style={styles.fontTitle}>Santander Bank</Text>
                            <Text style={styles.distance}>0.4 mile</Text>
                            <View style={styles.desc}>
                                <Text style={styles.textDesc}>336 Broadway, New York, NY{"\n"}10019{"\n"}+1 212-217-1200{"\n"}Hours:</Text>
                                <Text style={styles.hours}>08:00 - 17:00</Text>
                            </View>
                            <TouchableOpacity style={styles.buttonDirect}>
                                <Text style={styles.textDirect}>Get      {"\n"}Directions</Text>
                            </TouchableOpacity>
                            <View style={styles.nullIconView}>
                                <Image
                                    source={Null}
                                    style={styles.nullIcon}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bubble}>
                            <Text style={styles.fontTitle}>Capital One ATM</Text>
                            <Text style={styles.distance}>0.2 mile</Text>
                            <View style={styles.desc}>
                                <Text style={styles.textDesc}>277 Broadway, New York, NY{"\n"}10007{"\n"}+1 800-262-5689{"\n"}Hours:</Text>
                                <Text style={styles.hours}>24 Hours</Text>
                            </View>
                            <TouchableOpacity style={styles.buttonDirect}>
                                <Text style={styles.textDirect}>Get      {"\n"}Directions</Text>
                            </TouchableOpacity>
                            <View style={styles.nullIconView}>
                                <Image
                                    source={Null}
                                    style={styles.nullIcon}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bubble}>
                            <Text style={styles.fontTitle}>Citibank ATM</Text>
                            <Text style={styles.distance}>0.3 mile</Text>
                            <View style={styles.desc}>
                                <Text style={styles.textDesc}>140 Church St, New York, NY{"\n"}10007{"\n"}+1 813-604-3290{"\n"}Hours:</Text>
                                <Text style={styles.hours}>24 Hours</Text>
                            </View>
                            <TouchableOpacity style={styles.buttonDirect}>
                                <Text style={styles.textDirect}>Get      {"\n"}Directions</Text>
                            </TouchableOpacity>
                            <View style={styles.nullIconView}>
                                <Image
                                    source={Null}
                                    style={styles.nullIcon}
                                />
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </Callout>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        flex: 1 
    },
    bubble: {
        marginHorizontal: 8,
        marginTop: '7%',
        backgroundColor: 'white',
        borderRadius: 5,
        height: 150,
        width: 300
    },
    fontTitle: {
        fontSize: 15,
        margin: 15,
    },
    distance: {
        color: '#cdcdcd',
        fontSize: 13,
        textAlign: 'right',
        margin: 15,
        bottom: '20%'
    },
    desc: {
        left: 15,
        bottom: '23%'
    },
    textDesc: {
        fontSize: 15,
        color: '#72777e'
    },
    hours: {
        color: '#2db784',
        position: 'absolute',
        bottom: 0,
        left: '20%'
    },
    
    buttonDirect: {
        bottom: '25%',
        right: '10%'
    },
    textDirect: { 
        fontSize: 15,
        textAlign: 'right', 
        color: '#2db784' 
    },
    nullIcon: {
        height: 15,
        width: 15
    },
    nullIconView: {
        position: 'absolute',
        top: '47%',
        left: '57%'
    },
});

export default CalloutDesc;