import { ChatRoom, Message, User } from 'src/types/chatroom.types'
import React from 'react'

const renderMessage = ({ text, id, sender }: Message, currentUser: User) => {
  return (
    <div key={id} aria-label={sender === currentUser ? 'my message' : 'other message'}>
      <p>{text}</p>
    </div>
  )
}

const ChatRoomContainer: React.FC<{ chatRoomData: ChatRoom; currentUser: User }> = ({ chatRoomData, currentUser }) => {
  return (
    <>
      <h1>{chatRoomData.name}</h1>
      {chatRoomData.messages.map((message) => renderMessage(message, currentUser))}
    </>
  )
}

export default ChatRoomContainer
