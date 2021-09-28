import React from 'react';
import classes from './ProductPreview.module.css';

const ProductPreview = (props) => {
    const currentHour = new Date().getTime() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
    return (
        <div className={classes.ProductPreview}>

            <img src={props.currentPreviewImage} alt="Product Preview" />
            {
                props.showHearbeatSection ?
                    <div className={classes.HeartSetion}>
                        <i class="fas fa-heartbeat"></i>
                        <p>78</p>
                    </div>
                    :
                    <div className={classes.TimeSetion}>
                        <p>{`${currentHour}:${currentMinute}`}</p>
                    </div>
            }
        </div>
    );
}

export default ProductPreview;