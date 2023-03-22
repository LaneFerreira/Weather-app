import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import Informations from './components/Informations'
import { Feather } from '@expo/vector-icons';

export default function App() {

  const [darkTheme, setDarkTheme] = useState(true)
  const [currentTemperature, setCurrentTemperature] = useState('27')
  const [location, setLocation] = useState('BR - Conselheiro Lafaiete')
  const [currentHour, setCurrentHour] = useState('13:00')

  const [wind, setWind] = useState('65')
  const [umidity, setUmiduty] = useState('80')

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
    },
    info: {
      flexDirection: 'row',
    },
    themeBtn: {
      margin: 10,
      marginLeft: 300,
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    squareBtn: {
      backgroundColor: darkTheme ? '#F2F2F2'  :'#8F8F8F', 
      justifyContent: 'center',
      borderRadius: 20,
      marginRight: 20,
      width: 50,
      height: 25,
    },
    circleBtn: {
      backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
      alignSelf: darkTheme ? 'flex-end' : 'flex-start',
      margin: 5,
      width: 20,
      height: 20,
      borderRadius: 50
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

      <Text style={[styles.temperatureText, { fontSize: 16 }]}>{location}, {currentHour}</Text>

      <Text style={{ fontSize: 56, color: 'white' }}>_</Text>

      <View style={styles.info}>
        <View style={{ alignItems: 'center' }}>
          <Feather name="wind" size={24} color={darkTheme ? '#e0e0e0' : 'black'} />
          <Informations title={'Vento'} value={wind + ' km/h'} style={styles.temperatureText}></Informations>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Ionicons name="water-outline" size={24} color={darkTheme ? '#e0e0e0' : 'black'} />
          <Informations title={'Umidade'} value={umidity + '%'}></Informations>
        </View>
      </View>

      <View style={styles.themeBtn}>
        <View style={styles.squareBtn}>
          <TouchableOpacity style={styles.circleBtn} onPress={() => darkTheme ? setDarkTheme(false) : setDarkTheme(true)}></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}