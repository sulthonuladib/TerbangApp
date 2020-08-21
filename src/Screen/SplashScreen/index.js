import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('ScreenLanangan');
        }, 5000);
    });

    return (
        <View style={styles.splashbackground}>
            <Text style={styles.splashText.textMiddle}>TerbangApp</Text>

            <Text style={styles.splashText.textBottom}>
                Build with love by Sulthonul Adib
            </Text>
        </View>
    );
};

const styles = {
    splashbackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'teal',
    },
    splashText: {
        textTop: {
            fontSize: 14,
            color: 'white',
            fontFamily: 'Tw Cen MT',
        },
        textMiddle: {
            fontSize: 56,
            color: 'white',
            fontFamily: 'Segoe UI Bold',
        },
        textBottom: {
            fontSize: 18,
            color: 'white',
        },
    },
};

export default SplashScreen;
