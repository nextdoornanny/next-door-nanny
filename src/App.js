import React from "react";
import { Toaster } from 'react-hot-toast';
import Sticky from 'react-stickynode';
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
import AuthForm from "./components/AuthForm";
import RegisterForm from "./components/RegisterForm";
import Home from './pages/Home'
import "./App.css";
import NavBar from "./layouts/NavMenu";
import 'react-responsive-modal/styles.css';


function App() {

  return (
    <UserAuthContextProvider>
      <Toaster style={{ zIndex: "9999999" }} />
      <div style={{ position: 'relative', minHeight: '100vh', margin: '5px' }}>
        <Sticky style={{ zIndex: '99 !important' }} enabled={true} bottomBoundary={1000}>
          <NavBar />
        </Sticky>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/signup" element={<RegisterForm />} />
        </Routes>
      </div>
    </UserAuthContextProvider>
  );
}

export default App;