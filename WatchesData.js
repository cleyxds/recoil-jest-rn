import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import { useRecoilValue } from "recoil"
import Watches from "@atoms/Watches"
import theme from "@theme"

const WatchesData = () => {
  const { watches, filterRmc } = useRecoilValue(Watches)

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.commonMargin}>
        <Text style={styles.textStyle(index)}>{item.rmc}</Text>
        <Text style={styles.textStyle(index)}>{item.familyCode}</Text>
      </View>
    )
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => `${item.rmc}@${index}`}
      data={watches}
      renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: index => ({
    marginHorizontal: 8,
    color: index % 2 !== 0 ? theme.default : theme.rocket
  }),
  commonMargin: {
    marginBottom: 16
  }
})

export default WatchesData
