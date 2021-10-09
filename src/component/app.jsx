import React, { Component } from 'react';
import axios from 'axios';
import Range from "react-range";

import 'react-pro-sidebar/dist/css/styles.css';

import './app.css';

class App extends Component {
  state = {
    categories: [],
    products: [],
    colors: [],
    value:0
  };

  //to get the products data from backend
  async componentDidMount(){
    let {data} = await axios.get('http://test-api.edfa3ly.io/product');
    this.setState({products:data});
  }   

  //to get the categories data from backend
  async componentWillMount(){
    let {data} = await axios.get('http://test-api.edfa3ly.io/category');
    //SetState
    this.setState({categories:data});
  }

  //Choose category id and show cards upon it
  handleCategoryChoose = () => {
    var selectedCategory = document.querySelector('input[type=radio][id=categoryFilter]:checked').value;
    console.log(selectedCategory);
    //Clone
    //Update
    let products = this.state.products.filter(product => 
      ( product.categoryId == selectedCategory )
    )
    //SetState
    this.setState({products});
  }

  //to handle the price filter
  handlePriceFilter = ()=> {
    let priceValue = document.getElementById("priceFilter").value;
    console.log(priceValue);

    let products = this.state.products.filter(product => 
      (
      product.price <= priceValue 
      ));

      //setState
    this.setState({products});
    console.log(products);
  }

    //to handle the color filter
  handleColorFilter = ()=> {
    let selectColor = document.getElementById("selectColor").selectedIndex;
    let colorValue = document.getElementsByTagName("option")[selectColor].value;
    console.log(colorValue);

    //Clone
    //Update
    let products = this.state.products.filter(product => 
      (
      product.color == colorValue
      ));
        //setState
    this.setState({products});
    console.log(products);
  }

  //to handle the rate filter
  handleRateFilter = ()=> {
    var rateValue = document.querySelector('input[type=radio][id=rateFilter]:checked').value;
    console.log(rateValue);

    //Clone
    //Edit
    let products = this.state.products.filter(product => 
      (
      product.rating == rateValue
      )
     )
    //setState
    this.setState({products});
    console.log(products);
  }

  //to show rating in cards
  ratingStars = (rating) => {
    var stars = '<i className="fas fa-star"></i>';
    var rate="";
    for (let i = 0; i < rating; i++) 
    {
      rate += stars;
    }
    return document.getElementsByClassName("card-rate").innerHTML = stars; 
  }

 
  render() { 
    return (
      <React.Fragment>
        <div className="container-fluid">


          {/*the header of the page*/}
          <div className="title text-center">
            <h1 className="m-2">Our e-commerce store</h1>
            <p>Choose one of our categories from below</p>
          </div>

          {/*choose one category to see products within it*/}
          <div className="card-group text-center">
              {this.state.categories.map(category => (
                <div className="card m-2" key={category.id} onClick={this.handleCategoryChoose}>
                  <img src={category.image} className="card-img-top" />
                  <div className="card-body">
                    <input className="form-check-input" type="radio" name="categoryFilter" id="categoryFilter" value={category.id}/>
                    <h5 className="card-title">{category.name}</h5>
                  </div>
                </div>
              ))}
          </div>

          {/*the main page*/}
          <div className="row">

          {/*sidebar*/}
          <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="slider">
              <div className="slider-title m-1">Filter</div>
              <hr/>

              <div className="SidebarContent">
                <div className="filters">

                  <div className="price-filter">
                    <div className="priceTitle">Price range</div>
                    <div className="mb-3">
                      <label htmlFor="priceFilter">Price from 0 to 1000</label>
                      <input type="range" list="tickmarks" className="form-range" id="priceFilter" name="price" min="0" max="1000" step="100" onChange={this.handlePriceFilter}/>
                    {/* <datalist id="tickmarks">
                            <option value="0">0</option>
                            <option value="10">100</option>
                            <option value="20">200</option>
                            <option value="30">300</option>
                            <option value="40">400</option>
                            <option value="50">500</option>
                            <option value="60">600</option>
                            <option value="70">700</option>
                            <option value="80">800</option>
                            <option value="90">900</option>
                            <option value="100">1000</option>
                          </datalist> */}
                    </div>
                  </div>
                      
                  <hr/>

                  <div className="color-filter">
                    <div className="colorTilte">Color</div>
                    <div className="input-group mb-3">
                      <select className="form-select" id="selectColor" onChange={this.handleColorFilter}>
                      {this.state.products.map(product => (
                        <option key={product.id} value={product.color} id="colorFilter">{product.color}</option>
                      ))}
                    </select>
                    </div>
                  </div>

                  <hr/>

                  <div className="rate-filter">
                    <div className="rateTilte">Average rating</div>
                      <div onChange={this.handleRateFilter}>
                        <div className="m-2">
                          <input className="m-2" type="radio" name="rateFilter" id="rateFilter" value="5"/>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <div className="m-2">
                            <input className="m-2" type="radio" name="rateFilter" id="rateFilter" value="4"/>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="m-2">
                            <input className="m-2" type="radio" name="rateFilter" id="rateFilter" value="3"/>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="m-2">
                            <input className="m-2" type="radio" name="rateFilter" id="rateFilter" value="2"/>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="m-2">
                            <input className="m-2" type="radio" name="rateFilter" id="rateFilter" value="1"/>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>

              </div>
            </div>
          </div>

          <div className="col-lg-9 col-md-9 col-sm-9">
              <div className="card-group text-center">
              {this.state.products.map(product => (
                <div className="col-lg-4 col-md-4 col-sm-4" key={product.id}>
                  <div className="card m-2">
                    <img src={product.image} className="card-img"/>
                    <div className="card-body">
                      <div className="card-name">{product.name}</div>
                      <div className="card-color">{product.color}</div>
                      <div className="card-price">${product.price}</div>
                      {/* <div className="card-release-date">{product.releaseDate}</div> */}
                      <div className="card-rate"></div>
                      {this.ratingStars(product.rating)}
                    </div>
                  </div>
                  </div>
              ))}
              </div>
          </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;