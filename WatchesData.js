import React from "react"
import { View, Text, StyleSheet } from "react-native"

import { useRecoilValue } from "recoil"
import GetWatchesByFamilyCode from "./atoms/Watches/selectors/watchByCode"

import useDynamicWatches from "./hooks/useDynamicWatches"

const WatchesData = () => {
  const { watches } = useDynamicWatches()
  const watchesByCode = useRecoilValue(GetWatchesByFamilyCode)

  console.log("render", Date.now())

  return (
    <View>
      <Text style={[styles.textStyle, styles.commonMargin]}>
        Watches {JSON.stringify(watches)}
      </Text>
      <Text style={styles.textStyle}>
        Watch by code {JSON.stringify(watchesByCode)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: "center"
  },
  commonMargin: {
    marginBottom: 16
  }
})

export default WatchesData
