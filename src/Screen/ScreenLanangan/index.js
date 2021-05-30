import React from 'react';
import {View} from 'react-native';

import TerbangButton from '../../components/TerbangButton';

/*
class ScreenLanangan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TerbangButton text="DUNG" source="lanang_dung.wav" />
                <TerbangButton text="TEK" source="lanang_tek.wav" />
            </View>
        );
    }
}
*/

const ScreenLanangan = () => {
    return(
        <View style={styles.container}>
            <TerbangButton text="DUNG" audioSource="lanang_dung.wav" />
            <TerbangButton text="TEK" audioSource="lanang_tek.wav" />
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
    },
};

export default ScreenLanangan;source
