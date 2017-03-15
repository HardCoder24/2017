/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Content, Thumbnail, } from 'native-base';

export default class newproject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Fuck You !
        </Text>
        <Text style={styles.instructions2}>
          With Love (:
        </Text>
        <Text style={styles.instructions}>
         This is What I learned !
        </Text>
        <Thumbnail style={{width: 160, height: 160, borderRadius: 81}} source={require('./mid.jpg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
    color: 'red'
  },
  instructions: {
    fontSize:30,
    textAlign: 'center',
    color: 'blue',
    marginBottom: 20,
  },
  instructions2: {
    fontSize:40,
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },



});

AppRegistry.registerComponent('newproject', () => newproject);
