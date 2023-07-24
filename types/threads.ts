export type Thread = {
  id: string
  author: User
  content: string
  image?: string
  replies?: Reply[]
  repliesCount: number
  likesCount: number
  mention?: boolean
  mentionUser?: User
  createdAt: string
}

export type Reply = {
  id: string
  author: User
  content: string
  likes: number
  createdAt: string
}

export type User = {
  id: string
  name: string
  username: string
  verified: boolean
  photo: string
  bio: string
  link?: string
  followers: User[]
}
