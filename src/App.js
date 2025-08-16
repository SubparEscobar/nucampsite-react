import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import HomePage from './pages/HomePage';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsiteDetailPage from './pages/CampsiteDetailPage';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='directory' element={<CampsitesDirectoryPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route
            path='directory/:campsiteId'
            element={<CampsiteDetailPage />}
          />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
