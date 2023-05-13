import React from 'react';
import Webcam from 'react-webcam';
import MyButton from './UI/button/MyButton';
import '../styles/App.css';
import '../styles/Webcamera.css';
import MakePhoto from './UI/button/MakePhoto';

const Webcamera = React.forwardRef(({addNewPhoto}, ref) => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);


    const FACING_MODE_USER = "user";
    const FACING_MODE_ENVIRONMENT = "environment";
        
    const videoConstraints = {
        facingMode: FACING_MODE_USER
    };


    const [facingMode, setFacingMode] = React.useState(FACING_MODE_USER);
        
    const handleClick = React.useCallback(() => {
        setFacingMode(
            prevState =>
            prevState === FACING_MODE_USER
                ? FACING_MODE_ENVIRONMENT
                : FACING_MODE_USER
            );
    }, []);


    return(
        <div className='camera'>
            <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" className='center-camera' videoConstraints={{
                ...videoConstraints,
                facingMode
                }}
            />
            <MakePhoto onClick={capture}></MakePhoto>
            <button onClick={handleClick}>Сменить камеру</button>
            { imgSrc && imgSrc.length > 0 &&             
                <div className='screen'>
                    <img className ='img-screen' ref={ref} alt='' src={imgSrc}/>
                    <MyButton onClick={(e) => {
                    addNewPhoto(e, imgSrc)
                    setImgSrc('');
                    }}>Сохранить фото</MyButton>
                <MyButton onClick={() => setImgSrc('')}>Удалить фото</MyButton>
                </div> 
            }

        </div>
    )
});

export default Webcamera;