import React from 'react';
import logo from '../asset/logo.jpg';

export const Header = () => {
  return (
    <>
        <header>
            <div className='logo-wrapper'>
              <img src={logo} width={100}/>
            </div>
        </header>
    </>
  )
}
