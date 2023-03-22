import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Informations = (props) => {

  const styles = StyleSheet.create({
    informations: {
      alignItems: 'center',
      margin: 10,
      minWidth: 150,
    },
    text: {
      color: '#e8e8e8',
      margin: 5,
      marginLeft: 16,
      fontSize: 16
    }
  });

  return (
    <View styles={styles.informations}>
      <Text style={styles.text}>{props.title}</Text>
      <Text style={styles.text}>{props.value}</Text>
    </View>
  )
}

export default Informations