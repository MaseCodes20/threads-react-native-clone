import { View } from "react-native"
import React from "react"
import { Text } from "../Themed"
import { blurhash } from "../../utils/blur"
import { Image } from "expo-image"

const PostContent = ({ content, image }: { content: string; image?: string }) => {
  return (
    <View>
      <Text>{content}</Text>
      {image && (
        <Image
          source={image}
          style={{ width: "100%", minHeight: 300, borderRadius: 10 }}
          placeholder={blurhash}
          contentFit="cover"
          transition={200}
        />
      )}
    </View>
  )
}

export default PostContent
