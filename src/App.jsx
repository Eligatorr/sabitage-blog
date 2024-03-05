
import 'tailwindcss/tailwind.css'
import './App.css'
// Faire votre système de pages, routes, route ici
// Toutes les routes à créer correspondent au dossier pages donc 4 routes à faire
import {Routes, Route} from "react-router-dom"
import React from 'react';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Contact from './pages/Contact';
import Author from './pages/Author';
import Footer from './components/Footer';
import Menu from './components/MenuCustom'
import LatestArticles from './components/LatestArticles'



const App = () => {
              // <Route path="/" component={<Home />} />
              
              {/* */}
  return (

    <>
    <Menu />
    
    <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<Article />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/auteurs" element={<Author />} />
         {/* <Route path="*" element={<NotFound />} */}
          
    </Routes>  
    
         
   </>
  
   
  );
}
export default App
