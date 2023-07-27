import { StyleSheet, View } from "react-native"
import React from "react"
import { Thread } from "../../types/threads"
import { Text } from "../Themed"
import { Image } from "expo-image"
import { blurhash } from "../../utils/blur"
import PostLeftSide from "./PostLeftSide"
import PostHeading from "./PostHeading"
import PostFooter from "./PostFooter"
import BottomIcons from "./BottomIcons"

function ThreadsItem(thread: Thread) {
  return (
    <View style={styles.container}>
      <PostLeftSide {...thread} />

      <View style={{ flexShrink: 1, gap: 6 }}>
        <PostHeading name={thread.author.name} createdAt={thread.createdAt} verified={thread.author.verified} />
        <Text>{thread.content}</Text>
        {thread.image && (
          <Image
            source={thread.image}
            style={{ width: "100%", minHeight: 300, borderRadius: 10 }}
            placeholder={blurhash}
            contentFit="cover"
            transition={200}
          />
        )}
        <BottomIcons />
        <PostFooter replies={thread.repliesCount} likes={thread.likesCount} />
      </View>
    </View>
  )
}

export default ThreadsItem

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
    paddingBottom: 30,
  },
})
