import React from "react";
import { Toaster } from 'react-hot-toast';
import Sticky from 'react-stickynode';
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
import { ChatContextProvider } from "./contexts/ChatContext";
import AuthForm from "./components/AuthForm";
import RegisterForm from "./components/RegisterForm";
import Messages from "./components/Messages";
import Home from './pages/Home'
import "./App.css";
import NavBar from "./layouts/NavMenu";
import 'react-responsive-modal/styles.css';
import ProtectedRoute from "./auth/ProtectedRoutes";


function App() {

  return (
    <UserAuthContextProvider>
      <ChatContextProvider>
        <Toaster style={{ zIndex: "9999999" }} />
        <div style={{ position: 'relative', minHeight: '100vh', margin: '15px' }}>
          {/* <Sticky enabled={true} style={{ zIndex: "9999999999" }} bottomBoundary={1000}> */}
          <NavBar />
          {/* </Sticky> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<AuthForm />} />
            <Route path="/signup" element={<RegisterForm />} />
            <Route
              path="/messages"
              element={
                <ProtectedRoute>
                  <Messages />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </ChatContextProvider>
    </UserAuthContextProvider>
  );
}

export default App;