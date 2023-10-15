import React from "react";

import { Image, View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { styles } from "./styles";

const Input = (props) => {

    console.log("propsInput", props)
    return (

        <View style={props.style ? props.style : styles.container}>

            <TextInput
                {...props}
                secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
                multiline={props.multiline ? props.multiline : false}
                style={props.inputContainer ? props.inputContainer : styles.input}
                placeholder={props.placeholder ? props.placeholder : "Email"} >
            </TextInput>

            {props.iconText ?

                <TouchableOpacity style={{ width: '15%', backgroundColor: ' red' }}>
                    <Text style={styles.textStyle}>{props.iconText}</Text>
                </TouchableOpacity> :
                props.icon ?
                    <TouchableOpacity style={{ width: '15%', backgroundColor: ' red' }}>
                        {/* <Image source={require('../ /Photo3.png')} style={styles.textStyle} /> */}
                    </TouchableOpacity>

                    :
                    <TouchableOpacity style={{ width: '15%' }}>
                    </TouchableOpacity>
            }

        </View>

    )
}


export default Input;