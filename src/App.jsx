import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from '.';

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
        <Link to="/dashboard">ダッシュボード</Link>

      </nav>

      {/* Routesの外にHeaderコンポーネントを入れる */}
      <Header />

      {/* ルーティングのコンポーネントを読み込み */}
      <AppRouter />

      {/* Routesの外にFooterコンポーネントを入れる */}
      <Footer />
    </>
  )
}

export default App
