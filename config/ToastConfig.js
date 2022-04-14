import React from "react"
import { Text, StyleSheet } from "react-native"

const toastConfig = {
  /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */

  // success: props => (
  //   <BaseToast
  //     {...props}
  //     style={{ borderLeftColor: "pink" }}
  //     contentContainerStyle={{ paddingHorizontal: 15 }}
  //     text1Style={{
  //       fontSize: 15,
  //       fontWeight: "400"
  //     }}
  //   />
  // ),
  /*

      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
  error: props => <Text style={styles.errorTextStyle}>Network error</Text>
}

const styles = StyleSheet.create({
  errorTextStyle: {
    color: "crimson"
  }
})

export default toastConfig
