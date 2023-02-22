import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import { About } from './Component/About';
import { Report } from './Component/Report';
import Settings from './Component/Settings';
import { Sidenav } from './Component/Sidenav';
import { Navbar } from './Component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter >
        <Sidenav >
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/about' element={<About />} />
            <Route path='/report' element={<Report />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </Sidenav>
      </BrowserRouter>
    </div>
  );
}

export default App;
