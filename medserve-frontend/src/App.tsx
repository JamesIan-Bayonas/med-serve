import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MedicineBatchesPage from './pages/MedicineBatches';
import Dashboard from './pages/Dashboard.tsx';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* By default, force everyone to the login screen */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* The Authentication Gate */}
        <Route path="/login" element={<Login />} />

        {/* The Protected Views */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/batches" element={<MedicineBatchesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;