export interface UserInfor {
  fullname: string;
  role: number;
  avatar: string;
  status: number;
  email: string;
  phone_number: string;
  address: string;
  username: string;
  studied_card: number;
  created_deck: number;
  saved_deck: number;
  id: string;
  created_at: string;
  edited_at: string;
  creator: null;
  editor: null;
}

export interface UserInforRes {
  status_code: number;
  message: string;
  data: UserInfor;
}
