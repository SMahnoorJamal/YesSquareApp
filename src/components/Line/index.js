import React, { Component } from 'react';
import { View } from 'react-native';
export default class Line extends Component {

    render() {
        return(
            <View style={{
                height: '1%',
                marginTop: '3.5%',
                width: '100%',
                backgroundColor: 'grey'
            }}></View>
        )
    }

}