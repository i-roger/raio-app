import React, { useState, useEffect } from 'react';
import { View, Text, TextInput,StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, TouchableHighlight, Clipboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const App = () => {
  const [distance, setDistance] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [pace, setPace] = useState('');

  const navigation = useNavigation();

  const calculatePace = () => {
    const distanceInKm = parseFloat(distance);
    const totalTimeInSeconds = (parseInt(hours) * 3600) + (parseInt(minutes) * 60) + parseInt(seconds);

    if (!distanceInKm || !totalTimeInSeconds) {
      alert('Por favor, insira todos os campos corretamente.');
      return;
    }

    const paceInMinutes = totalTimeInSeconds / distanceInKm / 60;
    const paceMinutes = Math.floor(paceInMinutes);
    const paceSeconds = Math.round((paceInMinutes - paceMinutes) * 60);

    setPace(`${paceMinutes}' ${paceSeconds}"`);
  };

  
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setDistance('');
      setHours('');
      setMinutes('');
      setSeconds('');
      setPace('');
    });

    
    return unsubscribe;
  }, [navigation]);

  
  const copyToClipboard = () => {
    if (pace) {
      Clipboard.setString(pace);
      alert('Pace copiado para a área de transferência!');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>
      <View style={styles.inputContainer}>

      <Text style={styles.title}>Pace Estimado</Text>

      <View>
        <Text style={styles.label}>Distância</Text>
        <TextInput
          style={styles.input}
          value={distance}
          onChangeText={setDistance}
          keyboardType="numeric"
          placeholder="(1KM ou 0.500 Metros)"
          placeholderTextColor='#66696c'
        />
      </View>

      <View>
        <Text style={styles.label}>Horas</Text>
        <TextInput
          style={styles.input}
          value={hours}
          onChangeText={setHours}
          keyboardType="numeric"
          placeholder="Horas"
          placeholderTextColor='#66696c'
        />
      </View>

      <View>
        <Text style={styles.label}>Minutos</Text>
        <TextInput
          style={styles.input}
          value={minutes}
          onChangeText={setMinutes}
          keyboardType="numeric"
          placeholder="Minutos"
          placeholderTextColor='#66696c'
        />
      </View>

      <View>
        <Text style={styles.label}>Segundos</Text>
          <TextInput
            style={styles.input}
            value={seconds}
            onChangeText={setSeconds}
            keyboardType="numeric"
            placeholder="Segundos"
            placeholderTextColor='#66696c'
          />
      </View>

      <View style={styles.inputContainer}>
        <TouchableHighlight onPress={calculatePace} style={styles.button} underlayColor='#d79732'>
          <Text style={styles.buttonText}>CALCULAR PACE</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.inputContainer}>
        {pace ? (
          <TouchableOpacity onPress={copyToClipboard}>
            <Text style={styles.result}>{pace}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor:'#25292e',
    alignContent: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    height: 50,
    alignItems: 'center',
    backgroundColor: '#ce7e00',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,

  },
  buttonText: {
    color: '#e9e9ea',
    fontWeight: 700,
    margin: 'auto',
  },
  inputContainer: {
    alignItems: 'center',
  },
  title: {
    color: '#e9e9ea',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    color: '#e9e9ea',
    fontSize: 16,
  },
  input: {
    alignItems: 'center',
    alignSelf: 'center',
    width: 200,
    padding: 10,
    margin: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
    color: '#e9e9ea',
  },
  result: {
    paddingTop: 50,
    fontSize: 24,
    fontWeight: 'bold',
    // color: '#a7a9ab',
    color: '#ce7e00'
  },
});

export default App;
