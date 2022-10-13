import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LogginScreen from './components/LogginScreen';
import { useEffect, useState } from "react";
import PickScreen from './components/ShareApp/PickScreen';
import ShareScreen from './components/ShareApp/ShareScreen';

export default function App() {
  /*const emailSend = () => {
    if(email.length === 0 || password.length === 0){
      alert("Agregue las credenciales validas")
    }else{
      if(email != correo || password != contraseña){
        //alert("Correo o contraseña incorrecta || Intentelo de nuevo")
        alertaPW()
      }
      else{
        setSelectedImage2(true)
      }
    }
    
    console.log(email)
    setEmail("")
    console.log(password)
    setPassword("")
  }
*/


return (
    <View style={styles.container}>
      <LogginScreen/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#581845",
    alignItems: "center",
    justifyContent: "center",
  },
});
