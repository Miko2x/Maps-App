import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center', 
        flex: 1,
    },
    bubble: {
        marginHorizontal: 8,
        backgroundColor: 'white',
        borderRadius: 5,
        height: 170,
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
        right: 15,
        bottom: '20%'
    },
    desc: {
        left: 15,
        bottom: '13%'
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
        bottom: '7%',
        right: '10%'
    },
    textDirect: { 
        fontSize: 15,
        textAlign: 'right', 
        color: '#2db784' 
    },
    nullIconView: {
        position: 'absolute',
        top: '78%',
        left: '57%'
    },
    nullIcon: {
        height: 15,
        width: 15
    },
});

export {styles};