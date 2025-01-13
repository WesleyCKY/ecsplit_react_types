import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar.tsx";
import { keepTheme } from './utils/themes';
import Home from './pages/home/index.tsx';
import CreateBill from './pages/createBill/index.tsx';
import History from './pages/history/index.tsx';
import Users from './pages/users/index.tsx';
import Settings from './pages/setting/index.tsx';

const App: React.FC = () => {
  useEffect(() => {
    keepTheme();

})

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Create Bill', href: '/createBill' },
  { label: 'History', href: '/history' },
  { label: 'Users', href: '/users' },
  { label: 'Settings', href: '/settings' },
];

return (
  <div>
    <NavBar 
      brandName="EC Split" 
      navItems={navItems}/>
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createBill" element={<CreateBill />} />
        <Route path="/history" element={<History />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
    
  </div>
);
}
  

export default App;
