export type Message = {
  id: string;
  sender: string;
  receiver: string;
  message: string;
  latitude: number;
  longitude: number;
  created_at: string;
  is_approved: boolean;
  is_hidden: boolean;
};
