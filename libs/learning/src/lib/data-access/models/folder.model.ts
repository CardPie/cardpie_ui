export interface Folder {
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
  folder_name: string;
  total_card: number;
  total_deck: number
}

export interface FolderRes {
  status_code: number;
  message: string;
  total_count: number;
  page_size: number;
  offset: number;
  total_pages: number;
  data: Folder[];
}
export interface Desk {
  name: string;
  description: string;
  is_public: boolean;
  view: number;
  color: number;
  order: number;
  total_card: number;
  id: string;
  created_at: string;
  edited_at: string;
  creator: null;
  editor: null;
}

export interface DetailFolder {
  data: {
    folder_name: string;
    total_deck: number;
    total_card: number;
    list_deck: Desk[];
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
    editor: null;
  };
  status_code: number;
  message: string;
}

export interface INewFolder {
  folder_name: string,
  is_public: boolean
}