import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/Home.scss";
import "./styles/Header.scss";
import "./styles/home2.scss";
import "./styles/footer.scss";
import Footer from "./components/Footer";
// import Home2 from "./components/Home2";
// import Contact from "./components/Contact";
function App() {
  return (
    <Router>
      <Header />      
      <Routes>        
        <Route path="/" element={<Home />} />       
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
