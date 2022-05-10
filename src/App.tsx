import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles.js';

import Welcome from './components/pages/Welcome';
import EngTopPage from './components/pages/EnTop';
import JpTopPage from './components/pages/JpTop';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Welcome />} />
        <Route path={`/en-top`} element={<EngTopPage />} />
        <Route path={`/jp-top`} element={<JpTopPage />} />
        <Route path={`/*/`} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
