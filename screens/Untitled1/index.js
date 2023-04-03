import { rest_auth_user_update } from "../../store/twodeploymentAPI/userDetails.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Text } from "react-native";
import { Pressable } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(rest_auth_user_update());
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable><Text style={styles.kwsjmOVA}>Lorem ipsu</Text></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  kwsjmOVA: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    fontFamily: "Montserrat"
  }
});
export default Untitled1;