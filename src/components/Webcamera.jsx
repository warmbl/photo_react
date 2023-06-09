import React from 'react';
import Webcam from 'react-webcam';
import MyButton from './UI/button/MyButton';
import '../styles/App.css';
import '../styles/Webcamera.css';
import MakePhoto from './UI/button/MakePhoto';
import Refresh from './UI/button/Refresh';
import refresh1 from './img/refresh1.png';

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
            <Refresh onClick={handleClick}><img src={refresh1} alt="refresh" className='refresh'/></Refresh>
            { imgSrc && imgSrc.length > 0 &&   
                // <div> 
                //     <img className ='img-screen' ref={ref} alt='' src={imgSrc}/>
                //     addNewPhoto(e, imgSrc)
                //     setImgSrc('');
                // </div> 

                <div className='screen'>
                    <img className ='img-screen' ref={ref} alt='' src={imgSrc}/>
                    <MyButton onClick={(e) => {
                    addNewPhoto(e, imgSrc)
                    setImgSrc('');
                    }}>Сохранить</MyButton>
                    <MyButton onClick={() => setImgSrc('')}>Удалить</MyButton>
                </div> 
            }

        </div>
    )
});

export default Webcamera;