import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ResignationForm from './pages/ResignationForm';
import ExitQuestionnaire from './pages/ExitQuestionnaire';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/resignation" element={<ProtectedRoute><ResignationForm /></ProtectedRoute>} />
        <Route path="/questionnaire" element={<ProtectedRoute><ExitQuestionnaire /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;