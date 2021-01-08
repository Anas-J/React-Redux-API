import React, { Component } from 'react';
import NavBar from "../HomeComponents/NavBar/NavBar";
import Carousel from "../HomeComponents/Carousel/carousel";
import Searchbar from "../HomeComponents/searchBar/search";
import "./home.css"


//Home page
class Home extends Component {
    render() {
        return (
            <div className="wrapper">           
                <div>
                    <NavBar></NavBar>                   {/* import navbar */}
                </div>
                <div className="content-wrapper">
                    <div className="wrap-carous">
                        <Carousel></Carousel>               {/* import carousel */}
                    </div>
                    <div className="search-wrapper">
                        <Searchbar></Searchbar>         {/* import carousel */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;