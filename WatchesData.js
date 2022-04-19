import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import { useRecoilValue } from "recoil"
import Watches from "./atoms/Watches"

const WatchesData = () => {
  const { watches } = useRecoilValue(Watches)

  const renderItem = ({ item }) => {
    return (
      <View style={styles.commonMargin}>
        <Text style={styles.textStyle}>{item.rmc}</Text>
        <Text style={styles.textStyle}>{item.familyCode}</Text>
      </View>
    )
  }

  return (
    <FlatList
      horizontal
      keyExtractor={(item, index) => `${item.rmc}@${index}`}
      data={watches}
      renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginHorizontal: 8
  },
  commonMargin: {
    marginBottom: 16
  }
})

export default WatchesData
