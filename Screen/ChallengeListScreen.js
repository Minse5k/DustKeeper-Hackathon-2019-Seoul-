import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default class ChallengeListScreen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <View>
        <Text>ChallengeList</Text>
        <Button title="Main" onPress={() => this.props.navigation.navigate('MainScreen)} />
      </View>
    )
  }
}
