import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const GoalsItem = ({ item, onDelete }) => {
  return (
    <TouchableOpacity
      style={styles.itemGoals}
      onPress={() => onDelete(item.id)}
    >
      <Text style={styles.itemGoalsText}>{item.goalsValue}</Text>
    </TouchableOpacity>
  );
};

export default GoalsItem;

const styles = StyleSheet.create({
  itemGoals: {
    padding: 8,
    borderWidth: 1,
    borderColor: "blue",
    marginVertical: 5,
    backgroundColor: "blue",
    borderRadius: 10,
  },
  itemGoalsText: {
    color: "white",
  },
});
