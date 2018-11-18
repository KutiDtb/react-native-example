import React from 'react'
import { createMaterialTopTabNavigator} from 'react-navigation';
import CounterContainer from '../containers/demo/counter.container'
import MainTabContainer from '../containers/home/tab-main.container'
import HelperContainer from '../containers/home/helper.container'

const MainTab = ({ navigation }) => {
    // console.log('Rerender Maintab')
    const { index } = navigation.state;
    return (
        <MainTabContainer navigation={navigation} index={index} />
    )
}
const MainRouter = createMaterialTopTabNavigator({
    SmartPay: { screen: CounterContainer },
    Community: { screen: HelperContainer },
    TabQRCode: () => null,
    Merchant: () => null,
}, {
        tabBarComponent: MainTab,
        tabBarPosition: 'bottom',
        initialRouteName: 'SmartPay',
        navigationOptions: {
            scrollEnabled: false,
            gesturesEnabled: false,
            swipeEnabled: false,
            animationEnabled: false
        },
    })

export default MainRouter

