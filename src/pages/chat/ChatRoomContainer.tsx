import { ChatRoom } from 'src/types/chatroom.types'
import React from 'react'

const ChatRoomContainer: React.FC<{ chatRoomData: ChatRoom }> = ({ chatRoomData }) => {
  return (
    <>
      <h1>{chatRoomData.name}</h1>
      {chatRoomData.messages.map(({ text, id }) => (
        <div key={id}>
          <p>{text}</p>
        </div>
      ))}
    </>
  )
}

export default ChatRoomContainer
