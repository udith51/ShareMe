import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './containers/Home';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    // <h1 class="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
    // <div className="h-screen underline bg-slate-400 text-green-400">Bh</div>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
