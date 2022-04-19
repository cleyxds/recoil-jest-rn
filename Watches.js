import React, { useState } from "react"
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  Button
} from "react-native"

import Toast from "react-native-toast-message"

import { useSetRecoilState } from "recoil"
import { default as WatchesAtom } from "@atoms/Watches"
import GetWatchesByFamilyCode from "@atoms/Watches/selectors/watchByCode"

const Watches = () => {
  const setWatches = useSetRecoilState(WatchesAtom)
  const [text, setText] = useState("")
  const setWatchByCode = useSetRecoilState(GetWatchesByFamilyCode)

  return (
    <View>
      <TextInput
        placeholderTextColor="white"
        onChangeText={t => setText(t)}
        style={[styles.inputStyle, styles.commonMargin]}
        placeholder="Set filter by Family Code"
      />

      <View style={[styles.filterButtonStyle, styles.commonMargin]}>
        <Button
          title="Add filter"
          color="white"
          onPress={() => {
            if (text.length === 0) {
              return Toast.show({ type: "error" })
            }
            setWatchByCode(text.toLowerCase())
          }}
        />
      </View>

      <TouchableOpacity
        testID="test-addSubmariner"
        activeOpacity={0.75}
        style={[styles.buttonStyle, styles.commonMargin]}
        onPress={() =>
          setWatches(prevWatches => ({
            ...prevWatches,
            watches: [
              ...prevWatches.watches,
              { rmc: "1273y1nxi", familyCode: "submariner" }
            ]
          }))
        }
      >
        <Text style={styles.textStyle}>Add submariner</Text>
      </TouchableOpacity>

      <TouchableOpacity
        testID="test-addDatejust"
        activeOpacity={0.75}
        style={[styles.buttonStyle, styles.commonMargin]}
        onPress={() =>
          setWatches(prevWatches => {
            if (prevWatches) {
              return {
                ...prevWatches,
                watches: [
                  ...prevWatches.watches,
                  { rmc: "1ij901asd", familyCode: "datejust" }
                ]
              }
            }
          })
        }
      >
        <Text style={styles.textStyle}>Add Datejust</Text>
      </TouchableOpacity>

      <TouchableOpacity
        testID="test-removeLast"
        activeOpacity={0.75}
        style={[styles.buttonStyle, styles.commonMargin]}
        onPress={() =>
          setWatches(prevWatches => {
            if (prevWatches) {
              return {
                ...prevWatches,
                watches: prevWatches.watches.slice(
                  0,
                  prevWatches.watches.length - 1
                )
              }
            }
          })
        }
      >
        <Text style={styles.textStyle}>Remove last watch</Text>
      </TouchableOpacity>

      <TouchableOpacity
        testID="test-clearState"
        activeOpacity={0.75}
        style={[styles.buttonStyle, styles.commonMargin]}
        onPress={() => setWatches({ watches: [], dynamicWatches: [] })}
      >
        <Text style={styles.textStyle}>Clear State</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: "center",
    padding: 8,
    borderRadius: 12,
    backgroundColor: "grey"
  },
  commonMargin: {
    marginBottom: 16
  },
  textStyle: {
    color: "white"
  },
  filterButtonStyle: {
    alignSelf: "center",
    width: 100,
    backgroundColor: "#202020",
    borderRadius: 20
  },
  inputStyle: {
    marginHorizontal: 16,
    color: "black",
    backgroundColor: "grey",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12
  }
})

export default Watches
