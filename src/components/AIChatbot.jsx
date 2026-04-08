import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import './AIChatbot.css';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: '¡Hola! Soy SyrtixAI. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const SECRET = "syrtix_super_secret_123"; // En prod esto debería venir de una variable de entorno

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/ia/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SECRET}`
        },
        body: JSON.stringify({ 
          question: userMsg,
          history: messages 
        })
      });

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'ai', text: data.answer }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: 'Lo siento, perdí conexión con mi cerebro. ¿Está el servidor encendido?' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="syrtix-chatbot-wrapper">
      {/* Botón Flotante */}
      <button 
        className={`chat-bubble ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
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
            <button className="close-btn" onClick={() => setIsOpen(false)}><X size={18} /></button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message-row ${msg.role}`}>
                <div className="avatar">
                  {msg.role === 'ai' ? <Bot size={14} /> : <User size={14} />}
                </div>
                <div className="message-text">
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message-row ai">
                <div className="avatar"><Bot size={14} /></div>
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
