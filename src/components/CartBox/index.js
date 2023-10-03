import  {Image, View, Text} from 'react-native'
import  React, {Component} from "react";
import { ManInCoat1 } from '../../Images';

export default class CartBox extends Component {

    render() {
        return(

            <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image style={{
                padding: '20%', 
                width: '30%',height: '20%',resizeMode: 'contain'}} source={ManInCoat1}></Image>
                <View style={{justifyContent: 'center'}}>
                <Text>Yorub Boys</Text>
                <Text>34.098 NGN</Text>
                </View>
                
            </View>

      )
    }
}