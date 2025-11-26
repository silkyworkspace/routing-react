// src/layouts/DashboardLayout.jsx
import { Outlet, Link } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <div style={{ display: "flex" }}>
            {/* サイドメニュー */}
            <aside style={{ width: "200px", padding: "16px", background: "#f4f4f4" }}>
                <h2>Dashboard</h2>
                <ul>
                    <li><Link to="/dashboard/profile">プロフィール</Link></li>
                    <li><Link to="/dashboard/settings">設定</Link></li>
                </ul>
            </aside>

            {/* 子ページが切り替わる場所 */}
            <main style={{ flex: 1, padding: "16px" }}>
                {/* 子ページが差し込まれる穴 */}
                <Outlet />
            </main>
        </div>
    );
}