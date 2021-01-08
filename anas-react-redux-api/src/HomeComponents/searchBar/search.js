import React, { Component } from 'react';
import "../searchBar/search.css";
import axios from "axios";
import { connect } from "react-redux";


class search extends Component {
    //constructor 
     constructor(props) {
         super(props);
         this.state = {
            ingredient1: "",
            ingredient2: "",
        };
    }
    
    //event handler for first ingredient
    handleIngredient1Change = (e) => {
        this.setState({
            ingredient1: e.target.value,
        });
    };
    
    //event handler for second ingredient
    handleIngredient2Change = (e) => {
        this.setState({
            ingredient2: e.target.value,
        });
    };

    //event handler for submit button
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.get_data(this.state);
        document.getElementsByClassName("search")[0].style.display="none";
        document.getElementsByClassName("loader")[0].style.display="flex";
    };
    handleTry = (e) => {
        e.preventDefault();
        document.getElementsByClassName("search")[0].style.display="flex";
        document.getElementsByClassName("invalid-input")[0].style.display="none";
    }
    handleState = () => {};
    render() {
        return (
            <div className="wrapsearch">
                <form onSubmit = {this.handleSubmit}>
                    <div className="search">
                        <input 
                            className="search-input"
                            type="text"
                            placeholder="Ingredient 1 .."
                            value = {this.state.ingredient1}
                            onChange = {this.handleIngredient1Change}
                            required
                        ></input>

                        <input 
                            className="search-input"
                            type="text"
                            placeholder="Ingredient 2 .."
                            value = {this.state.ingredient2}
                            onChange = {this.handleIngredient2Change}
                            required
                        ></input>

                        <button
                            className="submit-button"
                            type="submit"
                            onClick={this.handleState}
                        >Submit</button>
                    </div>
                    <div className="loader">
                        <div class="lds-facebook"><div></div><div></div><div></div></div>
                    </div>
                    <div className="invalid-input">
                        <h2>OPPS! No no recipe found for this ingredient combination</h2>
                        <button
                            className="try-again"
                            onClick={this.handleTry}
                        >Try Again</button>
                    </div>
                </form>
                
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      get_data: (data) => {
        console.log("data from getdata", data);
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `http://www.recipepuppy.com/api/?i=${data.ingredient1}&q=${data.ingredient2}`;
        axios({
          method: "get",
          url: proxyurl + url,
        }).then(function (response) {
            let resp = response.data.results;
            console.log("inside resp");
            console.log(resp);
            document.getElementsByClassName("loader")[0].style.display="none";
            if(resp.length === 0){
                document.getElementsByClassName("loader")[0].style.display="none";
                document.getElementsByClassName("search")[0].style.display="none";
                document.getElementsByClassName("invalid-input")[0].style.display="flex";
            }
            else{
                dispatch({ type: "GET_DATA", payload: response.data.results });
                document.getElementsByClassName("search")[0].style.display="flex";
            }
        });
      },
    };
};
  
export default connect(null, mapDispatchToProps)(search);
