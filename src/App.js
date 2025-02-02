import React from  'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/layout';
import AboutMe from './pages/aboutMe';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Portfolios from './pages/portfolios';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<AboutMe />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='resume' element={<Resume />}></Route>
        <Route path='portfolio' element={<Portfolios />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
  
  export default App;