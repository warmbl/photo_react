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

  return (
    <div className='App'>
      <div>
        <Webcamera addNewPhoto={addNewPhoto}/>
      </div>
      <div className='center-menu'>
        <div className='swiploop'>
          <PhotoList photos={photos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
