import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default class MainScreen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <View>
        <Text>Main</Text>
        <Button title="Challenge" onPress={() => this.props.navigation.navigate('ChallengeListScreen')} />
      </View>
    )
  }
}
