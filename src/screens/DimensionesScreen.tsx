import React from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, View, useWindowDimensions} from 'react-native';

// const { width, height} = Dimensions.get('window');

export const DimensionesScreen = () => {

    const { width, height } = useWindowDimensions();

  return (
<SafeAreaView>
    <View style={ styles.container }>
        <View style={{
            ...styles.cajaMorada,
            width: width * 0.6}}>
        </View>
        <View style={ styles.cajaNaranja}>
        </View>
    </View>
    <Text style={ styles.dimensions }>W: { width }, H: { height }</Text>
</SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red',
    }
    ,
    cajaMorada: {
        backgroundColor: '#5856D6',
        // width: '50%',
        height: '50%',

    }
    ,
    cajaNaranja: {
        backgroundColor: '#F0A23B'
    }
    ,
    dimensions: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
