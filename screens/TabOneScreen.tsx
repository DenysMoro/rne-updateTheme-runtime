import React, {useCallback, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import {Button, useTheme, Text} from "react-native-elements";

import EditScreenInfo from '../components/EditScreenInfo';

export default function TabOneScreen() {
  const { theme, updateTheme } = useTheme()
  const [counter, setCounter] = useState(0)

  const primaryToRed = useCallback(() => {
    updateTheme({
      colors: {
        primary: '#ff0000'
      }
    })
    setCounter((prevState) => prevState + 1)
  }, [updateTheme])

  const secondaryToBlack = useCallback(() => {
    updateTheme({
      colors: {
        secondary: '#000'
      }
    })
    setCounter((prevState) => prevState + 1)
  }, [updateTheme])

  console.log(theme.colors?.primary)
  console.log(theme.colors?.secondary)
  return (
    <View style={styles.container}>
      <Button title="Change primary color to red" onPress={primaryToRed} style={styles.button} />
      <Button title="Change secondary color to black" onPress={secondaryToBlack} style={styles.button} />
      <View>
        <Text>Primary color</Text>
        <View style={[styles.box, { backgroundColor: theme.colors?.primary }]} />
      </View>
      <View>
        <Text>Secondary color</Text>
        <View style={[styles.box, { backgroundColor: theme.colors?.secondary }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100
  },
  button: {
    marginVertical: 20
  }
});
