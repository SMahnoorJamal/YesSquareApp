import { Image, View, Text, ScrollView } from 'react-native'
import React, { Component } from "react";
import { ManInCoat1 } from '../../Images';
import Button from '../Button';
import Line from '../Line';
import { styles } from './styles';
import { connect } from 'react-redux';

 class CartBox extends Component {
    constructor(props) {
        super(props)
this.state ={
data: null
}
    }

componentDidMount =() => {
    this.setState({data: this.props.places})
}
    render() {
        console.log("hgh", this.props.places)
        return (

            <ScrollView>

                <View style={{ flexDirection: 'row', marginTop: '3%' }}>

             
                    <View style={{ justifyContent: 'center', marginTop: '-17%' }}>
                            <View style={{ padding: 20}}>

                
                            {this.state.data ? this.state.data.map(item => {
                             return(
                                    // <View></View>   
                    // <Image style={styles.imageStyle} source={ManInCoat1}>
                    // </Image>
                          <Text
                             style={{fontSize: 19,marginLeft: -15,color: 'black'}}>
                                {item}</Text> 
                               )}): null}
                            </View>
                      </View>
                    <View style={styles.container}>

                        <Button style={{
                            padding: 17,
                            backgroundColor: 'grey',
                            borderRadius: 10,
                            padding: 17,
                            // width: 20

                        }}
                            textStyle={styles.textStyle}
                            text='L'></Button>

                        <Button style={{
                            marginLeft: 52,
                            padding: 17,
                            borderRadius: 10,
                            backgroundColor: 'grey' 
                        }}
                            textStyle={styles.textStyle}
                            text='1'></Button>


                    </View>
         
                    {/* <View style={{width: '100%', marginTop: 9, backgroundColor: 'grey', height: 1}}></View>   
    */}
                </View> 
            
               
            </ScrollView>   )
    }
}

const mapStateToProps = (state) => {
    console.log("hggh", state.places)
    return {
      places: state.places
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      add: (name) => {
        dispatch(addPlace(name))
      }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(CartBox)