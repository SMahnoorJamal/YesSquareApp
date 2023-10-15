
import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text
} from 'react-native';
import { BoxL } from '../../components/BoxL';
import { BorderComp } from '../../components/BorderComp';
import CartBox from '../../components/CartBox';
import { ManInCoat1 } from '../../Images';
import Button from '../../components/Button';
const data1 =
    [
        {
            image: ManInCoat1,
            price: 1
        },
        {
            image: ManInCoat1,
            price: 2
        },
        {
            image: ManInCoat1,
            price: 3
        }
    ]
function Cart() {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>

            {data1.map(item => {
                return (<CartBox data={data1}></CartBox>
                )
            })}
            <View style={{ marginTop: 20,marginLeft: 38, width: '100%' }}>
              <View style={{borderRadius: 15 , padding: 30, width: '85%', backgroundColor: '#F4F4F4'}}>
                <Text>Total Price</Text>
                <Text>68,148 NGN</Text>
              </View>

                <View style={{ marginTop: 15, marginBottom: 18 }}>
                    <Button text="Go to Shipping" />
                </View>

            </View>

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

export default Cart;
