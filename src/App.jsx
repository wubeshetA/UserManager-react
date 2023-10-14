import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/NavBar";

const Home = () => <div>Home Page</div>;
const Logs = () => <div>Logs Page</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Logs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
