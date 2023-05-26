export interface Desk {
  title: string;
  content: string;
  sound_url: string;
  image_url: string;
  title_back_one: string;
  content_back_one: string;
  title_back_two: string;
  content_back_two: string;
  sound_url_back: string;
  image_url_back: string;
}

export interface CreateDeskData {
  folder_id: string;
  name: string;
  description: string;
  is_public: true;
  color: number;
  order: number;
  recall_strength: number;
  reminder_time: string;
  learning_length: number;
  spaced_repetition_strategy_level: number;
  list_flash_cards: Desk[];
}
