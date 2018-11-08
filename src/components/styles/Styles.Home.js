import { StyleSheet } from 'react-native';

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
    loginButton: { 
        position: 'absolute', 
        alignSelf: 'center', 
        justifyContent: 'center', 
        marginTop: 540
    },
    loginView: { 
        backgroundColor: 'rgb(210, 210, 210)', 
        height: 55, 
        width: 300, 
        borderRadius: 10, 
    },
    loginText: { 
        fontSize: 15,
        textAlign: 'center', 
        fontFamily: 'HelveticaNeueLight',
        marginTop: 20,
    },
});

export {styles};