import React from "react"
import { StyleSheet, SafeAreaView } from "react-native"
import Constants from "expo-constants"
import { RecoilRoot } from "recoil"
import Watches from "./Watches"
import WatchesData from "./WatchesData"
import { Toast } from "react-native-toast-message/lib/src/Toast"
import toastConfig from "./config/ToastConfig"

export default function App() {
  return (
    <RecoilRoot>
      <SafeAreaView style={styles.container}>
        <Watches />
        <WatchesData />
      </SafeAreaView>
      <Toast config={toastConfig} position="bottom" />
    </RecoilRoot>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
  }
})
