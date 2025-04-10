import React, { useState, useEffect} from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Clipboard, Platform, TouchableHighlight } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Header from '../components/header'

const PaceToSpeed: React.FC = () => {
  const [pace, setPace] = useState<string>('');
  const [speed, setSpeed] = useState<string | null>(null);

  const navigation = useNavigation();

  const handlePaceChange = (value: string) => {
    setPace(value);
  };

  const convertPaceToSpeed = () => {
    // Validar se o pace foi inserido no formato mm:ss
    const paceRegex = /^(\d{1,2}):([0-5]?\d)$/;
    const match = pace.match(paceRegex);

    if (match) {
      const minutes = parseInt(match[1], 10);
      const seconds = parseInt(match[2], 10);

      // Converter pace para minutos decimais
      const paceInMinutes = minutes + seconds / 60;

      // Calcular velocidade em km/h
      const velocity = (60 / paceInMinutes).toFixed(2);
      setSpeed(velocity);
    } else {
      setSpeed(null);
      alert('Por favor, insira o pace no formato mm:ss');
    }
  };


  useEffect(() => {
      const unsubscribe = navigation.addListener('blur', () => {
        setPace('');
        setSpeed('');
      });
  
      
      return unsubscribe;
    }, [navigation]);

  const copyToClipboard = (value: string) => {
    Clipboard.setString(value);
    alert('Velocidade copiada para a área de transferência!');
  };

  return (
    <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>

    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>
      
    <View style={styles.inputContainer}>
    
    <Text style={styles.title}>Converter Pace para KM/H</Text>
    
      <View>
        <Text style={styles.label}>Digite o pace (mm:ss):</Text>
        
        <TextInputMask
          style={styles.input}
          value={pace}
          onChangeText={handlePaceChange}
          placeholder="00:00"
          type={'custom'}
          options={{
            mask: '99:99',
          }}
          keyboardType="numeric"
          placeholderTextColor='#66696c'
          maxLength={5}
        />
      </View>

      <View>
        <TouchableHighlight style={styles.button} onPress={convertPaceToSpeed}>
          <Text style={styles.buttonText}>Converter</Text>
        </TouchableHighlight>
      </View>
      
      <View style={styles.inputContainer}>
              {speed ? (
                <TouchableOpacity onPress={() => copyToClipboard(speed)}>
                  <Text style={styles.result}>{speed} km/h</Text>
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
    paddingTop:10
    
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
    margin: 20,
    fontSize: 24,
    fontWeight: 'bold',
    // color: '#a7a9ab',
    color: '#ce7e00'
  },
});

export default PaceToSpeed;
