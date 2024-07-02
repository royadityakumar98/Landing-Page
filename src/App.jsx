import Navbar from "./components/Navbar";
import { Route,Routes } from 'react-router-dom';
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Profile from "./components/pages/Profile";
import Contact from "./components/pages/Contact";

function App() {

  return (
    <>
     <Navbar />
       <main>
         <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/contact" element={<Contact />}/>

         </Routes>

       </main>



   
    </>
  )
}

export default App
