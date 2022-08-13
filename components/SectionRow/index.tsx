import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import recipes from "../../assets/data/recipes.json";
import FoodItem from "../FoodItem";

const SectionRow = () => {
  const renderItem = ({ item }) => (
    <FoodItem title={item.name} photo={item.photo} />
  );
  return (
    <View>
      <Text style={styles.title}>TRENDING</Text>
      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};

export default SectionRow;

const styles = StyleSheet.create({
  title: {
    color: '#f74a61',
    fontWeight: '600',
    marginVertical: 10,
    marginHorizontal: 7,
    fontSize: 17
  }
});
