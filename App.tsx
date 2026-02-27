import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './src/pages/Home';
import { Quiz } from './src/pages/Quiz';
import { Sales } from './src/pages/Sales';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/vendas" element={<Sales />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;