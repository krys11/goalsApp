import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalsItem from "./components/GoalsItem";
import GoalsInput from "./components/GoalsInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const showModalVisible = () => {
    setModalVisible(true);
  };

  const addGoals = (enterGoals) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { goalsValue: enterGoals, id: Math.random() },
    ]);
  };

  const onDelete = (id) => {
    setGoals((currentGoal) => {
      return currentGoal.filter((goals) => goals.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add Goals"
          color={"#311b6b"}
          onPress={showModalVisible}
        />

        {modalVisible && (
          <GoalsInput
            addGoals={addGoals}
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
          />
        )}

        <View style={styles.goalsContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={goals}
            renderItem={({ item }) => (
              <GoalsItem item={item} onDelete={onDelete} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "rgba(49,27,107,0.8)",
    padding: 30,
  },
  textInputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: "black",
  },
  textInput: {
    width: "65%",
    borderWidth: 1,
    borderColor: "black",
    padding: 6,
  },
  goalsContainer: {
    flex: 4,
  },
});
