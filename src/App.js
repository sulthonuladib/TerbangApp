import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Router from './Router';

class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Router />
            </NavigationContainer>
        );
    }
}

export default App;
