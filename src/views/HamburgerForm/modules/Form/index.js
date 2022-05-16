import React, { useRef } from 'react'
import Button from '../../../components/UI/button'
import Input from '../../../components/UI/input'
import Card from '../../../components/card'
import classes from './form.module.scss'

function Form() {
  const emailRef = useRef()
  const passwordRef = useRef()

  return (
    <div className={classes.login__wrapper}>
      <Card title={'Login'} center={true}>
        <form className={classes.form}>
            <Input 
            id={'Email'} 
            label={'Email'} 
            size={'all'} 
            inputRef={emailRef}
            type={'text'}
            />
            <Input 
            id={'password'} 
            label={'Contraseña'} 
            size={'all'} 
            inputRef={passwordRef}
            type={'password'}
            />
            
          <div>
            <Button 
            id='loginSubmit'
            type="submit"
            label='Ingresar'
            />
          </div>
        </form>
      </Card>
    </div>
  )
}

export default Form