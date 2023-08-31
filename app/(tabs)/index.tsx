import { useContext } from "react"
import { Platform, RefreshControl, SafeAreaView, ScrollView } from "react-native"
import Lottie from "lottie-react-native"
import { useRef } from "react"
import { ThreadsContext } from "../../context/threadContext"
import ThreadsItem from "../../components/thread/ThreadsItem"

export default function TabOneScreen() {
  const animationRef = useRef<Lottie>(null)
  const threads = useContext(ThreadsContext)

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
            alignSelf: "center",
          }}
        />
        {threads.map(thread => (
          <ThreadsItem key={thread.id} {...thread} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
