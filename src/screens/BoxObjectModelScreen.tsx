import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.container2}>
            <Text style={styles.title}>
                Box Object
            </Text>
        </View>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    width: "100%",
  },
  container2:{
    borderWidth: 10,
    padding: 20,
    borderColor: "blue",
    marginLeft: 100,
    borderStartColor: "yellow"
  },
   container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
   },
   title: {
    padding: 10,
    fontSize: 25,
    backgroundColor: "white",
    textAlign: "center",
    width: 200,
    borderWidth: 10,
    marginBottom: 30,
   }
});