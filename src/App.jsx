import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/NavBar";
import Home from "./homePage/home";
import Logs from "./LogsPage/Logs";
// import axios from 'axios';



function App() {
  return (
    <Router>
      <Navbar className=""/>
      <div className="max-w-screen-xl mx-auto px-1 md:px-4 lg:px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Logs />} />
        </Routes>
      </div>
      <div className="bg-yellow-400 flex items-center flex-col bottom-0">FOOTER
      </div>
    </Router>
  );
}

export default App;
