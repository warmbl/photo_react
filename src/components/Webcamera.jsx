import React from 'react';
import Webcam from 'react-webcam';
import MyButton from './UI/button/MyButton';
import '../styles/App.css';

const Webcamera = React.forwardRef(({addNewPhoto}, ref) => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    return(
        <div className='camera'>
            <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg"/>
            <MyButton onClick={capture}>Сделать фото</MyButton>
            <div style={{ height: '600px', width: '700px', backgroundColor: 'red' }}>
                <img ref={ref} alt='' src={imgSrc}/>
            </div>
            <MyButton onClick={(e) => {
                addNewPhoto(e, imgSrc)
                setImgSrc('');
                }}>Сохранить фото</MyButton>
            <MyButton onClick={() => setImgSrc('')}>Удалить фото</MyButton>
        </div>
    )
});

export default Webcamera;