import { describe, expect, test } from 'vitest'
import { ChatRoom } from 'src/types/chatroom.types'
import { render, screen } from '@testing-library/react'
import ChatRoomContainer from 'src/pages/chat/ChatRoomContainer'

describe('ChatRoomContainer', () => {
  test('Should render the chatRoom container', () => {
    const mockChatRoomData: ChatRoom = {
      id: '1',
      name: 'Talking with building microservice',
      messages: [
        {
          id: '1',
          text: 'message 01',
          sender: {
            id: '1',
            name: 'name1',
          },
          sentAt: new Date('2022-04-01T00:00:00'),
        },
        {
          id: '2',
          text: 'message 02',
          sender: {
            id: '2',
            name: 'name2',
          },
          sentAt: new Date('2022-04-02T00:00:00'),
        },
      ],
    }

    // Act
    render(<ChatRoomContainer chatRoomData={mockChatRoomData} />)

    // Assert
    const chatroomHeader = screen.queryByRole('heading', { name: /Talking with building microservice/i })
    expect(chatroomHeader).toBeDefined()
    const messages = screen.queryByRole('paragraph', { name: /message01/i })
    expect(messages).toBeDefined()
  })
})
