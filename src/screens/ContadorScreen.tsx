import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Contador: { contador }
        </Text>

        {/* <Button 
        title="+1" 
        onPress={() => setContador(contador + 1)}
        />
        <Button 
        title="-1" 
        onPress={() => setContador(contador - 1)}
        /> */}

        <TouchableOpacity onPress={() => setContador(contador + 1)} style={styles.touch}>
          <Text style={styles.button}>
            Click
          </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    textAlign: 'center',
    fontSize: 40,
    color: 'purple',
    top: -15,
 },

 touch: {
  marginEnd: 150,
  marginStart: 150,
},

button: {
  textAlign: 'center',
  backgroundColor: '#DDDDDD',
  padding: 10,
  borderRadius: 50
}

})
