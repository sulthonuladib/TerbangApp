import React, {Component} from 'react';
import {View} from 'react-native';

import TerbangButton from './components/TerbangButton';

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TerbangButton text="DUNG" source="wedong_dung.wav" />
                <TerbangButton text="TEK" source="wedok_tek.wav" />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
};

export default App;
