import React, {Component}
 from "react";
 import { ScrollView, Image, View } from "react-native";
// import { SliderBox } from "react-native-image-slider-box";
// import { s } from "react-native-size-matters";
import {ManInCoat1} from '../../src/images/index';

export default class Carousal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [ManInCoat1,
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", // Network image
        // require('./assets/images/girl.jpg'),          // Local image
      ]
    };
  }

  render() {
console.log('JHJHJKHJH')
    return(
  
      <View style={{ backgroundColor: 'yellow', flex: 1}}></View>
    )
    // <SliderBox images={this.state.images} />
  }
  // other component code ...
}