import ReactLoading from 'react-loading'
import classes from './loading.module.scss'

export default function Loading({ isLoading }) {
  if(isLoading) {
    return (
      <div className={classes.loading__container}> 
        <div className={classes.loading} >
          <ReactLoading type="bubbles" color="#e35545" height={100} width={100}/>
          <p className={classes.loading__message} >
            Por favor espere un momento
          </p>
        </div>
      </div>
    )
  }
  return null;
}


