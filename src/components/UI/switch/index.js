import React, { useState } from 'react'
import classes from './switch.module.scss'

function Switch(props) {

    function isadd(e) {
        props.add();
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.header} >
                <img />
                <h4 className={classes.title}>{props.title}</h4>
            </div>
            <div className={classes.switch} >
                <input 
                onClick={ () => {isadd()}}
                type="checkbox"
                defaultChecked={props.status}
                className={classes[`switch-btn`]} 
                />
            </div>
        </div>
    )
}

export default Switch
