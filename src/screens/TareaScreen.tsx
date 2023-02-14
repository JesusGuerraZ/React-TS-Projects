import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

export const TareaScreen = () => {
  return (
    <SafeAreaView style={ styles.container }>
        <View style={ styles.container }>
            <View style={ styles.cajaMorada }></View>
            <View style={ styles.cajaNaranja}></View>
            <View style={ styles.cajaAzul}></View>
        </View>    
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        // flexDirection: 'row-reverse',
        // justifyContent: 'space-between',
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center'
        
    }
    ,
    cajaMorada: {
        // flex: 1,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        // alignSelf: 'flex-end'
        // top: 100
    }
    ,
    cajaNaranja: {
        // flex: 1,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        // left: '25%',
        // alignSelf: 'center',
        // top: '12.5%'
    }
    ,
    cajaAzul: {
        // flex: 2,
        // width: '100%',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        // alignSelf: 'center',
        // alignSelf: 'flex-end'
    }
});
