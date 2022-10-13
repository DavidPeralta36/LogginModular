import React from 'react';
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Platform,TextInput,TouchableOpacity,Alert  } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ShareScreen from './ShareScreen';
//import * as Sharing from 'expo-sharing';
//import * as ImageManipulator from "expo-image-manipulator";

const PickScreen = ({salir}) => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  //const [selectedImage2, setSelectedImage2] = React.useState(null);
            
  let openImagePickerAsync = async () => {    
    //setSelectedImage2(false)
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    if (pickerResult.cancelled === true) {
        console.log("Cancelado")
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
    //console.log(selectedImage)
    }
    if(selectedImage !== null)
    {
        console.log("aceptado2")
        return(
        <ShareScreen selectedImage={selectedImage}/>
        )
    }

  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require("../../assets/imagenes.png")} />
        <Text style={styles.instructions}>Comparte una foto con tus amigos</Text>
      <TouchableOpacity style={styles.loginBtn} onPress={openImagePickerAsync}>
        <Text>Elegir una imagen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn3} >
          <Text style={styles.loginText}>Cerrar sesion</Text>
        </TouchableOpacity> 
      <StatusBar style="auto" />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#581845",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      marginBottom: 40,
      width:200,
      height:200
    },
    loginBtn: {
      width: 210,
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FFC300",
    },
    loginText:{
        color:'white'
    },
    loginBtn3 : {
      width: 210,
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#8F0000",
      
    },
    instructions:{
      fontSize:20,
      color:'white',
      marginBottom: 30
    },
    thumbnail: {
        width: "60%",
        height: "60%",
        resizeMode: "contain"}
  });
export default PickScreen