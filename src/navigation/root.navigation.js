import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import MainRouter from './tab.navigation'

const RootStackNavigator = createStackNavigator(
    {
        MainRouter: {
            screen: MainRouter,
            navigationOptions: { header: null }
        },
    },
    { 
        initialRouteName: 'MainRouter',
        navigationOptions: {
            swipeEnabled: false,
            scrollEnabled: false,
            gesturesEnabled: false,
        }
        
    }
);
export default createAppContainer(RootStackNavigator);


