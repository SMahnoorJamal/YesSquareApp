import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,

} from 'react-native';
import Input from '../Input';
import Button from '../Button';
import { CustomText } from '../CustomText';

export class BorderComp extends Component {
  render() {
    return (

      <View style={styles.container}>

        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={styles.Text}
        >
          {"Log In"}
        </Text>

        <View style={{ padding: '8%' }}>
          <Input
            placeholder="Username"
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 8,
              borderWidth: 2,

              borderColor: '#C4C4C4',
              height: 56,
              backgroundColor: 'white',
              width: '100%',
              marginTop: 10
            }} />

          <Input
            placeholder="Password"
            icon="true"
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 8,
              borderWidth: 2,
              borderColor: '#C4C4C4',
              height: 56,
              backgroundColor: 'white',
              width: '100%',
              marginTop: 10
            }}
          />

          <View style={{ marginTop: '18%' }}>
            <Button />
          </View>


          <View style={{ marginTop: '20%', alignItems: 'center' }}>

                 <CustomText
                touchable="true"
                text="Don't have an account?" />

              <CustomText
                touchable="true"
                text="Register" />
          </View>

        </View>
      </View>

    );
  }
}


const styles = StyleSheet.create({

  container:
  {
    marginTop: '10%',
    borderRadius: 50,
    borderColor: '#c0c0c0',
    borderWidth: 2,
    height: '100%',
    width: '100%',
    marginBottom: '100%',
    backgroundColor: 'white'
  },
  Text:
  {
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: '7%',
    marginLeft: '9%',
    color: '#989494'
  }
})