import React from 'react';
import { Route,Routes, createBrowserRouter, createRoutesFromElements, RouterProvider,useLocation, BrowserRouter } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Homepage from './pages/Homepage';

import Navbar from './components/Navbar'

import Unkownpage from './pages/Unkownpage';
import CommentsPage from './pages/CommentsPage';
import ContactMePage from './pages/ContactMePage';
import Projectpage from './pages/Projectpage';
import MyProjects from './pages/MyProjects';
  function Animatedroutes () {
    const location = useLocation();
    console.log(location.pathname);
    return(
  <AnimatePresence  mode='wait'>
  <Routes location={location} key={location.pathname}>
  
        <Route
       index
          element={
                <PageWrapper>
                <Homepage />
                </PageWrapper>
          }
        />
        <Route
          path='/comments'
          element={
             <PageWrapper>
                <CommentsPage />
                </PageWrapper>
          }
        />

        <Route
          path='/job/:id'
          element={
            <PageWrapper>
                <Projectpage />
                </PageWrapper>
          }
         
        />

        <Route
          path='/Contactme'
          element={    
        <PageWrapper>      
                <ContactMePage />
                </PageWrapper>
          }
        />
        <Route
          path='*'
          element={
            <PageWrapper>
                <Unkownpage />
                </PageWrapper>
          }
        />
        <Route
          path='/MyProjects'
          element={
            <PageWrapper>
                <MyProjects />
                </PageWrapper>
          }
        />
  </Routes>
  </AnimatePresence>
    );
  }
  function PageWrapper({children}){
    return(
    <motion.div
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    exit={{opacity:0,y:20}}
    transition={{duration:0.7}}
    >
      {children}
    </motion.div>
    )
  }
const App = () => {

 
  return (
    <BrowserRouter>
    <Navbar/>
   <Animatedroutes/>
  </BrowserRouter>
  )

};

export default App;
