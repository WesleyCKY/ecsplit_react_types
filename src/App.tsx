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

const baseUrl = "/ecsplit";

const navItems = [
  { label: 'Home', href: baseUrl },
  { label: 'Create Bill', href: baseUrl + '/createBill' },
  { label: 'History', href: baseUrl + '/history' },
  { label: 'Settings', href: baseUrl + '/settings' },
  { label: 'Users', href: baseUrl + '/users' },
];

return (
  <div>
    <NavBar 
      brandName="EC Split" 
      navItems={navItems}/>
      
    <BrowserRouter basename="/ecsplit">
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
