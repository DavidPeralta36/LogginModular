import React from 'react'
import { Image, StyleSheet, Text, View,TextInput,TouchableOpacity,Alert  } from 'react-native';
import * as Sharing from 'expo-sharing';
import * as ImageManipulator from "expo-image-manipulator";
import PickScreen from './PickScreen';


const ShareScreen = ({selectedImage}) => {
    console.log(selectedImage)

    let openShareDialogAsync = async () => {
        if (Platform.OS === 'web') {
          alert(`Uh oh, sharing isn't available on your platform`);
          return;
        }
        const imageTmp = await ImageManipulator.manipulateAsync(selectedImage.localUri);
        await Sharing.shareAsync(imageTmp.uri);
      };

    /*let regresae = () => {
        <PickScreen salir={selectedImage}/>
    }  */
  return (
    <View style={styles.container}>
        <Text style={styles.loginText2}>Imagen seleccionada</Text>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.image}
        />
        <TouchableOpacity style={styles.loginBtn2} onPress={openShareDialogAsync}>
          <Text style={styles.loginText}>Compartir.</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.loginBtn} >
          <Text style={styles.loginText}>Regresar.</Text>
        </TouchableOpacity> 
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
    marginBottom: 30,
    width:300,
    height:300,
    resizeMode: "contain"
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
    color:'white',
    fontSize:20,
  },
  loginText2:{
    marginBottom: 30,
    color:'white',
    fontSize:20,
  },
  loginBtn2 : {
    width: 210,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#49DC99",
  },
  thumbnail: {
    width: "60%",
    height: "60%",
    resizeMode: "contain"}
});

export default ShareScreen