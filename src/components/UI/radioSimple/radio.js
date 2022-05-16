import React from 'react'
import classes from './radio.module.scss'

function RadioButton({ id, values, inputRef }) {
  const handleChanges = (e) =>{
    inputRef.current.value =  e.target.value;
  }
  return (
    <div className={classes.container} ref={ inputRef }>
    {values.map((value,i) => {
      return(
        <div key={ value } className={ classes.container__inside }>
          <input 
          data-testid={`${id}-${value}`}
          className={ classes.input }
          type="radio"
          id={ value } 
          name={ id } 
          value={ value }
          onChange={ handleChanges } 
          />
          <label  className={ classes.label } htmlFor={ value }>
            { value }
          </label>
        </div>
      )
    })
    }
  </div>
  )
}

export default RadioButton