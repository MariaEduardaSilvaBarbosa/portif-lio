import React from 'react'
import './App.css'
import Footer from './componentes/footer/Footer'
import Header from './componentes/header/Header'
import Main from './componentes/main/Main'
import Projetos from './componentes/projetos/Projetos'
import Contato from './componentes/contato/Contato'


import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <>
       <Header/>
       <Main/>
       <Projetos/>
       <Footer/>
      </>,
  },
  {
    path: "/sobre",
    element: 
    <>
      <Header/>
      <div className='content-main'>Página Sobre!</div>
      <Footer/>
    </>,
  },
  {
    path: "/noticias",
    element:
    <>
      <Header/>
      <div className='content-main'>Página de Notícias!</div>
      <Footer/>
    </>,
  },
  {
    path: "/contato",
    element: 
    <>
        <Header/>
        <Contato/>
        <Footer/>
      </>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)