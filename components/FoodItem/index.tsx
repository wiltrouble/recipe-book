import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const FoodItem = ({photo, title}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.photo}
        source={{
          uri: photo,
        }}
      />
      <Text style={styles.title} numberOfLines={1}>{title}</Text>
    </View>
  )
}

export default FoodItem

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 7,
    width: 140,
    height: 150,
  }
  ,
  photo: {
    height: 120,
    flex: 1,
    resizeMode: 'stretch',
    borderRadius: 10
  },
  title: {
    letterSpacing: 0.6,
    paddingVertical: 5
  }
})