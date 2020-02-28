import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
  },
});

export default class LoginScreen extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>Hello</Text>
      </View>
    );
  }
}
