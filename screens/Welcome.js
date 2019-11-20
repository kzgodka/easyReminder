import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Welcome extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
