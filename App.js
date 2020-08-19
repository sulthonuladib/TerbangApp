import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';

import Sound from 'react-native-sound';

const playDung = () => {
  const audio = new Sound('wedok_dung.wav', Sound.MAIN_BUNDLE, (err) => {
    if (err) {
      return;
    } else {
      audio.play(() => audio.release());
    }
  });
};

const playTek = () => {
  const audio = new Sound('wedok_tek.wav', Sound.MAIN_BUNDLE, (err) => {
    if (err) {
      return;
    } else {
      audio.play(() => audio.release());
    }
  });
};

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dungContainer}>
        <View>
          <TouchableOpacity
            style={styles.dungTouchableOpacity}
            onPress={() => playDung()}
            activeOpacity={1}>
            <Text>D U N G</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tekContainer}>
        <TouchableOpacity
          style={styles.tekTouchableOpacity}
          onPress={() => playTek()}
          activeOpacity={1}>
          <Text>T E K</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  terbangItems: {
    flex: 1,
  },
  dungContainer: {
    backgroundColor: 'brown',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tekContainer: {
    backgroundColor: 'brown',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dungTouchableOpacity: {
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    backgroundColor: '#d3c09a',
    borderRadius: Dimensions.get('window').width / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tekTouchableOpacity: {
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    backgroundColor: '#d3c09a',
    borderRadius: Dimensions.get('window').width / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
