export interface Message {
    text: string;
    isBot: boolean;
}

export interface ChatbotState {
    messages: Message[];
    userInput: string;
    showChat: boolean;
}