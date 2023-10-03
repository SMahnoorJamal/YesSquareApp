import React, {Component} from "react";

import { Image } from "react-native";
// import {images} from '../../images/spash.jpg';

export class BoxL extends Component {

    render() {
    return (
        // <View style={styles.container}>
           <Image
           style={{height: '26%',
           marginTop: 0, width: '25%',
           alignSelf: 'center', resizeMode:'contain'}}
           source ={require('../../../src/images/Spash.png')}>
           </Image>
        //  </View>
    )
    
}

}