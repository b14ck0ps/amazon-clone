import classes from './App.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import React, { Component } from 'react';
import ProductData from './ProductData'


class App extends Component {
  state = {
    productData: ProductData,
    currentPreviwImage: 'https://imgur.com/iOeUBV7.png',
    showHearbeatSection: false
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Topbar />
        </header>

        <div className={classes.Maincontainer}>

          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.currentPreviwImage} showHearbeatSection={this.state.showHearbeatSection} />
          </div>
          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
