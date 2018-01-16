import React from 'react';
import { Icon } from 'react-native-elements';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class WebViewScreen extends React.Component {
  render() {
    return (
      <View style={styles.screenLayout}>
        <StatusBar hidden={true} />
        <View style={styles.backButton}>
          <Icon
            name='arrow-back'
            color='white'
            underlayColor='#888'
            size={40}
            onPress={Actions.pop} />
        </View>
      </View>
    );
  }
}
const iconStyleDistance = 5;
const styles = StyleSheet.create({
  screenLayout: {
    flex: 1,
    backgroundColor: 'black'
  },
  backButton: {
    position: 'absolute',
    left: iconStyleDistance,
    top: iconStyleDistance
  }
});