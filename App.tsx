
import { Dimensions, StyleSheet, View, Text, Image } from 'react-native';
import React, { Component } from 'react';
import { DetailsComp } from './src/components/DetailsComp';
import MyCarousel from './src/components/MyCarousel';
import CartBox from './src/components/CartBox';
export default class App extends React.Component {

  render() {
    return (
      <View>
              {/* <MyCarousel></MyCarousel> */}
  <CartBox></CartBox>
      </View>

//  <Text>jdx</Text>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    // width: '100%',
    // height: 
    alignItems: 'center',
    justifyContent: 'center'
  },

})