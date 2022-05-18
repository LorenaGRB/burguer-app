import React, { useRef, useState } from 'react'
import Button from '../../../../components/UI/button'
import Input from '../../../../components/UI/input'
import Card from '../../../../components/card'
import classes from './form.module.scss'
import RadioButton from '../../../../components/UI/radioSimple/radio'
import Item from '../../../../components/UI/switch'
function Form() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [llantaRob, setllantaRob] = useState(false);
  const [amount, setamount] = useState(20);
  const llantaState = ()=> {
    let amountOfmoney=0;
    amountOfmoney=llantaRob?-15:15;
    setamount(prevState => prevState + amountOfmoney);
    setllantaRob(prevState => !prevState );
}
  return (
    <div className={classes.login__wrapper}>
      <Card title={'Login'} center={true}>
        <form className={classes.form}>
          <Item 
            title='Queso'
            id='choque'
            add={{llantaRob:llantaState}}
            status={{llantaRob:llantaRob}}
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