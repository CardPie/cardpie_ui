export interface IDecks {
    folder_id: string;
    name: string;
    description: string;
    is_public: boolean;
    total_card: number;
    color: number;
    order: number;
    user_id: string;
    view: number;
    folder_name: string;
    recall_strength: number;
    reminder_time: string;
    learning_length: number;
    spaced_repetition_strategy_level: number;
    list_flash_cards: IFlashCard[];
    list_study_sessions: [];
    id: string;
    created_at: string;
    edited_at: string;
    creator: string;
    editor: string
}
export interface IFlashCard {
    front_content: string;
    front_description: string;
    front_sound_url: string;
    front_image_url: string;
    back_content: string;
    back_description: string;
    back_sound_url: string;
    back_image_url: string;
    id: string;
    created_at: string;
    edited_at: string;
    creator: string;
    editor: string
}
export interface IDeckRes {
    status_code: number;
    message: string;
    data: IDecks
}