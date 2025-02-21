import { Routes, Route } from 'react-router-dom';
import AdminLayout from '@/layouts/adminLayout';
import Login from '@/pages/login/login';
import Home from '@/pages/index/index';

export default function Router() {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route index element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}
