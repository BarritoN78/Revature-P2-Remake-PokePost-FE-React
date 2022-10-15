import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (<div>
            <Link to="/"><img src="https://picsum.photos/200" alt="PokePost logo"/></Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Gallery</Link></li>
                [/*Add Conditional Render for User Profile */]
                <li><Link to="/">Login</Link></li>
            </ul>
            </div>);
    }
}
 
export default Navbar;