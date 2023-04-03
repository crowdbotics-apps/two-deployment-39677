import { Text } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.GsgtCQFp}></TextInput><Text style={styles.KwrjUaUL}>Lorem ips</Text></ScrollView>
    <Text style={styles.PtNKBbHM}>Lorem ips</Text></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  GsgtCQFp: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  KwrjUaUL: {
    width: 100,
    height: 39,
    lineHeight: 14,
    fontSize: 20,
    borderRadius: 0,
    flexDirection: "row",
    flex: 1,
    alignItems: "end",
    justifyContent: "center",
    position: "absolute",
    top: 64,
    left: 115,
    textAlign: "center",
    fontWeight: "200",
    flexWrap: "no-wrap"
  },
  PtNKBbHM: {
    width: 100,
    height: 39,
    lineHeight: 14,
    fontSize: 20,
    borderRadius: 0,
    flexDirection: "row",
    flex: 1,
    alignItems: "end",
    justifyContent: "center",
    position: "absolute",
    top: 101,
    left: 132,
    textAlign: "center",
    fontWeight: "200",
    flexWrap: "no-wrap"
  }
});
export default Untitled2;