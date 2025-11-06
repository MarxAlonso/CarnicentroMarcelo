import { BOT_RESPONSES, KEYWORDS } from '../constants/chatbot.constants';

interface ChatContext {
    lastCategory: string | null;
    lastQuery: string | null;
}

const context: ChatContext = {
    lastCategory: null,
    lastQuery: null
};

export const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase().trim();
    
    // Actualizar el contexto con la consulta actual
    context.lastQuery = input;

    // Verificar saludo
    if (KEYWORDS.GREETING.some(keyword => input.includes(keyword))) {
        context.lastCategory = null;
        return getRandomResponse(BOT_RESPONSES.GREETING);
    }

    // Si el contexto anterior era sobre res y ahora pregunta por una categoría específica
    if (context.lastCategory === 'res') {
        if (input.includes('guiso') || input.includes('guisos')) {
            return BOT_RESPONSES.GUISOS()[0];
        }
        if (input.includes('bisteck') || input.includes('bistecks')) {
            return BOT_RESPONSES.BISTECKS()[0];
        }
        if (input.includes('asado') || input.includes('asados')) {
            return BOT_RESPONSES.ASADOS()[0];
        }
        if (input.includes('sanchochado') || input.includes('sanchochados')) {
            return BOT_RESPONSES.SANCHOCHADOS()[0];
        }
        if (input.includes('molida')) {
            return BOT_RESPONSES.CARNE_MOLIDA()[0];
        }
    }

    // Verificar consultas sobre carne de res en general
    if (KEYWORDS.PRODUCTS_RES.some(keyword => input.includes(keyword))) {
        context.lastCategory = 'res';
        return getRandomResponse(BOT_RESPONSES.PRODUCTS_RES);
    }

    // Verificar consultas sobre carne de cerdo
    if (KEYWORDS.PRODUCTS_CERDO.some(keyword => input.includes(keyword))) {
        context.lastCategory = 'cerdo';
        if (input.includes('chuleta')) {
            return BOT_RESPONSES.CERDO_CHULETAS()[0];
        }
        return BOT_RESPONSES.CERDO_CORTES()[0];
    }

    // Verificar consultas específicas sin contexto previo
    if (input.includes('guiso') || input.includes('guisos')) {
        return BOT_RESPONSES.GUISOS()[0];
    }
    if (input.includes('bisteck') || input.includes('bistecks')) {
        return BOT_RESPONSES.BISTECKS()[0];
    }
    if (input.includes('asado') || input.includes('asados')) {
        return BOT_RESPONSES.ASADOS()[0];
    }
    if (input.includes('sanchochado') || input.includes('sanchochados')) {
        return BOT_RESPONSES.SANCHOCHADOS()[0];
    }
    if (input.includes('molida')) {
        return BOT_RESPONSES.CARNE_MOLIDA()[0];
    }

    // Verificar consultas generales sobre productos
    if (KEYWORDS.PRODUCTS_GENERAL.some(keyword => input.includes(keyword))) {
        context.lastCategory = null;
        return "Tenemos una gran variedad de carnes de res y cerdo. ¿Te gustaría saber sobre algún tipo específico? Puedes preguntarme por:\n- Carne de res (bistecks, asados, guisos, sanchochados, molida)\n- Carne de cerdo (cortes especiales, chuletas)";
    }

    // Verificar ubicación
    if (KEYWORDS.LOCATION.some(keyword => input.includes(keyword))) {
        context.lastCategory = null;
        return getRandomResponse(BOT_RESPONSES.LOCATION);
    }

    // Respuesta por defecto
    context.lastCategory = null;
    return "¿Te puedo ayudar con información sobre:\n" +
           "- Carne de res: bistecks, asados, guisos, sanchochados, molida\n" +
           "- Carne de cerdo: cortes especiales, chuletas\n" +
           "- Ubicación y horarios\n" +
           "¿Qué te gustaría saber?";
};

export const getRandomResponse = (responses: string[]): string => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
};