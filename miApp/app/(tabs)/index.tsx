import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View, ScrollView, Alert, } from "react-native";
import { TextInput, Button, IconButton,Text,Snackbar,List,Checkbox  } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { initDB, hayDatosLocales } from "@/components/db";
import { useWindowDimensions } from "react-native";


export default function LoginScreen() {
  useEffect(() => {
    async function ejecutar() {
      await initDB();
      await hayDatosLocales();
    }
    ejecutar();
  }, []);

  const handlePressoption=(dato: string)=>{
      setActividad(dato);
      setExpanded(false);
      //setVisible(!visible);
  }
   const [checked, setChecked] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
const handlePress = () => setExpanded(!expanded);
  const onToggleSnackBar = () => setVisible(!visible);
  const [expanded, setExpanded] = React.useState(false);
  const onDismissSnackBar = () => setVisible(false);
  const { width, height } = useWindowDimensions();
  const [actividad, setActividad] = useState('Seleccione');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.redBox}>
        <View style={{display:'flex', backgroundColor:'', flexDirection:"row" , width:"100%", height:"5%", marginTop:10}}>
         <View style={{ width: "10%", display:'flex', backgroundColor:''  ,  flexDirection:"row", justifyContent:'center', alignItems:'center'}}>
          <IconButton
          icon="arrow-left"
          iconColor="black"
          size={30}
          onPress={() => console.log('Pressed')}
          style={{backgroundColor:""}}
        
        />   
         </View>
         <View style={{ width: "90%", height:"100%", display:'flex',  flexDirection:"row", justifyContent:'center', alignItems:'center'}}>
            <Text variant="titleSmall" style={{marginTop:0, marginRight:20, textAlign:"center"}}>ACTIVIDADES EN LOTE</Text>
         </View>
       
         
          
          </View>
           <View  style={{ width: "100%", height:"10%",   marginTop:20  }}>
            <TextInput style={{backgroundColor :"white", marginTop:15}}
            label="Codigo de lote"
            right={<TextInput.Icon icon="" />}
            mode="outlined"
            placeholder="Ingrese codigo de lote"
            outlineColor="#08e8a1ff"
          
            activeOutlineColor="black"
          />
        </View>
      <View  style={{width:"100%", marginTop:10, height:"30%", backgroundColor:"" }}>
      
      <List.Section title="Lista de actividades" style={{borderRadius:5}}>
       <List.Accordion
      
        title={actividad}
       
        
        expanded={expanded}
        onPress={handlePress}>
          <ScrollView style={{backgroundColor:"white", height:"60%", marginBottom:10}}>
          <List.Item  left={props => <List.Icon {...props} icon="sprout"/>} title="001 - Preparacion de terrenos"  onPress={() =>{handlePressoption("001-Preparacion de terrenos")}}/>
          <List.Item  left={props => <List.Icon {...props} icon="sprout"/>} title="002 - Deshoje"  onPress={() =>{handlePressoption("002-Deshoje")}}/>
          <List.Item  left={props => <List.Icon {...props} icon="sprout"/>} title="001 - Preparacion de terrenos"  onPress={() =>{handlePressoption("001-Preparacion de terrenos")}}/>
          <List.Item  left={props => <List.Icon {...props} icon="sprout"/>} title="002 - Deshoje"  onPress={() =>{handlePressoption("002-Deshoje")}}/>
          <List.Item  left={props => <List.Icon {...props} icon="sprout"/>} title="001 - Preparacion de terrenos"  onPress={() =>{handlePressoption("001-Preparacion de terrenos")}}/>
          <List.Item  left={props => <List.Icon {...props} icon="sprout"/>} title="002 - Deshoje"  onPress={() =>{handlePressoption("002-Deshoje")}}/>
          <List.Item  left={props => <List.Icon {...props} icon="sprout"/>} title="001 - Preparacion de terrenos"  onPress={() =>{handlePressoption("001-Preparacion de terrenos")}}/>
          <List.Item  left={props => <List.Icon {...props} icon="sprout"/>} title="002 - Deshoje"  onPress={() =>{handlePressoption("002-Deshoje")}}/>
          <List.Item  left={props => <List.Icon {...props} icon="sprout"/>} title="001 - Preparacion de terrenos"  onPress={() =>{handlePressoption("001-Preparacion de terrenos")}}/>
          <List.Item  left={props => <List.Icon {...props} icon="sprout"/>} title="002 - Deshoje"  onPress={() =>{handlePressoption("002-Deshoje")}}/>
          </ScrollView>
      </List.Accordion>
    </List.Section>  
    <View style ={{backgroundColor:"" , width:"100%", height:"100%", marginTop:10}}>
      <View style={{ borderTopLeftRadius:5, borderTopRightRadius:5, backgroundColor:"#08e8a1ff", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:'space-between', paddingHorizontal:10, paddingVertical:10}}>
       <Text variant="titleSmall" >Código</Text>
       <Text variant="titleSmall" >Descripción actividad</Text>
       <Text variant="titleSmall" >Selección</Text>
      </View>
      <ScrollView style={{borderBottomLeftRadius:5, borderBottomRightRadius:5}}>
      <View style={{backgroundColor:"white", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:'space-between', paddingHorizontal:10, paddingVertical:10}}>
       <View style={{width:"20%"}}>
       <Text variant="titleSmall" >002 002</Text>
       </View>
        <View style={{width:"43%", }}>
       <Text variant="titleSmall" style={{textAlign:"left", }}>Cortado de hilo</Text>
       </View>
       <View style={{width:"23%", display:"flex", justifyContent:'center', alignItems:'center'}}>
         <Checkbox
         color="#08e8a1ff"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
       </View>
      </View>
       <View style={{backgroundColor:"white", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:'space-between', paddingHorizontal:10, paddingVertical:10}}>
       <View style={{width:"20%"}}>
       <Text variant="titleSmall" >002 003</Text>
       </View>
        <View style={{width:"43%", }}>
       <Text variant="titleSmall" style={{textAlign:"left", }}>Plastico acolchonado</Text>
       </View>
       <View style={{width:"23%", display:"flex", justifyContent:'center', alignItems:'center'}}>
         <Checkbox
          color="#08e8a1ff"
          uncheckedColor="black"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
       </View>
      </View>
       <View style={{backgroundColor:"white", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:'space-between', paddingHorizontal:10, paddingVertical:10}}>
       <View style={{width:"20%"}}>
       <Text variant="titleSmall" >002 004</Text>
       </View>
        <View style={{width:"43%", }}>
       <Text variant="titleSmall" style={{textAlign:"left", }}>Reparacion acolchonado</Text>
       </View>
       <View style={{width:"23%", display:"flex", justifyContent:'center', alignItems:'center'}}>
        
         <Checkbox
          color="#08e8a1ff"
          uncheckedColor="black"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
       </View>
      </View>
       <View style={{backgroundColor:"white", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:'space-between', paddingHorizontal:10, paddingVertical:10}}>
       <View style={{width:"20%"}}>
       <Text variant="titleSmall" >002 005</Text>
       </View>
        <View style={{width:"43%", }}>
       <Text variant="titleSmall" style={{textAlign:"left", }}>riego</Text>
       </View>
       <View style={{width:"23%", display:"flex", justifyContent:'center', alignItems:'center'}}>
         <Checkbox
          color="black"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
       </View>
      </View>
       <View style={{backgroundColor:"white", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:'space-between', paddingHorizontal:10, paddingVertical:10}}>
       <View style={{width:"20%"}}>
       <Text variant="titleSmall" >002 005</Text>
       </View>
        <View style={{width:"43%", }}>
       <Text variant="titleSmall" style={{textAlign:"left", }}>Fitosanitario</Text>
       </View>
       <View style={{width:"23%", display:"flex", justifyContent:'center', alignItems:'center'}}>
         <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
       </View>
      </View>
       <View style={{backgroundColor:"white", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:'space-between', paddingHorizontal:10, paddingVertical:10}}>
       <View style={{width:"20%"}}>
       <Text variant="titleSmall" >002 005</Text>
       </View>
        <View style={{width:"43%", }}>
       <Text variant="titleSmall" style={{textAlign:"left", }}>Cortado de hilo</Text>
       </View>
       <View style={{width:"23%", display:"flex", justifyContent:'center', alignItems:'center'}}>
         <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
       </View>
      </View>
       <View style={{backgroundColor:"white", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:'space-between', paddingHorizontal:10, paddingVertical:10}}>
       <View style={{width:"20%"}}>
       <Text variant="titleSmall" >002 005</Text>
       </View>
        <View style={{width:"43%", }}>
       <Text variant="titleSmall" style={{textAlign:"left", }}>Cortado de hilo</Text>
       </View>
       <View style={{width:"23%", display:"flex", justifyContent:'center', alignItems:'center'}}>
         <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
       </View>
      </View>
       <View style={{backgroundColor:"white", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:'space-between', paddingHorizontal:10, paddingVertical:10}}>
       <View style={{width:"20%"}}>
       <Text variant="titleSmall" >002 005</Text>
       </View>
        <View style={{width:"43%", }}>
       <Text variant="titleSmall" style={{textAlign:"left", }}>Cortado de hilo</Text>
       </View>
       <View style={{width:"23%", display:"flex", justifyContent:'center', alignItems:'center'}}>
         <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
       </View>
      </View>
       <View style={{backgroundColor:"white", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:'space-between', paddingHorizontal:10, paddingVertical:10}}>
       <View style={{width:"20%"}}>
       <Text variant="titleSmall" >002 005</Text>
       </View>
        <View style={{width:"43%", }}>
       <Text variant="titleSmall" style={{textAlign:"left", }}>Cortado de hilo</Text>
       </View>
       <View style={{width:"23%", display:"flex", justifyContent:'center', alignItems:'center'}}>
         <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
       </View>
      </View>
       <View style={{backgroundColor:"white", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:'space-between', paddingHorizontal:10, paddingVertical:10}}>
       <View style={{width:"20%"}}>
       <Text variant="titleSmall" >002 005</Text>
       </View>
        <View style={{width:"43%", }}>
       <Text variant="titleSmall" style={{textAlign:"left", }}>Cortado de hilo</Text>
       </View>
       <View style={{width:"23%", display:"flex", justifyContent:'center', alignItems:'center'}}>
         <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
       </View>
      </View>
       <View style={{backgroundColor:"white", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:'space-between', paddingHorizontal:10, paddingVertical:10}}>
       <View style={{width:"20%"}}>
       <Text variant="titleSmall" >002 005</Text>
       </View>
        <View style={{width:"43%", }}>
       <Text variant="titleSmall" style={{textAlign:"left", }}>Cortado de hilo</Text>
       </View>
       <View style={{width:"23%", display:"flex", justifyContent:'center', alignItems:'center'}}>
         <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
       </View>
      </View>
       <View style={{backgroundColor:"white", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:'space-between', paddingHorizontal:10, paddingVertical:10}}>
       <View style={{width:"20%"}}>
       <Text variant="titleSmall" >002 005</Text>
       </View>
        <View style={{width:"43%", }}>
       <Text variant="titleSmall" style={{textAlign:"left", }}>Cortado de hilo</Text>
       </View>
       <View style={{width:"23%", display:"flex", justifyContent:'center', alignItems:'center'}}>
         <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
       </View>
      </View>
      </ScrollView>
    </View>
    <Button textColor="black" icon="database-arrow-up-outline" style={{marginTop:20}} mode="contained" buttonColor="#08e8a1ff" onPress={() => console.log('Pressed')}>
    Asentar actividades
  </Button>
    </View>
  
      </View>
        <View />
         
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Deshacer',
          onPress: () => {
            handlePressoption('Seleccione')
          },
        }}>
        Actividad Asentada!
      </Snackbar>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda la pantalla
    backgroundColor: "#e8e9f1ff",
    justifyContent: "center",
    alignItems: "center",
  },
  redBox: {
    flex:20, // visible
    width: "90%", // ajustable
   
   
  },
});