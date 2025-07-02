import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Resignation App</h1>
      <div className="space-x-4">
        {!token ? (
          <>
            <Link to="/" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <Link to="/resignation" className="hover:underline">Resignation</Link>
            <Link to="/questionnaire" className="hover:underline">Questionnaire</Link>
            <button onClick={handleLogout} className="ml-2 underline">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}