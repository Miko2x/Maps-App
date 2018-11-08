import {StyleSheet} from 'react-native';

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

export {styles};