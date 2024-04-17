import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";

const GoalsInput = ({ addGoals, setModalVisible, modalVisible }) => {
  const [enterGoals, setEnterGoals] = useState("");

  // if (enterGoals) {
  //   setGoals((currentGoals) => [...currentGoals, enterGoals]);
  //   setEnterGoals("");
  // }

  const handlerGoals = (text) => {
    setEnterGoals(text);
  };

  const onPressBtn = () => {
    if (enterGoals) {
      addGoals(enterGoals);
      setEnterGoals("");
      setModalVisible(false);
    }
  };

  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.textInputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          placeholder="Enter Goals"
          style={styles.textInput}
          value={enterGoals}
          onChangeText={(text) => handlerGoals(text)}
        />
        <View style={styles.viewBtn}>
          <View style={styles.btn}>
            <Button title="Add Goals" color={"blue"} onPress={onPressBtn} />
          </View>
          <View style={styles.btn}>
            <Button
              title="Cancel"
              color={"red"}
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalsInput;

const styles = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  viewBtn: {
    flexDirection: "row",
    width: "75%",
    justifyContent: "space-between",
    marginTop: 5,
  },
  btn: {
    width: 100,
  },
});
