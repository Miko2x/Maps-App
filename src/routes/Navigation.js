import Home from '../components/components_A/Home';
import Login from '../components/components_A/Login';
import Map from '../components/components_A/Map';
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
});