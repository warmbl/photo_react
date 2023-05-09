import React from 'react';
import classes from '../styles/ItemGallery.module.css';

const PhotoItem =({photo})=>{
    //console.log(photo);
    return(
        <div className={classes.sliderItem}>
            <h1>{photo.id}</h1>
            <img alt='' src={photo.scrn}></img>
            <button>Удалить</button>
        </div>
    );
}

export default PhotoItem;