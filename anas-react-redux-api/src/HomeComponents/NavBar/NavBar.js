import React, { Component } from 'react';
import "./NavBar.css";

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="nav-tittle">
                    <div className="main-tittle">Cuisine Culture</div>
                    <div className="sub-tittle">Know your Food!</div>
                </div>
                <div className="nav-icon">
                    <div className="icon"> HOME : </div>
                    <div className="icon"> FEATURES : </div>
                    <div className="icon"> BLOG STYLE : </div>
                    <div className="icon"> MEGA MENU : </div>
                    <div className="icon"> SHOP : </div>
                </div>
            </div>
        );
    }
}
export default NavBar;