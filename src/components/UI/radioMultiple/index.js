import React from 'react'
import classes from './radioMultiple.module.scss'

function RadioMultiple({ id, values, inputRef}) {
  const handleChanges = (e) =>{
    inputRef.current.value =  e.target.value;
    console.log(e.target.value)
  }
  return (
  <div className={classes.container} ref={ inputRef }>
    {
      values.map((value,i) => {
        return(
          <div key={ value} className={classes.option} >
            <input
            className={classes.input}
            type="radio"
            id={ `${id}-${value}`} 
            name={ id } 
            value={ value }
            onChange={ handleChanges } 
            size={'small'}
            />
            <label className={classes.label} htmlFor={ `${id}-${value}` }>
              <p >{value}</p>
            </label>
          </div>
        )
      })
    }
  </div>
  )
}

export default RadioMultiple