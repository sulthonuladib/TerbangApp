import React, {Component} from 'react';
import {
    TouchableOpacity,
    View,
    Dimensions,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';
import Sound from 'react-native-sound';

class TerbangButton extends Component {
    constructor() {
        super();
        this.onTerbangPress = this.onTerbangPress.bind(this);
    }

    onTerbangPress() {
        const audio = new Sound(this.props.source, Sound.MAIN_BUNDLE, (err) => {
            if (err) {
                return;
            } else {
                audio.play(() => audio.release());
            }
        });
    }

    render() {
        return (
            <View style={styles.terbangContainer}>
                <TouchableWithoutFeedback
                    activeOpacity={1}
                    onPress={this.onTerbangPress}>
                    <View style={styles.terbangButton}>
                        <Text>{this.props.text}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = {
    terbangContainer: {
        backgroundColor: 'brown',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    terbangButton: {
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2,
        backgroundColor: '#d3c09a',
        borderRadius: Dimensions.get('window').width / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export default TerbangButton;
