import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [clickCount, setClickCount] = useState(0);
  const [count, setCount] = useState(0)
  const [intervalId, setIntervalId] = useState(0);
  const [counting, setCounting] = useState(false);

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.headerText}>
            Stopwatch {count}s
        </Text>
        <Button
            onPress={() => {
              setClickCount(clickCount + 1)
            }}
            title={'Number of clicks:' + clickCount}
        />
        <Button
          onPress={() => {
            setCounting(true)
            const theIntervalId = setInterval(() => {
              setCount((previousValue) => {
                return previousValue + 1
              })
            }, 1000)
            setIntervalId(theIntervalId)
        }}
          title='Start'
          disabled={counting}
        />

        <Button
          onPress={() => {
            setCounting(false)
            clearInterval(intervalId)
        }}
          title='Stop'
          disabled={!counting}
        />

        <Button
          onPress={() => {
            setCounting(false)
            clearInterval(intervalId)
            setCount(0)
        }}
          title='Reset'
          disabled={count === 0}
        />
        
        
    </View>
  )
}

const styles = StyleSheet.create({
  headerText : {
    fontSize: 30,
    padding: 10
  },

  container : {
    fontSize: 3,
    fontWeight: 200,
    border: 2,
    minWidth: 80,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
