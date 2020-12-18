import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
// import Gestures from 'react-native-easy-gestures'

export default function App() {
  return (
    <SafeAreaView >
      <Text>Triango!</Text>
      <StatusBar style="auto" />
      <Image
        style={styles.board}
        source={{
          uri:
          'https://i.pinimg.com/originals/b2/3e/d5/b23ed57ace9fea557510ac58a4a4b417.png'
        }}
      />
        <Image
          onPress={{}}
          style={styles.logo}
          source={{
            uri:
              'https://lh3.googleusercontent.com/proxy/4M35JQqUW5s6fFGcrxlRANqomXVAKoC3c9Hwttv8j8mNtKmpn317lSNMsyodK3HzQCv_3prD4TCnV-qEVT_Ipj6GvA'
          }}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    width: 400,
    height: 400,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

