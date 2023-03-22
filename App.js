import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Informations from './components/Informations';

export default function App() {

  const [darkTheme, setDarkTheme] = useState(true)
  const [currentTemperature, setCurrentTemperature] = useState('27')
  const [location, setLocation] = useState('BR, Conselheiro Lafaiete')

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
      alignItems: 'center',
    },
    temperature: {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 10,
    },
    temperatureText: {
      color: darkTheme ? '#e0e0e0' : 'black',
      fontSize: 40
    },
    refreshBtn: {
      position: 'absolute',
      margin: 48,
      alignSelf: 'flex-start'
    }
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.refreshBtn}>
        <Ionicons name="refresh" size={32} color={darkTheme ? 'white' : 'black'} />
      </TouchableOpacity>
      
      <Ionicons name="sunny-outline" style={{ marginTop: 64 }} size={48} color={darkTheme ? 'white' : 'black'} />
      <View style={styles.temperature}>
        <Text style={styles.temperatureText}>{currentTemperature}</Text>
        <Text style={[styles.temperatureText, { fontSize: 16 }]}>°C</Text>
      </View>
    </View>
  );
}


