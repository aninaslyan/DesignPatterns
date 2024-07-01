class ChatRoom {
    private constructor() { // prevents the direct constructor calls with new keyword
    }

    private static instance: ChatRoom;

    public static getChatRoomInstance(): ChatRoom {
        if (!ChatRoom.instance) {
            ChatRoom.instance = new ChatRoom();
        }
        return ChatRoom.instance;
    }
}

const room1 = ChatRoom.getChatRoomInstance();
const room2 = ChatRoom.getChatRoomInstance();

// both variables contain the same instance
console.log(room1 === room2);
