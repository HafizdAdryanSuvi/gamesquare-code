import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./asset/components/login";
import Register from "./asset/components/register";
import Homepage from "./asset/pages/homepage";
import Footer from "./asset/components/footer";
import Gameinfopage from "./asset/pages/gameinfopage";
import Cartpage from "./asset/pages/cart";
import Profilepage from "./asset/pages/profilepage";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Login/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/home" element={<Homepage/>}/>
                  <Route path="/info" element={<Gameinfopage/>}/>
                  <Route path="/cart" element={<Cartpage/>}/>
                  <Route path="/profile" element={<Profilepage/>}/>
              </Routes>
          </div>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
