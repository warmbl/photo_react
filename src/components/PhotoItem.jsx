import React from 'react';
import classes from '../styles/ItemGallery.module.css';

const PhotoItem =({remove, photo})=>{
    return(
        <div className={classes.sliderItem}>
            <img alt='' src={photo.scrn} className={classes.imgSliderItem}></img>
            <button className={classes.butDelete} onClick={() => remove(photo)}>
                X
            </button>
        </div>
    );
}

export default PhotoItem;