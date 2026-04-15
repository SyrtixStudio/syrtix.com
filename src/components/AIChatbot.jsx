import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import './AIChatbot.css';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: '¡Hola! Soy SyrtixAI. ¿En qué puedo ayudarte hoy?' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const SECRET = import.meta.env.VITE_SYRTIX_SECRET || 'syrtix_super_secret_123';
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    const N8N_URL = import.meta.env.VITE_N8N_WEBHOOK_URL;

    try {
      const response = await fetch(N8N_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'CHATBOT',
          pregunta: userMsg,
          history: messages,
        }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: 'ai', text: data.answer || data.response || '¡He recibido tu mensaje!' },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: 'ai', text: 'Lo siento, mi conexión con el cuartel general está fallando.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Función simple para parsear enlaces [Texto](URL) y transformarlos en <a>
  const renderMessageText = (text) => {
    if (!text) return '';

    // Regex para encontrar [Texto](URL)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      // Agregar texto antes del match
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      // Agregar el enlace como un componente
      parts.push(
        <a
          key={match.index}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="chat-link"
        >
          {match[1]}
        </a>,
      );

      lastIndex = linkRegex.lastIndex;
    }

    // Agregar el resto del texto
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <div className="syrtix-chatbot-wrapper group relative">
      {/* Tooltip */}
      {!isOpen && (
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-sm font-medium px-3 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Asistencia con Syrtix IA
        </span>
      )}

      {/* Botón Flotante */}
      <button
        className={`chat-bubble ${isOpen ? 'active' : ''} overflow-hidden`}
        onClick={() => setIsOpen(!isOpen)}
        style={!isOpen ? { padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' } : {}}
      >
        {isOpen ? <X size={28} /> : (
          <div className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center overflow-hidden">
            <img 
              src="/img/img_syrtix_ia/chatbot_proposal_2.png" 
              alt="Syrtix IA" 
              className="w-[180%] h-[180%] max-w-none object-cover" 
            />
          </div>
        )}
      </button>

      {/* Ventana de Chat */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <Bot size={24} className="bot-icon" />
            <div className="header-info">
              <h3>Syrtix AI</h3>
              <span>Online</span>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message-row ${msg.role}`}>
                <div className="avatar">
                  {msg.role === 'ai' ? <Bot size={14} /> : <User size={14} />}
                </div>
                <div className="message-text">{renderMessageText(msg.text)}</div>
              </div>
            ))}

            {isLoading && (
              <div className="message-row ai">
                <div className="avatar">
                  <Bot size={14} />
                </div>
                <div className="message-text typing">Escribiendo...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              placeholder="Escribe tu duda..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend} disabled={isLoading}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatbot;
