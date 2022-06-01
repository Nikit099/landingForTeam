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
                    <li className='active' >Главная</li>
                    <li>Тарифы</li>
                    <li>Каталог курсов</li>
                    <li>Компания</li>
                    <li>Поддержка</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
