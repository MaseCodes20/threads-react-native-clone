import { View, useColorScheme } from "react-native"
import React from "react"
import { Thread } from "../types/threads"
import { Text } from "./Themed"
import { MaterialIcons, Feather, FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons"
import { timeAgo } from "../utils/timeAgo"
import { Image } from "expo-image"

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj["

function ThreadsItem(thread: Thread) {
  return (
    <View>
      <Text>{thread.author.username}</Text>

      <View>
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

function PostHeading({ name, createdAt, verified }: { name: string; createdAt: string; verified: boolean }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexGrow: 1,
      }}
    >
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

function PostFooter({ replies, likes }: { replies: number; likes: number }) {
  return (
    <Text style={{ color: "gray" }}>
      {replies} replies · {likes} likes
    </Text>
  )
}

function BottomIcons() {
  const iconSize = 20
  const currentTheme = useColorScheme()
  const iconColor = currentTheme === "dark" ? "white" : "black"

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
      <FontAwesome name="heart-o" size={iconSize} color={iconColor} />
      <Ionicons name="chatbubble-outline" size={iconSize} color={iconColor} />
      <AntDesign name="retweet" size={iconSize} color={iconColor} />
      <Feather name="send" size={iconSize} color={iconColor} />
    </View>
  )
}
