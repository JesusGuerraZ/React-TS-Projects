import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
  return (
    <SafeAreaView style={ styles.container }>
        <View style={ styles.container }>
            <Text style={ styles.caja1 }>Caja 1</Text>
            <Text style={ styles.caja2 }>Caja 2</Text>
            <Text style={ styles.caja3 }>Caja 3</Text>
            {/* Solo cuando haya demasiados componentes se usa wrap */}
            {/* <Text style={ styles.caja1 }>Caja 1</Text>
            <Text style={ styles.caja2 }>Caja 2</Text>
            <Text style={ styles.caja3 }>Caja 3</Text>
            <Text style={ styles.caja1 }>Caja 1</Text>
            <Text style={ styles.caja2 }>Caja 2</Text>
            <Text style={ styles.caja3 }>Caja 3</Text>
            <Text style={ styles.caja1 }>Caja 1</Text>
            <Text style={ styles.caja2 }>Caja 2</Text>
            <Text style={ styles.caja3 }>Caja 3</Text>
            <Text style={ styles.caja1 }>Caja 1</Text>
            <Text style={ styles.caja2 }>Caja 2</Text>
            <Text style={ styles.caja3 }>Caja 3</Text>
            <Text style={ styles.caja1 }>Caja 1</Text>
            <Text style={ styles.caja2 }>Caja 2</Text>
            <Text style={ styles.caja3 }>Caja 3</Text>
            <Text style={ styles.caja1 }>Caja 1</Text>
            <Text style={ styles.caja2 }>Caja 2</Text>
            <Text style={ styles.caja3 }>Caja 3</Text>
            <Text style={ styles.caja1 }>Caja 1</Text>
            <Text style={ styles.caja2 }>Caja 2</Text>
            <Text style={ styles.caja3 }>Caja 3</Text>
            <Text style={ styles.caja1 }>Caja 1</Text>
            <Text style={ styles.caja2 }>Caja 2</Text>
            <Text style={ styles.caja3 }>Caja 3</Text> */}
        </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        // flexDirection: 'column',
        // flexDirection: 'column-reverse',
        // flexDirection: 'row',
        // flexDirection: 'row-reverse',
        // justifyContent: 'flex-start',
        // justifyContent: 'flex-end',
        // justifyContent: 'center',
        // justifyContent: 'space-between',
        // justifyContent: 'space-around',
        // justifyContent: 'space-evenly',
        // alignItems: 'flex-start',
        // alignItems: 'flex-end',
        // alignItems: 'center',
        // alignItems: 'baseline',
        // alignItems: 'stretch',
        // flexWrap: 'wrap'
    }
    ,
    caja1: {
        // flex: 1,
        // width: 100,
        borderWidth: 4,
        borderColor: 'white',
        fontSize: 30,
        // alignSelf: 'center',
    }
    ,
    caja2: {
        // flex: 2,
        borderWidth: 4,
        borderColor: 'red',
        fontSize: 30,
        // alignSelf: 'flex-start',
    }
    ,
    caja3: {
        // flex: 3,
        borderWidth: 4,
        borderColor: 'green',
        fontSize: 30,
        // alignSelf: 'flex-end'
    }
});
