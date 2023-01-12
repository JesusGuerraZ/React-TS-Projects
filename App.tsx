/* eslint-disable semi */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
    }}>
      <Text style={{
        fontSize: 45,
        textAlign: 'center'
      }}> Hola mundo</Text>
    </View>
  )
}


export default App;