import React, { useState, useEffect } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [query, setQuery] = useState(''); // Domanda dell'utente
  const [conversation, setConversation] = useState([]); // Chat history
  const [loading, setLoading] = useState(false); // Stato di caricamento

  // Funzione per inviare una domanda al backend
  const handleAsk = async () => {
    if (!query.trim()) return; // Evita richieste vuote

    // Mostra subito il messaggio dell'utente
    const userMessage = { role: 'user', content: query };
    setConversation((prev) => [...prev, userMessage]);
    setQuery(''); // Resetta il campo input
    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:5000/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();

      if (response.ok) {
        const assistantMessage = { role: 'assistant', content: data.answer };
        setConversation((prev) => [...prev, assistantMessage]);
      } else {
        const errorMessage = {
          role: 'assistant',
          content: `Errore: ${data.error || 'Impossibile ottenere una risposta'}`,
        };
        setConversation((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      const errorMessage = {
        role: 'assistant',
        content: 'Errore nella connessione al server.',
      };
      setConversation((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  // Aggiungi il messaggio automatico all'inizio della conversazione
  useEffect(() => {
    const welcomeMessage = {
      role: 'assistant',
      content:
        "Ciao, sono il tuo assistente virtuale! Sarò felice di rispondere alle tue domande e fornirti assistenza tecnica.",
    };
    setConversation([welcomeMessage]); // Aggiungi il messaggio di benvenuto all'inizio
  }, []);

  return (
    <div className="dashboard-container mt-20">
      <div className="chatbox">
        <div className="chatbox-header">
          <h2>Chat Assistente</h2>
        </div>
        <div className="chatbox-body">
          {conversation.map((msg, index) => (
            <div
              key={index}
              className={`message ${
                msg.role === 'user' ? 'user-message' : 'assistant-message'
              }`}
            >
              {msg.content}
            </div>
          ))}
          {loading && <div className="loading-message">Sto pensando...</div>}
        </div>
        <div className="chatbox-footer">
          <input
            type="text"
            placeholder="Scrivi la tua domanda..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
          />
          <button onClick={handleAsk} disabled={loading}>
            {loading ? 'Invio...' : 'Invia'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
