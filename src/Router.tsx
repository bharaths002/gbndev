import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import TestimonialsPage from './pages/TestimonialsPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
      </Routes>
    </BrowserRouter>
  );
}