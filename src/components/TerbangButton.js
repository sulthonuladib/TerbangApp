import React, {Component} from 'react';
import {
    View,
    Dimensions,
    Text,
    TouchableWithoutFeedback,
    TouchableNativeFeedback,
    TouchableHighlight,
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
                <TouchableHighlight onPress={() => this.onTerbangPress()}>
                    <View style={styles.terbangButton}>
                        <Text>{this.props.text}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

/*
const TerbangButton = ({audioSource, text}) => {
    function handleTap() {
        const sound = new Sound(audioSource, Sound.MAIN_BUNDLE, (err) => {
            if (err) {
                return;
            } else {
                audioSource.play(() => audioSource.release());
            }
        });
    }

    return (
        <View style={styles.terbangContainer}>
            <TouchableWithoutFeedback onPress={handleTap()}>
                <View style={styles.terbangButton}>
                    <Text>{text}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}
*/

const styles = {
    terbangContainer: {
        backgroundColor: 'teal',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    terbangButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2,
        backgroundColor: '#d3c09a',
        borderRadius: Dimensions.get('window').width / 2,
        borderWidth: 30,
        borderColor: 'brown',
    },
};

export default TerbangButton;
