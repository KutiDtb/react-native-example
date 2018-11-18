import React, { PureComponent } from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux'

class HelperContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Show QRCode content here</Text>
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


export default connect(mapStateToProps, mapDispatchToProps)(HelperContainer)