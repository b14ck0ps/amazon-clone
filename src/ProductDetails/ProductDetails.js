import React from 'react';
import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {
    const colorOption = props.data.colorOptions.map((item, pos) => {
        const classArr = [classes.ProductImage];
        if (pos === props.currentPreviwImagePos) {
            classArr.push(classes.SelectedProductImage);
        }
        return (
            <img onClick={() => props.onColorOptionclick(pos)} key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} />
        );
    })

    const featureList = props.data.featureList.map((item, pos) => {
        const classArr = [classes.FeatureIteam];
        if (pos === props.currentSeletedFeature) {
            classArr.push(classes.SelectedFeatureIteam);
        }
        return (
            <button onClick={() => props.onFeatureIteamClick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
        );
    })

    return (
        <div className={classes.ProductData}>
            <h1 className={classes.ProductTitle}>{props.data.title}</h1>
            <p className={classes.ProductDescription}>{props.data.description}</p>
            <h3 className={classes.SectionHeading}>Select Color</h3>
            <div>
                {colorOption}
            </div>
            <h3 className={classes.SectionHeading}>Features</h3>
            <div>
                {featureList}
            </div>
            <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
    );
}

export default ProductDetails;