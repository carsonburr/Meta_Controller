import React from 'react';
import HomeScreen from './screens/HomeScreen';
import WebViewScreen from './screens/WebViewScreen';
import { Router, Modal, Scene } from 'react-native-router-flux';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Modal>
          <Scene key='root'>
            <Scene key='home'
              component={HomeScreen}
              hideNavBar={true}
              initial />
            <Scene key='webview'
              component={WebViewScreen}
              hideNavBar={true} />
          </Scene>
        </Modal>
      </Router>
    );
  }
}