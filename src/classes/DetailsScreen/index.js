import Carousel from 'react-native-snap-carousel';
import React, { Component } from 'react';
import { Dimensions, View, Text, Image, StyleSheet } from 'react-native';
import { SLIDER_DATA } from './SLIDER_DATA';
import { data } from '../Details1/data';
import { DetailsComp } from '../../components/DetailsComp';
import { ScrollView } from 'native-base';
const SLIDER_HEIGHT = Dimensions.get('window').height;

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)


export default class Details1 extends Component {

  
  _renderItem = (data) => {

          return(
            <View        
            style={{ 
              // padding: '30%',
            backgroundColor: 'red',
            marginTop: '10%',
            alignItems: 'center',  
            height: '60%',
            flexDirection: 'row',  
            width: '100%',
            justifyContent: 'center'}}
            // key={element.key}
            >
              {/* <Image source={element.imgUrl} 
              styles={{resizeMode: 'contain', backgroundColor: 'red',
               height: '50%', weight: '30
               %'}}></Image> */}
            {/* <Text>{element.key}</Text> */}
            <Text>{data.body}jkhjk</Text>

            </View>
          )
   
      // </View>
  }

   CarouselCardItem = ({ item, index }) => {
    console.log('uuhu', item)
    return (
      // <View style={styles.container} key={index}>
        <Image
          source={item.imgUrl}
          style={styles.image}
        />

      //   {/* <Text style={{backgroundColor: 'red'}}>{item.body}</Text>
      // </View> */}
    )
  }
  render() {
    console.log('kdc',SLIDER_DATA)
    // const isCarousel = React.useRef(null)
    return ( 
      <View>
{/* <Carousel
        // layout="default"
        // layoutCardOffset={9}
        // ref={isCarousel}
        data={data}
        renderItem={this.CarouselCardItem}
         sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        // inactiveSlideShift={0}
        // useScrollView={true}
      /> */}

      <DetailsComp/> 
       </View>


    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    borderRadius: 8,
    // width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    marginLeft: -80,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    height: '90%',
    width: '120%',
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    // elevation: 7,
  },
  image: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain'
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})
