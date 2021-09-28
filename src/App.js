import classes from './App.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import React, { Component } from 'react';
import ProductData from './ProductData'


class App extends Component {
  state = {
    productData: ProductData,
    currentPreviwImagePos: 0,
    currentSeletedFeature: 0
  }
  onColorOptionclick = (pos) => {
    this.setState({ currentPreviwImagePos: pos })
  }
  onFeatureIteamClick = (pos) => {
    this.setState({ currentSeletedFeature: pos })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Topbar />
        </header>

        <div className={classes.Maincontainer}>

          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviwImagePos].imageUrl}
              currentSeletedFeature={this.state.currentSeletedFeature} />
          </div>

          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData}
              onColorOptionclick={this.onColorOptionclick}
              currentPreviwImagePos={this.state.currentPreviwImagePos}
              onFeatureIteamClick={this.onFeatureIteamClick}
              currentSeletedFeature={this.state.currentSeletedFeature}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
