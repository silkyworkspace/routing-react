// App.jsxと同じ階層にすることで、移植時に
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserDetail from './pages/UserDetail';
import NotFound from './pages/NotFound'
import DashboardLayout from './layouts/DashboardLayout';
import DashboardProfile from './components/DashboardProfile'
import DashboardSettings from './components/DashboardSettings'

export default function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/users/:id" element={<UserDetail />} />

                {/* 親ルート（レイアウト） */}
                <Route path="/dashboard" element={<DashboardLayout />}>
                    {/* 子ルート */}
                    <Route path="profile" element={<DashboardProfile />} />
                    <Route path="settings" element={<DashboardSettings />} />
                </Route>


                <Route path="*" element={<NotFound />} />

            </Routes>
        </>
    )
}
