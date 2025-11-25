import { Link, Route, Routes } from 'react-router-dom'

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import UserDetail from './pages/UserDetail';

function App() {

  return (
    <>
      <nav style={{ display: "flex", gap: "16px" }}>
        {/* SPAページでの遷移 */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact" target="_blank">Contact</Link>
        {/* ↑ target =blankも使える */}

        {/* ルートパラメーターを扱う場合 */}
        <Link to="/users/1">user01</Link>
        <Link to="/users/2">user02</Link>
      </nav>

      {/* Routesの外にHeaderコンポーネントを入れる */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>

      {/* Routesの外にFooterコンポーネントを入れる */}
      <Footer />
    </>
  )
}

export default App
