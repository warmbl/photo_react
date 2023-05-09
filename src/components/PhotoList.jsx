import React from 'react';
import PhotoItem from './PhotoItem';
import '../styles/Gallery.css';

const PhotoList =({photos})=>{
    return(
        <div className='slider'>
            {photos.map((photo)=>
                <PhotoItem photo={photo} key={photo.id}/>
            )}
        </div>
    );
}

export default PhotoList;