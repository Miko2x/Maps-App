import React, {Component} from 'react';
import { View, Image } from 'react-native';
import MapView from 'react-native-maps';
import CalloutMap from '../components_B/Callout.Button';
import CalloutDesc from '../components_B/Callout.Desc';
import pin from '../assets/pin.png';
import {styles} from '../styles/Styles.Map';

class Map extends Component{
    render () {
        return(
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion = {{
                        latitude: 40.7112432,
                        longitude: -74.0071598,
                        latitudeDelta: 0.0135,
                        longitudeDelta: 0.0001,
                    }} 
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: 40.7112432,
                            longitude: -74.0071598,
                        }}
                    >
                        <View style={styles.radius}>
                            <View style={styles.marker}/>
                        </View>
                    </MapView.Marker>
                    <MapView.Marker
                        coordinate={{
                            latitude: 40.7112304,
                            longitude: -74.0053583,
                        }}
                    >
                        <View>
                            <Image 
                                source={pin}
                                style={styles.pinIcon}/>
                        </View>
                    </MapView.Marker>
                    <MapView.Marker
                        coordinate={{
                            latitude: 40.7163131,
                            longitude: -74.004208,
                        }}
                    >
                        <View>
                            <Image 
                                source={pin}
                                style={styles.pinIcon}/>
                        </View>
                    </MapView.Marker>
                    <MapView.Marker
                        coordinate={{
                            latitude: 40.7148131,
                            longitude: -74.005823,
                        }}
                    >
                        <View>
                            <Image 
                                source={pin}
                                style={styles.pinIcon}/>
                        </View>
                    </MapView.Marker>
                    <MapView.Marker
                        coordinate={{
                            latitude: 40.7162877,
                            longitude: -74.0077296,
                        }}
                    >
                        <View>
                            <Image 
                                source={pin}
                                style={styles.pinIcon}/>
                        </View>
                    </MapView.Marker>
                    <MapView.Marker
                        coordinate={{
                            latitude: 40.7139496,
                            longitude: -74.0091625,
                        }}
                    >
                        <View>
                            <Image 
                                source={pin}
                                style={styles.pinIcon}/>
                        </View>
                    </MapView.Marker>
                </MapView>
                <CalloutMap/>
                <CalloutDesc/>
            </View>
        );
    }
}

export default Map;