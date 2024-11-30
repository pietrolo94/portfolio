import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Per la navigazione dopo il login

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false); // Stato per gestire la vista tra Login e SignUp
  const navigate = useNavigate(); // Hook per navigare dopo il login

  // Gestione del login
  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    if (email === 'user@example.com' && password === 'password123') {
      setError(null);  // Rimuovi eventuali errori
      navigate('/dashboard'); // Redirigi l'utente alla pagina della dashboard
    } else {
      setError('Invalid credentials');
    }
  };

  // Gestione della registrazione
  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    // Aggiungi la logica per la registrazione (ad esempio, inviare i dati al server)
    setError(null);
    alert('User registered successfully');
    setIsSignUp(false); // Dopo il sign-up, torna alla pagina di login
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h2 className="text-3xl font-bold mb-6">{isSignUp ? 'Sign Up' : 'Login'}</h2>

      <form
        onSubmit={isSignUp ? handleSignUp : handleLogin}
        className="w-80 bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700"
        >
          {isSignUp ? 'Sign Up' : 'Log In'}
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-gray-600">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-indigo-600 hover:text-indigo-800"
          >
            {isSignUp ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;

