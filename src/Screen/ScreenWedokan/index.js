import React, {Component} from 'react';
import {View} from 'react-native';

import TerbangButton from '../../components/TerbangButton';

class ScreenWedokan extends Component {
    render() {
        return (
            <View>
                <TerbangButton text="DUNG" source="wedok_dung.wav" />
                <TerbangButton text="TEK" source="wedok_tek.wav" />
            </View>
        );
    }
}

export default ScreenWedokan;
