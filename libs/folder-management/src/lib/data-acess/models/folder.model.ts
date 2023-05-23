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
