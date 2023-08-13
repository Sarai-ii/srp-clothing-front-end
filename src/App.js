//DEPENDENCIES

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//STYLING
// import './App.css';

//PAGES
import Edit from "./Pages/Edit"
import New from "./Pages/New"
import FourOFour from "./Pages/FourOFour"
import Home from "./Pages/Home"
import Index from "./Pages/Index"
import Show from "./Pages/Show"

//COMPONENTS
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import Images from "./Components/Images"
// import CollapsibleSidebar from './Components/Sidebar';


function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        {/* <CollapsibleSidebar /> */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-this-season/:id/images" element={<Images />} />
            <Route path="/new-this-season" element={<Index />} />
            <Route path="/clothes/new" element={<New />} />
            <Route path="/clothes/:id/edit" element={<Edit />} />
            <Route path="/clothes/:id" element={<Show />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        <Footer />
      </Router> 
    </div>
  );
}

export default App;
