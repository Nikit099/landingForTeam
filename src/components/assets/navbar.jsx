import React from 'react'
import  logo  from '../../img/logo.png'
function Navbar() {
    return (
        <div className='nav_container'>
            <div className="nav">
                <div className="logo_box">
                    <div className="img_box">
                <img src={logo} className='logo' alt="" />
                </div>
                <p>NeoLib</p>
                </div>

                <ul className='list'>
                <li  className='black' >Мои курсы</li>

                <li className='black' >Лутрейтиг</li>
                    <li className='blue'>Войти как ученик</li>
                  
                    <li className='blue'>Войти как партнер</li>
                  
                </ul>
            </div>
        </div>
    )
}

export default Navbar
