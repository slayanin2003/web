import { Route, Routes } from 'react-router-dom';
import NavPanel from './layout/Nav';
import About_Us from "./pages/About Us"
import Contacts from "./pages/Contacts"
import FAQ from "./pages/FAQ"
import Portfolio from './pages/Portfolio'
import Products from './pages/Products'
import Services from './pages/Services'

function App() {
  return (
    <div className="App">
      <NavPanel />
        <Routes>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/about_us' element={<About_Us />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/faq' element={<FAQ />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
        </Routes>
    </div>
  );
}

export default App;
