import React from "react"
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native"
import theme from "@theme"
import { MotiView } from "moti"
import useWatches from "@atoms/Watches" // using absolute path

const size = 48

export default function WatchesData() {
  const { state, actions } = useWatches()
  const { watches } = state

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.commonMargin}>
        <Text style={styles.textStyle(index)}>{item?.rmc}</Text>
        <Text style={styles.textStyle(index)}>{item?.familyCode}</Text>
        <TouchableOpacity onPress={() => actions.deleteWatch(null, index)}>
          <Text style={[styles.textStyle, styles.centerDelete]}>Delete</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <>
      <MotiView
        from={{
          width: size, // or scale
          height: size,
          borderRadius: size / 2,
          borderWidth: 1,
          shadowOpacity: 0.5,
          opacity: 0
        }}
        animate={{
          width: size + 20, // or scale
          height: size + 20,
          borderRadius: (size + 20) / 2,
          borderWidth: 1.5,
          shadowOpacity: 0.75,
          opacity: 1
        }}
        transition={{
          type: "timing",
          duration: 1000,
          loop: true
        }}
        style={styles.loadingStyle}
      >
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textMoti}>
          Loading...
        </Text>
      </MotiView>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${item?.rmc}@${index}`}
        data={watches}
        renderItem={renderItem}
      />
    </>
  )
}

const styles = StyleSheet.create({
  textStyle: index => ({
    marginHorizontal: 8,
    color: index % 2 !== 0 ? theme.default : theme.rocket
  }),
  textMoti: {
    fontSize: 10,
    padding: 4
  },
  centerDelete: {
    alignSelf: "center",
    color: "red"
  },
  commonMargin: {
    marginBottom: 16
  },
  loadingStyle: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 32,
    right: 16
  }
})
