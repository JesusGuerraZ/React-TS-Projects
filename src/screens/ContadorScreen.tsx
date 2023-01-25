import { useState } from "react";
import { StyleSheet, Text, View } from "react-native"
import { Fab } from "../components/Fab";

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

        <Fab 
          title="+1" 
          onPress={() => setContador(contador + 1)} 
          position="br"
        ></Fab>

        <Fab 
          title="-1" 
          onPress={() => setContador(contador - 1)} 
          position="bl"
          ></Fab>
          
        {/* <TouchableOpacity onPress={() => setContador(contador - 1)} style={styles.fabLocationBL}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>
              -1
            </Text>
          </View>
        </TouchableOpacity> */}
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

//  touch: {
//   marginEnd: 150,
//   marginStart: 150,
// },

// button: {
//   textAlign: 'center',
//   backgroundColor: '#DDDDDD',
//   padding: 10,
//   borderRadius: 50
// }

})
