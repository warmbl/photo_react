import Webcamera from './components/Webcamera';
import './styles/App.css';
import './styles/Gallery.css';
import React, { useState } from 'react';
import PhotoList from './components/PhotoList';

let counterPhoto=0;

function App() {
  const [photos, setPhotos] = useState([]);

  function addNewPhoto(e, src){
    e.preventDefault();
    
    if(counterPhoto<10){
      const newPhoto={
        id: Date.now(),
        scrn: src,
      }
      setPhotos([...photos, newPhoto]);
      counterPhoto+=1;
      
    } else{
      alert('Ограничение на 10 фото');
    }
  }

  function deletePhoto(photo){
    setPhotos(photos.filter(p=> p.id !== photo.id))
    counterPhoto-=1;
  }

  return (
    <div className='App'>
      <Webcamera addNewPhoto={addNewPhoto}/>

      <div className='center-menu'>
        <div className='swiploop'>
          <PhotoList remove={deletePhoto} photos={photos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
