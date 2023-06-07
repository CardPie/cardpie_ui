export interface DeskRes {
  status_code: number;
  message: string;
  total_count: number;
  page_size: number;
  offset: number;
  total_pages: number;
  data: Desk[];
}

export interface Desk {
  id: string;
  created_at: string;
  edited_at: string;
  creator: {
    id: string;
    fullname: string;
    email: string;
    phone_number: string;
    avatar: string;
  };
  editor: {
    id: string;
    fullname: string;
    email: string;
    phone_number: string;
    avatar: string;
  };
  name: string;
  description: string;
  is_public: boolean;
  view: number;
  color: number;
  order: number;
  total_card: number;
}

export interface CountView {
  status_code: number;
  message: string;
}

export interface IInputField {
  deckName: string;
  folderName: string;
}