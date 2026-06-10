
export type Message = {
  id: string;
  sender: string;
  receiver: string;
  message: string;
  latitude: number;
  longitude: number;
  date: string
};

const testMessageData: Message[] = [
  {
    id: "message1",
    sender: "Dave",
    receiver: "her",
    message: "I miss you",
    latitude: 35.6762,
    longitude: 139.6503,
    date: "06, June, 2026",
  },
  {
    id: "message2",
    sender: "Marry",
    receiver: "mom",
    message:
      "I hope you are happy right now, wherever you are happy and doing fine. I wish I can be with you and hug you",
    latitude: 34.7025,
    longitude: 135.4959,
    date: "08, June, 2026",
  },
];

export default testMessageData;
