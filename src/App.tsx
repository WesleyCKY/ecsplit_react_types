import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar.tsx";
import { keepTheme } from './utils/themes';
import Settings from './pages/setting/index.js';
// import NoPage from "./pages/NoPage";

function App() {
  useEffect(() => {
      keepTheme();
  })
  const navItems = [
    { label: 'Home', href: '#index' },
    { label: 'Create Bill', href: '#createBill' },
    { label: 'History', href: '#history' },
    { label: 'Users', href: '#users' },
    { label: 'Settings', href: '#settings' },
  ];
  return (
    <div>
      <NavBar 
      brandName="EC Split" 
      navItems={navItems}/>
      {/* <Route path="/" component={Home} />
      <Route path="/about" component={About} /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Settings />}>
          <Route index element={<Settings />} />
          <Route path="settings" element={<Settings />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}
export default App;
