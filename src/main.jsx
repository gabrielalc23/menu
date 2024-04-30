import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contato from './pages/Contato.jsx';
import { Container } from 'react-bootstrap';
import SobreMim from './pages/SobreMim.jsx';
import Principal from './pages/Principal.jsx';
import Login from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container><Principal /></Container>
  },
  {
    path: "/contato",
    element: <Container><Contato /></Container>
  },
  {
    path: "/sobre-mim",
    element: <Container><SobreMim /></Container>
  },
  {
    path: "/login",
    element: <Container><Login /></Container>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <RouterProvider router={router} />
  </React.StrictMode>
)
