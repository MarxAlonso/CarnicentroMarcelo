import { useState, useRef, useEffect } from 'react';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

// Base de conocimientos sobre la carnicería
const knowledgeBase = {
  productos: [
    { nombre: "Carne de res", descripcion: "Carne fresca de res de primera calidad", keywords: ["res", "vaca", "ternera", "bistec", "filete"] },
    { nombre: "Pollo", descripcion: "Pollo fresco y orgánico", keywords: ["pollo", "gallina", "ave", "pechuga", "muslo"] },
    { nombre: "Cerdo", descripcion: "Cortes selectos de cerdo", keywords: ["cerdo", "puerco", "lechón", "chuleta", "costilla"] },
    { nombre: "Embutidos", descripcion: "Variedad de embutidos artesanales", keywords: ["embutido", "chorizo", "salchicha", "jamón", "salami"] }
  ],
  horario: "Lunes a Sábado de 8:00 AM a 8:00 PM, Domingos de 9:00 AM a 2:00 PM",
  ubicacion: "Av. Principal #123, Ciudad",
  contacto: "Tel: 555-123-4567, Email: info@carnicentromarcelo.com",
  preguntas_frecuentes: {
    "¿Hacen entregas a domicilio?": "Sí, realizamos entregas a domicilio para pedidos superiores a $500.",
    "¿Aceptan tarjetas de crédito?": "Sí, aceptamos todas las tarjetas de crédito y débito.",
    "¿Tienen productos orgánicos?": "Sí, contamos con una línea de productos orgánicos certificados."
  }
};

// Categorías de palabras clave para mejorar la detección
const keywordCategories = {
  productos: ["producto", "carne", "venden", "ofrecen", "tienen", "venta", "comprar", "adquirir", "catálogo", "disponible"],
  horario: ["horario", "abierto", "cerrado", "hora", "atención", "atienden", "abren", "cierran", "días", "semana", "domingo", "lunes"],
  ubicacion: ["ubicación", "dirección", "donde", "lugar", "encuentran", "localización", "sitio", "establecimiento", "tienda", "local"],
  contacto: ["contacto", "teléfono", "email", "correo", "llamar", "comunicar", "número", "celular", "whatsapp", "mensaje"],
  entrega: ["entrega", "domicilio", "delivery", "envío", "llevan", "casa", "reparto", "servicio", "pedido", "envían"],
  pago: ["tarjeta", "pago", "efectivo", "crédito", "débito", "transferencia", "bancario", "digital", "método", "forma"],
  organico: ["orgánico", "natural", "saludable", "ecológico", "bio", "sustentable", "fresco", "calidad", "premium", "selecto"]
};

// Función para detectar palabras clave en un texto
const detectKeywords = (text: string): string[] => {
  const normalizedText = text.toLowerCase();
  const detectedCategories: string[] = [];
  
  // Buscar coincidencias en cada categoría
  Object.entries(keywordCategories).forEach(([category, keywords]) => {
    if (keywords.some(keyword => normalizedText.includes(keyword))) {
      detectedCategories.push(category);
    }
  });
  
  // Buscar coincidencias específicas de productos
  knowledgeBase.productos.forEach(producto => {
    if (producto.keywords.some(keyword => normalizedText.includes(keyword)) || 
        normalizedText.includes(producto.nombre.toLowerCase())) {
      if (!detectedCategories.includes('producto_especifico')) {
        detectedCategories.push('producto_especifico');
      }
      detectedCategories.push(producto.nombre.toLowerCase().replace(/\s+/g, '_'));
    }
  });
  
  return detectedCategories;
};

