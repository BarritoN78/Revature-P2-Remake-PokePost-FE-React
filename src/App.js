import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Register from "./components/register";
import Gallery from "./components/gallery";
import Fanart from "./components/fanart";
import Pokemon from "./components/pokemon";
import UserProfile from "./components/userProfile";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<p>Home Component</p>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/fanart/:id" element={<Fanart />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
            <Route path="/user/:id" element={<UserProfile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
