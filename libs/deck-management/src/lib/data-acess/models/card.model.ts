export interface Card {
  front_content: string;
  front_description: string;
  front_sound_url: string;
  front_image_url: string;
  back_content: string;
  back_description: string;
  back_sound_url: string;
  back_image_url: string;
}

export interface createNewDeck {
  folder_id: string;
  name: string;
  description: string;
  is_public: boolean;
  color: number;
  order: number;
  recall_strength: number;
  reminder_time: Date | null;
  learning_length: number;
  spaced_repetition_strategy_level: number;
  list_flash_cards: Card[];
}
