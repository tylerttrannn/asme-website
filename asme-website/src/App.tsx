import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage from './FrontPage'; 
import Links from './pages/Links';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </BrowserRouter>
  );
}