import { ChatRoom, User } from 'src/types/chatroom.types'

export const mockChatRoomData: ChatRoom = {
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

export const currentUser: User = {
  id: '1',
  name: 'user 1',
}
