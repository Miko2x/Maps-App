import Home from '../Home';
import Login from '../Login';
import Map from '../Map';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({
    Screen1: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    Screen2: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Screen3: {
        screen: Map,
        navigationOptions: {
            header: null
        }
    }
})