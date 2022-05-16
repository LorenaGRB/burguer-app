import React from 'react'
import classes from './card.module.scss'

function Card( props ) {
  const center = props.center ? classes.center:' '
  return (
    <div className={classes.wrapper}>
      { props.title &&
        <h2 className={classes.title}>
          {props.title}
        </h2>
      }
      <div  className={[classes.body,center ].join(' ')}>
        {props.children}
      </div>
    </div>
  )
}

export default Card