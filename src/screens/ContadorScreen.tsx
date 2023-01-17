import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native"

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
    }}>
        <Text style={{
            textAlign: 'center',
            fontSize: 40,
            color: 'purple',
            top: -15,
         }}>
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

        <TouchableOpacity onPress={() => setContador(contador + 1)} style={{
          marginEnd: 150,
          marginStart: 150,
        }}>
          <Text style={{
            textAlign: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
            borderRadius: 50
          }}>
            Click
          </Text>
        </TouchableOpacity>
    </View>
  )
}
