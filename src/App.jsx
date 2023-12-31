import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/NavBar";
import Home from "./homePage/Home";
import Logs from "./LogsPage/Logs";
// import axios from 'axios';



function App() {
  return (
    <Router >
      <Navbar/>
      <div className="max-w-screen-xl mx-auto px-1 md:px-4 lg:px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Logs />} />
        </Routes>
      </div>
      <div className=" flex items-center flex-col bottom-0">
      </div>
    </Router>
  );
}

export default App;
