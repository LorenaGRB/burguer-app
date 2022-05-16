import React from 'react'
import classes from './radioMultiple.module.scss'

function RadioMultiple({ id, values, inputRef, bestOption }) {
  const handleChanges = (e) =>{
    inputRef.current.value =  e.target.value;
  }
  const bestOptionId = bestOption ? bestOption.id : ''
  return (
  <div className={classes.container} ref={ inputRef }>
    {
      values.map((value,i) => {
        return(
          <div key={ value.id } className={classes.option} >
            <input
            data-testid={ value.id }
            className={classes.input}
            type="radio"
            id={ value.id } 
            name={ id } 
            value={ value.id }
            onChange={ handleChanges } 
            />
            <label className={classes.label} htmlFor={ value.id }>
              <p >Código: {value.id}</p>
              <p>Nombre: {value.attributes.provider}</p>
              <p>Tipo de servicio: {value.attributes.service_level_name}</p>
              <p>Días de espera: {value.attributes.days}</p>
              <p>Precio: {value.attributes.amount_local} {value.attributes.currency_local}</p>
            </label>
            {
              (bestOptionId === value.id)?
              <span className={classes.option_special}>
                Opción Recomendada: 
                <p>{value.id}</p>
              </span>
              : null
            }
          </div>
        )
      })
    }
  </div>
  )
}

export default RadioMultiple