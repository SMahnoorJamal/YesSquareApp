import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import Input from "../../components/Input";
import CheckBox from "@react-native-community/checkbox";
import CustomCheckBox from "../../components/CustomCheckBox";
import Button from "../../components/Button";
import Line from "../../components/Line";
import Header from "../../components/Header";

function ShippingScreen() {

    return (
        <ScrollView style={{
            flex: 1,
        }}>
            <View style={{

                width: '79%', marginLeft: 50, justifyContent: 'center',
                // backgroundColor: 'lightgreen'
            }}>
                <Header title="Shipping" backButton={true}></Header>
                <Text style={{marginTop: '10%'}}>Shipping Address</Text>

                <View style={{
                    flexDirection: 'row',
                    // marginTop: '12%',
                    // marginLeft: 10
                }}>
                    <Input
                        inputContainer={{ backgroundColor: '#F4F4F4' }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            borderRadius: 8,
                            borderWidth: 2,
                            borderColor: '#C4C4C4',
                            height: 56,
                            backgroundColor: '#F4F4F4',
                            width: '45%',
                            marginTop: 10
                        }}
                        placeholder="First Name"></Input>
                    <Input
                        inputContainer={{ backgroundColor: '#F4F4F4' }}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 8,
                            borderWidth: 2,
                            borderColor: '#C4C4C4',
                            height: 56,
                            backgroundColor: '#F4F4F4',
                            width: '45%',
                            marginTop: 10,
                            marginLeft: 25
                        }} />

                </View>


                <Input
                    inputContainer={{ backgroundColor: '#F4F4F4' }}
                    style={{
                        justifyContent: 'center',
                        borderRadius: 8,
                        borderWidth: 2,
                        borderColor: '#C4C4C4',
                        height: 56,
                        backgroundColor: '#F4F4F4',
                        width: '97.5%',
                        marginTop: 17,
                        // marginLeft: 1
                    }} />




<View style={{
                    flexDirection: 'row',
                     marginTop: '3%',
                    // marginLeft: 10
                }}>
                    <Input
                        inputContainer={{ backgroundColor: '#F4F4F4' }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            borderRadius: 8,
                            borderWidth: 2,
                            borderColor: '#C4C4C4',
                            height: 56,
                            backgroundColor: '#F4F4F4',
                            width: '45%',
                            marginTop: 10
                        }}
                        placeholder="First Name"></Input>
                    <Input
                        inputContainer={{ backgroundColor: '#F4F4F4' }}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 8,
                            borderWidth: 2,
                            borderColor: '#C4C4C4',
                            height: 56,
                            backgroundColor: '#F4F4F4',
                            width: '45%',
                            marginTop: 10,
                            marginLeft: 25
                        }} />

                </View>

                <Line style={{ backgroundColor: 'grey', height: 1, width: '100%', marginTop: 45 }} />


                <View>

                    <Text style={{marginTop: 30}}>Shipping Options</Text>

<View style={{marginLeft: '10%', marginTop: 20}}>
                    <CustomCheckBox title="Standard 5 to 7 days" />
                    <CustomCheckBox  title="Express 5 to 7 days" />
                    </View>
                    <Button    style={{     
        alignItems: "center",
        backgroundColor: "#989494",
        marginTop: 26,
        borderRadius: 10,
        height: 56,
        width: '100%',
        justifyContent: 'center',
    }} text="Check Out"/>
                </View>
            </View>
        </ScrollView>
    )

}

export default ShippingScreen;