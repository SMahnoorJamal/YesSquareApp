import { Image, View, Text } from 'react-native'
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

            <View>

                <View style={{ flexDirection: 'row', marginTop: '3%' }}>

                    
                    <Image style={styles.imageStyle} source={ManInCoat1}>
                    </Image>
                    <View style={{ justifyContent: 'center', marginTop: '-12%' }}>
                            <View style={{ backgroundColor: 'red', padding: 20}}>

                
                            {this.state.data ? this.state.data.map(item => {
                             return(
                          <Text
                             style={{fontSize: 19,color: 'green'}}>
                                {item}</Text> 
                               )}): null}
                            </View>
                      </View>
                    <View style={styles.container}>

                        <Button style={{
                            padding: 17,
                            backgroundColor: 'grey',
                            borderRadius: 10
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
                            text='XL'></Button>
                    </View>
                </View> 
                <Line></Line>
                             
            </View>   )
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