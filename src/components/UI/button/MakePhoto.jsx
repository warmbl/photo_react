import React from 'react';
import classes from './MyButton.module.css';


const MakePhoto =({children, ...props})=>{
    return(
        <button {...props} className={classes.makePhoto}>  
            {children}
        </button>
    );
}

export default MakePhoto;