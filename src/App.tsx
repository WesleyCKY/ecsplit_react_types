import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar.tsx";
import { keepTheme } from './utils/themes';
import Home from './pages/home/index.tsx';
import Bills from './pages/bills/index.tsx';
import Users from './pages/users/index.tsx';
import Settings from './pages/setting/index.tsx';
import { Watermark } from '@hirohe/react-watermark';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
});

const App: React.FC = () => {
  useEffect(() => {
    keepTheme();

}, []);

const baseUrl = "/ecsplit";

const navItems = [
  { label: 'Home', href: baseUrl },
  { label: 'Bills', href: baseUrl + '/bills' },
  { label: 'Users', href: baseUrl + '/users' },
  { label: 'Settings', href: baseUrl + '/settings' },
];

return (
  <I18nextProvider i18n={i18next}>
    <Watermark text="beta" gutter={10} opacity={0.05} textColor='#000000'>
    <div>
      <NavBar 
      brandName="EC Split" 
      navItems={navItems}/>
      <BrowserRouter basename="/ecsplit">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
    <div className="message" id="message-box"></div>
    </div>
  </Watermark>
  </I18nextProvider>
  
);
}
  

export default App;
