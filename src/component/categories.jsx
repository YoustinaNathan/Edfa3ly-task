// import React, { Component } from 'react';
// import 'react-pro-sidebar/dist/css/styles.css';
// import { ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem, SubMenu  } from 'react-pro-sidebar';


// const Categories = (props) => {
//     return ( 
//         <React.Fragment>
//             <div className="row">
//             <div className="col-lg-4 col-md-4 col-sm-4">
//             <ProSidebar>
//                 <SidebarHeader className="hi m-2">
//                     <i>Filter</i>
//                 </SidebarHeader>

//                 <SidebarContent>
//                     <Menu iconShape="round m-2">
//                         <MenuItem>Price range</MenuItem>
//                         <label htmlFor="priceFilter">Price Up To:{this.props.value}</label>
//                         <input type="range" className="form-range" id="price" name="price" min="0" max="1000" step="10"/>
//                         {/* <input type="range" list="tickmarks"/>
//                         <datalist id="tickmarks">
//                         <option value="0">0</option>
//                         <option value="10">100</option>
//                         <option value="20">200</option>
//                         <option value="30">300</option>
//                         <option value="40">400</option>
//                         <option value="50">500</option>
//                         <option value="60">600</option>
//                         <option value="70">700</option>
//                         <option value="80">800</option>
//                         <option value="90">900</option>
//                         <option value="100">1000</option>
//                         </datalist> */}
//                         <button onClick={this.priceFilter}>Apply Filter</button>

//                         <hr/>

//                         <MenuItem>Color</MenuItem>
//                         <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabindex="0">
//                         {this.props.products.map(product => (
//                         <div key={product.id}>
//                             <input type="checkbox" id="color" name="color" value={product.color}/>
//                             <label htmlFor="color">{product.color}</label>
//                         </div>
//                         ))}
//                         </div>
//                         <hr/>

//                         <MenuItem>Average rating</MenuItem>
//                         <div className="m-2">
//                             <input className="m-2" type="radio" id="rate" value="5"/>
//                             <i className="fas fa-star"></i>
//                             <i className="fas fa-star"></i>
//                             <i className="fas fa-star"></i>
//                             <i className="fas fa-star"></i>
//                             <i className="fas fa-star"></i>
//                         </div>
//                         <div className="m-2">
//                             <input className="m-2" type="radio" id="rate" value="4"/>
//                             <i className="fas fa-star"></i>
//                             <i className="fas fa-star"></i>
//                             <i className="fas fa-star"></i>
//                             <i className="fas fa-star"></i>
//                             <i className="far fa-star"></i>
//                         </div>
//                         <div className="m-2">
//                             <input className="m-2" type="radio" id="rate" value="3"/>
//                             <i className="fas fa-star"></i>
//                             <i className="fas fa-star"></i>
//                             <i className="fas fa-star"></i>
//                             <i className="far fa-star"></i>
//                             <i className="far fa-star"></i>
//                         </div>
//                         <div className="m-2">
//                             <input className="m-2" type="radio" id="rate" value="2"/>
//                             <i className="fas fa-star"></i>
//                             <i className="fas fa-star"></i>
//                             <i className="far fa-star"></i>
//                             <i className="far fa-star"></i>
//                             <i className="far fa-star"></i>
//                         </div>
//                         <div className="m-2">
//                             <input className="m-2" type="radio" id="rate" value="1"/>
//                             <i className="fas fa-star"></i>
//                             <i className="far fa-star"></i>
//                             <i className="far fa-star"></i>
//                             <i className="far fa-star"></i>
//                             <i className="far fa-star"></i>
//                         </div>
//                     </Menu>
//                 </SidebarContent>
//             </ProSidebar>
//           </div>
//         <div className="col-lg-8 col-md-8 col-sm-8">
//             <div className="card-group text-center">
//             {this.props.products.map(product => (
//                 <div className="card-body" key={product.id}>
//                   <img src={product.image} className="card-img" width="100" height="100"/>
//                   <div className="card-body">
//                     <div className="card-name">{product.name}</div>
//                     <div className="card-color">{product.color}</div>
//                     <div className="card-price">{product.price}$</div>
//                   </div>
//                 </div>
//             ))}
//             </div>
//         </div>
//     </div>
//     </React.Fragment>
//     );
// }
 
// export default Categories;
