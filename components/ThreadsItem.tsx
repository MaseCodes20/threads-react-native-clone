import { View } from "react-native"
import React from "react"
import { Thread } from "../types/threads"
import { Text } from "./Themed"
import { MaterialIcons, Feather } from "@expo/vector-icons"
import { timeAgo } from "../utils/timeAgo"

function ThreadsItem(thread: Thread) {
  return (
    <View>
      <Text>{thread.author.username}</Text>

      <View>
        <PostHeading name={thread.author.name} createdAt={thread.createdAt} verified={thread.author.verified} />
      </View>
    </View>
  )
}

export default ThreadsItem

function PostHeading({ name, createdAt, verified }: { name: string; createdAt: string; verified: boolean }) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Text style={{ fontWeight: "500" }}>{name}</Text>
        {verified && <MaterialIcons name="verified" size={14} color="#60a5fa" />}
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Text style={{ color: "gray" }}>{timeAgo(createdAt)}</Text>
        <Feather name="more-horizontal" size={14} color="gray" />
      </View>
    </View>
  )
}
