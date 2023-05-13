import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from'./pages/home'
import Form from'./pages/form'
import Front from'./pages/front'
function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
