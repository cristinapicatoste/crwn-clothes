import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './CardDropDown.scss';

const CardDropDown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  )
}

export default CardDropDown;
