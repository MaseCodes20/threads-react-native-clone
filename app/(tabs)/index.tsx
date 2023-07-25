import { Platform, RefreshControl, SafeAreaView, ScrollView, StyleSheet } from "react-native"

import EditScreenInfo from "../../components/EditScreenInfo"
import { Text, View } from "../../components/Themed"
import Lottie from "lottie-react-native"
import { useRef } from "react"
import { createRandomUser } from "../../utils/generateDummyData"

export default function TabOneScreen() {
  const animationRef = useRef<Lottie>(null)

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              animationRef.current?.play()
            }}
            tintColor={"transparent"}
          />
        }
      >
        <Lottie
          ref={animationRef}
          source={require("../../assets/lottie-animations/threads.json")}
          loop={false}
          autoPlay
          style={{
            width: 90,
            height: 90,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
