import { StyleSheet, View } from "react-native"
import { Thread } from "../../types/threads"
import PostLeftSide from "./PostLeftSide"
import PostHeading from "./PostHeading"
import PostFooter from "./PostFooter"
import BottomIcons from "./BottomIcons"
import PostContent from "./PostContent"

function ThreadsItem(thread: Thread) {
  return (
    <View style={styles.container}>
      <PostLeftSide {...thread} />

      <View style={{ flexShrink: 1, gap: 6 }}>
        <PostHeading name={thread.author.name} createdAt={thread.createdAt} verified={thread.author.verified} />
        <PostContent content={thread.content} image={thread.image} />
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
