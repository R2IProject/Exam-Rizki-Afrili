import React from 'react'
import './App.css'
import Coffe from './assets/coffe.jpeg'
import Record from "./record.json"

const App = () => {
  return (
    <div className="container">
      <div className="navbar">
        <header>
          <center id='nama'>RIZKI AFRILI RPL XI B</center>
          <nav>
            <h2>Coffe Shop</h2>
            <p id='p'>Product List Product</p>
          </nav>
        </header>
        </div>
        <div className="grid-container">
          <div className="item item-1">
          <div class="card-continer">
            <div class="card">
                <img src={Coffe}/>
                <div class="card-content">
                    <h1 id="card">Coffe Latte</h1>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
          </div>
          </div>
          <div className="item item-2">
          <div class="card-continer">
            <div class="card">
                <img src={Coffe}/>
                <div class="card-content">
                    <h1 id="card">Cappuccino</h1>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
          </div>
          </div>
          <div className="item item-3">
          <div class="card-continer">
            <div class="card">
                <img src={Coffe}/>
                <div class="card-content">
                    <h1 id="card">Cafe Mocha</h1>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
          </div>
          </div>
          <div className="item item-4">
          <div class="card-continer">
            <div class="card">
                <img src={Coffe}/>
                <div class="card-content">
                    <h1 id="card">Caramel Macchiato</h1>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
          </div>
          </div>
          <div className="item item-5">
          <div class="card-continer">
            <div class="card">
                <img src={Coffe}/>
                <div class="card-content">
                    <h1 id="card">Espreso Macchiato</h1>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
          </div>
          </div>
          <div className="item item-6">
          <div class="card-continer">
            <div class="card">
                <img src={Coffe}/>
                <div class="card-content">
                    <h1 id="card">Iced Espresso & Matcha Fusion</h1>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
          </div>
          </div>
          <div className="item item-7">
          <div class="card-continer">
            <div class="card">
                <img src={Coffe}/>
                <div class="card-content">
                    <h1 id="card">Double Shot Iced Shaken Espresso</h1>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
          </div>
          </div>
          <div className="item item-8">
          <div class="card-continer">
            <div class="card">
                <img src={Coffe}/>
                <div class="card-content">
                    <h1 id="card">Caffe Americano</h1>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
          </div>
          </div>
          <div className="item item-9">
          <div class="card-continer">
            <div class="card">
                <img src={Coffe}/>
                <div class="card-content">
                    <h1 id="card">Cold Foam</h1>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
          </div>
          </div>
        </div>
          
      <div className="table">
      <center><table>
            <th>No</th>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <tr>
              <td id="no">1</td>
              <td>Caffe Latte</td>
              <td>ESPRESSO BEVAREGES</td>
              <td>Rp. 48.000</td>
            </tr>
            <tr>
              <td id="no">2</td>
              <td>Cappuccino</td>
              <td>ESPRESSO BEVAREGES</td>
              <td>Rp. 48.000</td>
            </tr>
            <tr>
              <td id="no">3</td>
              <td>Cafe Mocha</td>
              <td>ESPRESSO BEVAREGES</td>
              <td>Rp. 55.000</td>
            </tr>
            <tr>
              <td id="no">4</td>
              <td>Caramel Macchiato</td>
              <td>ESPRESSO BEVAREGES</td>
              <td>Rp. 59.000</td>
            </tr>
            <tr>
              <td id="no">5</td>
              <td>Double Shot Iced Shaken Espresso</td>
              <td>ESPRESSO BEVAREGES</td>
              <td>Rp. 80.000</td>
            </tr>
            <tr>
              <td id="no">6</td>
              <td>Iced Espresso & MAtcha Fusion</td>
              <td>ESPRESSO BEVAREGES</td>
              <td>Rp. 65.000</td>
            </tr>
            <tr>
              <td id="no">7</td>
              <td>Espreso Macchiato</td>
              <td>ESPRESSO BEVAREGES</td>
              <td>Rp. 60.000</td>
            </tr>
            <tr>
              <td id="no">8</td>
              <td>Caffe Americano</td>
              <td>ESPRESSO BEVAREGES</td>
              <td>Rp. 80.000</td>
            </tr>
            <tr>
              <td id="no">9</td>
              <td>Cold Foam</td>
              <td>ESPRESSO BEVAREGES</td>
              <td>Rp. 44.000</td>
            </tr>
          </table></center>
    </div>
    </div>
    
      
    
  )
}

export default App