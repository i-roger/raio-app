import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import React from "react";
import { router } from "expo-router";

import MenuOptions from "../components/menuOption"

export default function Index() {

  function paceEstimado () {
    router.navigate("/paceestimado")
  }

  function paceParaKmh () {
    router.navigate("/paceparakmh")
  }

  function novo () {
    router.navigate("/novo")
  }

  function sobre() {
    router.navigate("/sobremim")
  }

  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#25292e'}}>
      
      <ScrollView style={{backgroundColor: '#25292e'}}>
        <View style={{paddingTop: 20, paddingBottom: 100, backgroundColor: '#25292e'}}> 

          <View 
            style={{
              padding:50,
              backgroundColor:'#25292e',
              alignItems: "center",
              
            }}>
            <Text style={styles.title}>RaioLaranja</Text>
            <Text style={{textAlign:'center', color:'#e9e9ea', fontSize:24}}>Seu companheiro nas corridas!</Text>
          </View>
          
          <View style={{flex:1, backgroundColor: 'orange', width: '100%', height: '100%', flexDirection:'row', justifyContent:'center', gap:50, flexWrap:'wrap'}}>

            <TouchableHighlight onPress={paceEstimado} style={styles.button} underlayColor='#d79732'>
              <Text style={styles.buttonText}>Pace Estimado</Text>
            </TouchableHighlight>


            <TouchableHighlight onPress={paceParaKmh} style={styles.button} underlayColor='#d79732'>
                <Text style={styles.buttonText}>Pace para km/h</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={novo} style={styles.button} underlayColor='#d79732'>
                <Text style={styles.buttonText}>Teste Animação</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={sobre} style={styles.button} underlayColor='#d79732'>
                <Text style={styles.buttonText}>Sobre</Text>
            </TouchableHighlight>

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
  },
  button: {
    width: 150,
    height: 100,
    alignItems: 'center',
    backgroundColor: '#ce7e00',
    padding: 10,
    borderRadius: 5,

  },
  buttonText: {
    color: '#e9e9ea',
    fontWeight: '600',
    margin: 'auto',
  },
  title: {
    fontSize: 34,
    color: 'orange',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  result: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

