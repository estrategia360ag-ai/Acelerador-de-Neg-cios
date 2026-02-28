import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Home } from './src/pages/Home';
import { Quiz } from './src/pages/Quiz';
import { Sales } from './src/pages/Sales';
import { SalesV2 } from './src/pages/SalesV2';
import { SalesVSL2 } from './src/pages/SalesVSL2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/vendas" element={<Sales />} />
        <Route path="/vendas-v2" element={<SalesV2 />} />
        <Route path="/venda-todo-dia-vsl2" element={<SalesVSL2 />} />
      </Routes>
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;