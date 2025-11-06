import { useState, useRef, useEffect } from 'react';
import { Message, ChatbotState } from './types/chatbot.types';
import { INITIAL_MESSAGE } from './constants/chatbot.constants';
import { getBotResponse } from './utils/chatbot.utils';

const Chatbot = () => {
    const [state, setState] = useState<ChatbotState>({
        messages: [{ text: INITIAL_MESSAGE, isBot: true }],
        userInput: '',
        showChat: false
    });

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [state.messages]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(prev => ({ ...prev, userInput: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!state.userInput.trim()) return;

        const userMessage: Message = { text: state.userInput, isBot: false };
        const botMessage: Message = { text: getBotResponse(state.userInput), isBot: true };

        setState(prev => ({
            ...prev,
            messages: [...prev.messages, userMessage, botMessage],
            userInput: ''
        }));
    };

    const toggleChat = () => {
        setState(prev => ({ ...prev, showChat: !prev.showChat }));
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
      {/* Botón del chatbot */}
      <button 
        onClick={toggleChat}
        className="bg-[#8B0000] hover:bg-[#6B0000] text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105"
      >
        {state.showChat ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
      
      {/* Ventana del chatbot */}
      {state.showChat && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl border border-[#8B0000] flex flex-col transition-all duration-300 animate-fadeIn">
          {/* Encabezado */}
          <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <h3 className="font-medium">Asistente de Carnicentro Marcelo</h3>
            </div>
            <button onClick={toggleChat} className="text-white hover:text-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Mensajes */}
          <div className="flex-1 p-4 overflow-y-auto max-h-80 bg-[#FFF8F8]">
            {state.messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-3 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                {message.isBot && (
                  <div className="h-8 w-8 rounded-full bg-[#8B0000] flex items-center justify-center text-white mr-2 flex-shrink-0">
                    <span className="text-xs font-bold">CM</span>
                  </div>
                )}
                <div 
                  className={`p-3 rounded-lg max-w-[80%] shadow-sm ${
                    message.isBot 
                      ? 'bg-white border border-[#8B0000]/20 text-gray-800 rounded-bl-none' 
                      : 'bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white rounded-br-none'
                  }`}
                >
                  {message.text}
                  <div className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-gray-300'}`}>
                    {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </div>
                </div>
                {!message.isBot && (
                  <div className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center text-white ml-2 flex-shrink-0">
                    <span className="text-xs font-bold">TÚ</span>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input */}
          <div className="border-t border-[#8B0000]/20 p-3 flex bg-white rounded-b-lg">
            <input
              type="text"
              value={state.userInput}
              onChange={handleInputChange}
              placeholder="Escribe tu pregunta..."
              className="flex-1 border border-[#8B0000]/30 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B0000] bg-[#FFF8F8]"
            />
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] hover:from-[#6B0000] hover:to-[#5B0000] text-white px-4 py-2 rounded-r-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
    );
};

export default Chatbot;