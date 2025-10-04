import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { TextInput, Button, IconButton } from "react-native-paper";
import { initDB, hayDatosLocales} from "@/components/db";




export default function LoginScreen() {

  // Animaciones de la imagen
  const fadeAnimImg = useRef(new Animated.Value(0)).current;
  const scaleAnimImg = useRef(new Animated.Value(0.8)).current;
  const translateYImg = useRef(new Animated.Value(100)).current;

  // Animaciones de los inputs
  const fadeAnimInputs = useRef(new Animated.Value(0)).current;
  const translateYInputs = useRef(new Animated.Value(200)).current;

  useEffect(() => {
    // Primero la animación de la imagen
    Animated.parallel([
      Animated.timing(fadeAnimImg, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnimImg, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
      Animated.timing(translateYImg, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Cuando termina la imagen, arrancan los inputs
      Animated.parallel([
        Animated.timing(fadeAnimInputs, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(translateYInputs, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    });
     
    async function ejecutar() {
      await initDB();
      await hayDatosLocales();
    }

    ejecutar();
  }, []);

  return (
    <View style={styles.container}>
      {/* Imagen */}
      <Animated.Image
        source={require("../../assets/images/company.jpg")}
        style={[
          styles.image,
          {
            opacity: fadeAnimImg,
            transform: [
              { scale: scaleAnimImg },
              { translateY: translateYImg },
            ],
          },
        ]}
      />

      {/* Inputs */}
      <Animated.View
        style={{
          width: "80%",
          height:"40%",
          marginTop: 30,
          opacity: fadeAnimInputs,
          display:"flex",
          justifyContent:'center',
          transform: [{ translateY: translateYInputs }],
        }}
      >
        <TextInput
          label="Usuario"
          mode="outlined"
          style={{ marginBottom: 10,backgroundColor:"#eef0fdff" }}
          right={<TextInput.Icon icon='account' color="#1236b9ff"></TextInput.Icon>}
           selectionColor="#1236b9ff"
          cursorColor="#1236b9ff"
          underlineColor="blue"
          activeUnderlineColor="yellow"
          outlineColor="#1236b9ff"
          activeOutlineColor="#1236b9ff"
        />
        <TextInput
          label="Contraseña"
          mode="outlined"
          secureTextEntry
          style={{ marginBottom: 20, backgroundColor:"#eef0fdff" }}
          right={ <TextInput.Icon icon='eye' color="#1236b9ff"></TextInput.Icon>}
         
          selectionColor="#1236b9ff"
          cursorColor="#1236b9ff"
          underlineColor="#1236b9ff"
          activeUnderlineColor="yellow"
          outlineColor="#1236b9ff"
          activeOutlineColor="#1236b9ff"
        />
        <Button mode="outlined" textColor="#1236b9ff" onPress={() => console.log("Login")} theme={{colors:{outline:"#1236b9ff"}}}>
          Iniciar Sesión
        </Button>
      </Animated.View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eef0fdff",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  
});