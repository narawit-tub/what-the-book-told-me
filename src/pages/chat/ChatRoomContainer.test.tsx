import { describe, expect, test } from 'vitest'
import { ChatRoom, User } from 'src/types/chatroom.types'
import { render, screen } from '@testing-library/react'
import ChatRoomContainer from 'src/pages/chat/ChatRoomContainer'

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

describe('ChatRoomContainer', () => {
  test('Should render the chatRoom container', () => {
    // Act
    render(<ChatRoomContainer chatRoomData={mockChatRoomData} currentUser={expect.anything()} />)

    // Assert
    const chatroomHeader = screen.queryByRole('heading', { name: /Talking with building microservice/i })
    expect(chatroomHeader).toBeDefined()
    const messages = screen.queryByRole('paragraph', { name: /message01/i })
    expect(messages).toBeDefined()
  })

  test('Should align the message from currentUser to right side', () => {
    // Arrange
    const currentUser: User = {
      id: '1',
      name: 'user 1',
    }
    const newMockChatRoomData: ChatRoom = {
      ...mockChatRoomData,
      messages: [
        {
          id: '1',
          sender: currentUser,
          text: 'message 1',
          sentAt: new Date('2022-04-01T00:00:00'),
        },
        {
          id: '2',
          sender: currentUser,
          text: 'message 2',
          sentAt: new Date('2022-04-02T00:00:00'),
        },
        {
          id: '3',
          sender: {
            id: '2',
            name: 'book 1',
          },
          text: 'message 3',
          sentAt: new Date('2022-04-02T00:00:00'),
        },
      ],
    }

    // Act
    render(<ChatRoomContainer chatRoomData={newMockChatRoomData} currentUser={currentUser} />)
    const numberOfRightMessage = screen.getAllByRole('generic', {
      name: /my message/i,
    }).length
    const numberOfOtherMessage = screen.getAllByRole('generic', {
      name: /other message/i,
    }).length

    // Assert
    expect(numberOfRightMessage).toEqual(2)
    screen.debug()
    expect(numberOfOtherMessage).toEqual(1)
  })
})
