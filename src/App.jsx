import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/NavBar";
import Home from "./homePage/home";
import Logs from "./LogsPage/Logs";

function App() {
  return (
    <Router>
      <Navbar className=""/>
      <div className="max-w-screen-xl mx-auto px-1 md:px-4 lg:px-4 bg-blue-400">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Logs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
