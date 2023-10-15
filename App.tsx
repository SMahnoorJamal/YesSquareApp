import * as React from 'react';
import { Text } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './src/store';
import { Provider } from 'react-redux';
import Cart from './src/classes/Cart';
import { ManInCoat1 } from './src/Images';
import { connect } from 'react-redux';
import { addPlace } from './src/actions/place';
import { DetailsComp } from './src/components/DetailsComp';
import Carousal from './src/components/Carousal';
import DetailsScreen from './src/classes/DetailsScreen';
import ShippingScreen from './src/classes/ShippingScreen';

const data1 =
  [
    {
      image: ManInCoat1,
      price:  1
    },
    {
      image: ManInCoat1,
      price: 2
    },
    {
      image: ManInCoat1,
      price: 3
    },
    {
      image: ManInCoat1,
      price: 4
    }
  ]
const App = () => {
  console.log("jhhh")
  return (
    <Provider store={store}>
    <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
    {/* {data1.map(item => {
          return( <CartBox data={data1}></CartBox>
           )
        })} */}
        <ShippingScreen/>
{/* <DetailsScreen/> */}
      {/* <MyTodo/> */}
    </PersistGate>
    </Provider>
  );
}


const mapStateToProps = (state: { places: { places: any; }; }) => {
  console.log("hggh", state.places.places)
  return {
    places: state.places.places
  }
}
const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: any; }) => void) => {
  return {
    add: (name: any) => {
      dispatch(addPlace(name))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)





// // App.js
// import React, { Component } from 'react';
// import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
// import ListItem from './src/components/ListItem';
// import { connect } from 'react-redux';
// import { addPlace } from './src/actions/place';
// class App extends Component {
//   state = {
//     placeName: '',
//     places: []
//   }
//   placeSubmitHandler = () => {
//     if(this.state.placeName.trim() === '') {
//       return;
//     }
//     this.props.add(this.state.placeName);
// }
// placeNameChangeHandler = (value: any) => {
//   this.setState({
//     placeName: value
//   });    
// }
// placesOutput = () => {
//    return (
//     <FlatList style = { styles.listContainer }
//       data = { this.props.places }
//       keyExtractor={(item, index) => index.toString()}
//       renderItem = { info => (
//         <ListItem 
//           placeName={ info.item.value }
//         />
//       )}
//     />
//   )
// }
// render() {
//   console.log('hghgy', this.props.places)
//   return (
//     <View style={ styles.container }>
//       <View style = { styles.inputContainer }>
//         <TextInput
//           placeholder = "Seach Places"
//           style = { styles.placeInput }
//            value = { this.state.placeName }
//           onChangeText = { this.placeNameChangeHandler }
//         ></TextInput>
//         <Button title = 'Add' 
//        //   style = { styles.placeButton }
//           onPress = { this.placeSubmitHandler }
//         />
//         </View>
//         <View style = { styles.listContainer }>
//        {/* { this.placesOutput() }  */}
//         </View>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 30,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%'
//   },
//   placeInput: {
//     width: '70%',
//     backgroundColor: 'yellow'
//   },
//   placeButton: {
//     width: '30%'
//   },
//   listContainer: {
//     width: '100%'
//   }
// // });
// const mapStateToProps = (state: { places: { places: any; }; }) => {
//   console.log("hggh", state.places.places)
//   return {
//     places: state.places.places
//   }
// }
// const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: any; }) => void) => {
//   return {
//     add: (name: any) => {
//       dispatch(addPlace(name))
//     }
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App)


// import { Dimensions, StyleSheet, View, Text, Image, ScrollView } from 'react-native';
// import React, { Component } from 'react';
// import { DetailsComp } from './src/components/DetailsComp';
// import MyCarousel from './src/components/MyCarousel';
// import CartBox from './src/components/CartBox';
// import { ManInCoat1 } from './src/Images';
// import Button from './src/components/Button';
// import {CustomText }from './src/components/CustomText/index'

// const data1 =
//   [
//     {
//       image: ManInCoat1,
//       price:  1
//     },
//     {
//       image: ManInCoat1,
//       price: 2
//     },
//     {
//       image: ManInCoat1,
//       price: 3
//     }
//   ]
// export default class App extends React.Component {

//   render() {
//     return (
//       <ScrollView>
        
// <CustomText text="Cart"></CustomText>

//         {data1.map(item => {
//           return( <CartBox data={data1}></CartBox>
//           )
//         })}

//         <View
//         style= {{alignItems: "center",
//         backgroundColor: "#C4C4C4",
//         borderRadius: 25,
//         height: 56,
//         width: '83%',
//         marginTop: 10,
//         marginLeft: 35,
//         // justifyContent: 'center',
//         flexDirection: 'row',
//       justifyContent: 'space-between'
//         }}>
//           <View style={{justifyContent: 'space-between',
//           marginLeft: '10%',
//            flexDirection: 'row', width: '80%'}}>
//           <Text>Total</Text>
//           <Text>68,148 NGN</Text>
//           </View>
      
//         </View>

// <Button style= {{alignItems: "center",
//         backgroundColor: "#989494",
//         marginTop: 24,
//         marginBottom: 70,
//         borderRadius: 10,
//         height: 56,
//         width: '83%',
//         marginLeft: 35,
//         justifyContent: 'center'
//         }} text="Go To Shopping"></Button>

// {/*  */}
   
//       </ScrollView>

//       //  <Text>jdx</Text>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   item: {
//     // width: '100%',
//     // height: 
//     alignItems: 'center',
//     justifyContent: 'center'
//   },

// })