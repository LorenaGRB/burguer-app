import React, { useRef, useState } from 'react'
import Button from '../../../../components/UI/button'
import Input from '../../../../components/UI/input'
import Card from '../../../../components/card'
import classes from './form.module.scss'
import RadioButton from '../../../../components/UI/radioSimple/radio'
import Item from '../../../../components/UI/switch'
import RadioMultiple from '../../../../components/UI/radioMultiple'

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

  const deliveryChoosed = useRef();

  return (
    <div className={classes.login__wrapper}>
      <Card title={'Login'} center={true}>
        <form className={classes.form}>
          <div >
            <Item 
              title='Queso'
              id='choque'
              add={llantaState}
              status={{llantaRob:llantaRob}}
            />
            <Input 
              id={'amountQueso'} 
              label={'Cantidad'} 
              size={'medium'} 
              inputRef={passwordRef}
              type={'number'}
              />
              <RadioMultiple id={'queso'} values={[1,2,3]}inputRef={deliveryChoosed}/>
          </div>
          <div>${amount}{console.log(amount)} </div>
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