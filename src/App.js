import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import ResetPW from "./components/resetPW";
import Gallery from "./components/gallery";
import Fanart from "./components/fanart";
import Pokemon from "./components/pokemon";
import UserProfile from "./components/userProfile";
import { Component } from "react";
import Pokedex from "./components/pokedex";

class App extends Component {
  state = {
    currentUser: localStorage.getItem("user"),
  };

  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  render() {
    return (
      <div className="container">
        <Navbar user={this.state.currentUser} onLogout={this.handleLogout} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<Login onLogin={this.handleLogin} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/resetpw" element={<ResetPW />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/fanart/:id" element={<Fanart />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
            <Route path="/user/:id" element={<UserProfile />} />
          </Routes>
        </div>
      </div>
    );
  }

  handleLogin = () => {
    console.log("handleLogin called");
    this.setState({ currentUser: { id: 1, username: "randoMcGee" } }); //Load user from http request later
    this.props.navigate("/");
  };

  handleLogout = () => {
    this.setState({ currentUser: undefined });
    //Alert the user of logout success
  };
}

export function AppWithRouter(props) {
  const navigate = useNavigate();
  return <App navigate={navigate}></App>;
}

export default App;
