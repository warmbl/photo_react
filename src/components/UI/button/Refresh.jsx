import React from 'react';
import classes from './MyButton.module.css';


const Refresh =({children, ...props})=>{
    return(
        <button {...props} className={classes.refresh}>  
            {children}
        </button>
    );
}

export default Refresh;