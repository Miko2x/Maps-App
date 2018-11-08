import React, {Component} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import CalloutMap from './Callout.Button';
import CalloutDesc from './Callout.Desc';

const pin = require('./assets/pin.png')

class Map extends Component{

    render () {
        return(
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    showsUserLocation={false}
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

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 650,
        width: 360,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
      radius: {
        height: 80,
        width: 80,
        borderRadius: 80 / 2,
        overflow: 'hidden',
        backgroundColor: 'rgba(45, 183, 132, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(45, 183, 132, 0.3)',
        alignItems: 'center',
        justifyContent: 'center',
    },
      marker: {
          height: 20,
          width: 20,
          borderWidth: 3,
          borderColor: 'white',
          borderRadius: 20 / 2,
          overflow: 'hidden',
          backgroundColor: 'rgb(45, 183, 132)',
    },
      pinIcon: { 
          height: 40, 
          width: 40 
    }
});

export default Map;
