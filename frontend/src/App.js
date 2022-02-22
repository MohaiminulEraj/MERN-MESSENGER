import React from 'react'
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import Login from './components/auth/LoginPage/Login';
import Register from './components/auth/RegisterPage/Register';
import Dashboard from './components/home/Dashboard';
import AlertNotification from './components/layout/AlertNotification';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Navigate to="/dashboard" replace={true} />} />
        </Routes>
      </Router>
      <AlertNotification />
    </>
  )
}

export default App
