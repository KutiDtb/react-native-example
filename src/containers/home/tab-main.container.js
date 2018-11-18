import React, { PureComponent } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    BackHandler
} from 'react-native';
import { connect } from 'react-redux'
import { Images } from '../../theme'
import {scale, verticalScale} from '../../theme/scaling'
import Localization from '../../config/languages/i18n'

const Styles = StyleSheet.create({
    container: {
        flex: 0.05,
        justifyContent: 'center',
    },
    tabBtn: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: scale(10),
        width: verticalScale(75),
    },
    tabBtnIcon: { padding: scale(1) },
});

class MainTabContainter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        BackHandler.exitApp();
    }

    baseRef = (obj) => this.base = obj
    onReload = () => { }
    onSwitchToComunity = () => this.props.navigation.navigate('Community')
    onSwitchToSmartPay = () => this.props.navigation.navigate('SmartPay')
    onSwitchToQRCode = () => this.props.navigation.navigate('TabQRCode')
    onSwitchToMerchant = () => this.props.navigation.navigate('Merchant')
    onSwitchToMe = () => this.props.navigation.navigate('Me')

    render() {
        return (
            <View style={{
                justifyContent: 'center',
                backgroundColor: 'white',
                flexDirection: 'column',
                height: verticalScale(69)
            }}>
                <View style={{
                    marginTop: verticalScale(12),
                    paddingBottom: verticalScale(1),
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    height: verticalScale(60)
                }}>
                    <TouchableOpacity onPress={this.onSwitchToSmartPay}
                        style={Styles.tabBtn}>
                        <View style={Styles.tabBtnIcon}>
                            <Image source={this.props.index === 0 ? Images.wallet.color : Images.wallet.grey} />
                        </View>
                        <Text> {Localization('tuvanvien')}</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={Styles.tabBtn} onPress={this.onSwitchToComunity}>
                        <View style={Styles.tabBtnIcon}>
                            <Image source={this.props.index === 1 ? Images.wallet.color : Images.wallet.grey} />
                        </View>
                        <Text> {Localization('sangiaodich')}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.tabBtn} onPress={this.onSwitchToComunity}>
                        <View style={Styles.tabBtnIcon}>
                            <Image source={this.props.index === 2 ? Images.wallet.color : Images.wallet.grey} />
                        </View>
                        <Text> {Localization('trangchu')}</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={Styles.tabBtn} onPress={this.onSwitchToComunity}>
                        <View style={Styles.tabBtnIcon}>
                            <Image source={this.props.index === 3 ? Images.wallet.color : Images.wallet.grey} />
                        </View>
                        <Text> {Localization('taikhoan')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(MainTabContainter)
