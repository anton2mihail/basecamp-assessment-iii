import React  from 'react';
import ReactDOM from 'react-dom';

class Nav extends React.Component{
    render(){
        return(
            <ul className="Navbar">
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Randoms</li>
            </ul>
        );
    }
}

export default Nav;