// Función para generar respuestas basadas en la consulta del usuario
const generateResponse = (query: string): string => {
  const detectedCategories = detectKeywords(query);
  
  // Si no se detectaron categorías, dar respuesta por defecto
  if (detectedCategories.length === 0) {
    return "Gracias por tu pregunta. Para información más específica, por favor visita nuestra tienda o llámanos al 984-620-910.";
  }
  
  // Priorizar respuestas específicas sobre productos
  if (detectedCategories.includes('carne_de_res')) {
    const producto = knowledgeBase.productos.find(p => p.nombre === "Carne de res");
    return `Ofrecemos ${producto?.nombre} de la mejor calidad. ${producto?.descripcion}. ¿Deseas saber más detalles?`;
  }
  
  if (detectedCategories.includes('pollo')) {
    const producto = knowledgeBase.productos.find(p => p.nombre === "Pollo");
    return `Nuestro ${producto?.nombre} es ${producto?.descripcion}. ¿Te gustaría conocer nuestros cortes disponibles?`;
  }
  
  if (detectedCategories.includes('cerdo')) {
    const producto = knowledgeBase.productos.find(p => p.nombre === "Cerdo");
    return `Tenemos ${producto?.descripcion}. Nuestro cerdo es de granjas seleccionadas. ¿Necesitas información sobre algún corte en particular?`;
  }
  
  if (detectedCategories.includes('embutidos')) {
    const producto = knowledgeBase.productos.find(p => p.nombre === "Embutidos");
    return `Contamos con una ${producto?.descripcion}. Todos son elaborados con ingredientes de primera calidad. ¿Te interesa alguno en especial?`;
  }
  
  // Respuestas por categoría general
  if (detectedCategories.includes('productos')) {
    return `En Carnicentro Marcelo ofrecemos: ${knowledgeBase.productos.map(p => p.nombre).join(', ')}. ¿Deseas información sobre algún producto específico?`;
  }
  
  if (detectedCategories.includes('horario')) {
    return `Nuestro horario de atención es: ${knowledgeBase.horario}`;
  }
  
  if (detectedCategories.includes('ubicacion')) {
    return `Nos encontramos ubicados en: ${knowledgeBase.ubicacion}`;
  }
  
  if (detectedCategories.includes('contacto')) {
    return `Puedes contactarnos a través de: ${knowledgeBase.contacto}`;
  }
  
  if (detectedCategories.includes('entrega')) {
    return knowledgeBase.preguntas_frecuentes["¿Hacen entregas a domicilio?"];
  }
  
  if (detectedCategories.includes('pago')) {
    return knowledgeBase.preguntas_frecuentes["¿Aceptan tarjetas de crédito?"];
  }
  
  if (detectedCategories.includes('organico')) {
    return knowledgeBase.preguntas_frecuentes["¿Tienen productos orgánicos?"];
  }
  
  // Respuesta por defecto si no hay coincidencias específicas
  return "Gracias por tu pregunta. Para información más específica, por favor visita nuestra tienda o llámanos al 555-123-4567.";
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "¡Hola! Soy el asistente virtual de Carnicentro Marcelo. ¿En qué puedo ayudarte hoy?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll al último mensaje
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Agregar mensaje del usuario
    const userMessage: Message = {
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simular tiempo de respuesta
    setTimeout(() => {
      const botResponse: Message = {
        text: generateResponse(userMessage.text),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Botón del chatbot */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#8B0000] hover:bg-[#6B0000] text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105"
      >
        {isOpen ? (
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
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl border border-[#8B0000] flex flex-col transition-all duration-300 animate-fadeIn">
          {/* Encabezado */}
          <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <h3 className="font-medium">Asistente de Carnicentro Marcelo</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Mensajes */}
          <div className="flex-1 p-4 overflow-y-auto max-h-80 bg-[#FFF8F8]">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-3 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!message.isUser && (
                  <div className="h-8 w-8 rounded-full bg-[#8B0000] flex items-center justify-center text-white mr-2 flex-shrink-0">
                    <span className="text-xs font-bold">CM</span>
                  </div>
                )}
                <div 
                  className={`p-3 rounded-lg max-w-[80%] shadow-sm ${
                    message.isUser 
                      ? 'bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white rounded-br-none' 
                      : 'bg-white border border-[#8B0000]/20 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {message.text}
                  <div className={`text-xs mt-1 ${message.isUser ? 'text-gray-300' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </div>
                </div>
                {message.isUser && (
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
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe tu pregunta..."
              className="flex-1 border border-[#8B0000]/30 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B0000] bg-[#FFF8F8]"
            />
            <button
              onClick={handleSendMessage}
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