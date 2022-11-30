import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Hello from './components/Hello.js'
import './App.css';

const Hello = () => {
  return (
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
