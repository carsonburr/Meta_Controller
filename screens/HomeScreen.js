import React from 'react';
import { Button } from 'react-native-elements';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.screenLayout}>
        <StatusBar hidden={true} />
        <Button
          icon={{
            name: 'tap-and-play',
            color: 'white'}}
          title='CONNECT'
          buttonStyle={styles.connectButton}
          fontSize={20}
          raised
          large
          onPress={Actions.webview} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenLayout: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 200,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  connectButton: {
    backgroundColor: '#0080C0'
  }
});