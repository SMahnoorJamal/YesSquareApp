
import React from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';
import { BoxL } from '../../components/BoxL';
import { BorderComp } from '../../components/BorderComp';

function LoginScreen() {
  return (
          <ScrollView  style={{backgroundColor: 'white'}}>
             <BoxL></BoxL>
             <BorderComp/>
   
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  button1: {
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 12,
    height: 51,
    width: '80%',
    justifyContent: 'center',
    left: '10%'
  },

});

export default LoginScreen;
