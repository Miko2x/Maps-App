import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bubble: {
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'white', 
        height: '60%', 
        width: '85%', 
        borderRadius: 5, 
    },
    bubbleText: { 
        textAlign: 'center',
        bottom: '15%',
        fontSize: 25, 
    },
    BgHome: { 
        justifyContent: 'center',
        width: 360, 
        height: 620
    },
    userLogin: { 
        height: 20, 
        width: 20,  
        left: '11%' 
    },
    key: { 
        height: 20, 
        width: 19,
        left: '11%' 
    },
    buttonLogin: { 
        position: 'absolute',
        backgroundColor: '#2db784', 
        borderRadius: 10, 
        justifyContent: 'center', 
        alignSelf: 'center',
        top: '77%',
        height: '16%', 
        width: '85%', 
        elevation: 3
    },
    textLogin: { 
        position: 'absolute',
        alignSelf: 'center',
        color: 'white', 
        textAlign: 'center',
        fontSize: 18
    },
    input: {
        bottom: '11%',
        margin: 5,
        left: 55,
    },
    line: {
        bottom: '13%',
        width: '80%',
        justifyContent: 'center',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#dbdbdb',
    },
});

export {styles};