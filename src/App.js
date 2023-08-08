import { useState } from "react";
import Header from "./components/header";
import DDM from "./components/dropdownmenu";
import Home from "./pages/home";
import { BrowserRouter,Route, Routes} from "react-router-dom";
import Agency from "./pages/agency";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Footer from "./components/footer";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/> 
        <DDM openMenu = {openMenu}/>
        <div style={{ width: "100%" , display: "flex", }}>
          <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/agency" element={ <Agency/> }/>
            <Route path="/services" element={ <Services/> }/>
            <Route path="/contact" element={ <Contact/> }/>
          </Routes>       
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
