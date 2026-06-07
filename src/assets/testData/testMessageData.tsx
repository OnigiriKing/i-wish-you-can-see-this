
export type Message = {
  id: string;
  sender: string;
  receiver: string;
  message: string;
  latitude: number;
  longitude: number;
};

const testMessageData: Message[] = [
  {
    id: "message1",
    sender: "Dave",
    receiver: "her",
    message: "I miss you",
    latitude: 35.6762,
    longitude: 139.6503,
  },
  {
    id: "message2",
    sender: "Marry",
    receiver: "mom",
    message: "I wish you were here",
    latitude: 34.7025,
    longitude: 135.4959,
  },
];

export default testMessageData;
