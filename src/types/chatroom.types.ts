type User = {
  id: string
  name: string
}

type Message = {
  id: string
  sender: User
  text: string
  sentAt: Date
}

export type ChatRoom = {
  id: string
  name: string
  messages: Message[]
}
