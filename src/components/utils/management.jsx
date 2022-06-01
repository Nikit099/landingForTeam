import React from 'react'
import Tilt from 'react-vanilla-tilt'
function Meangement() {
    return (
        <div className='mean'>
             <h1>Заголовок придумывает Андрей</h1>
        <div className="container">
           
            <Tilt style={{  width: '390px',   borderRadius: '15px'}} className="tilt">
        <div className="box">
            
            <div className="content con1">
                <h2>01</h2>
                <h3>Первая карта</h3>
                <p>Тут Заполняет андрей</p>
               
            </div>
           
        </div>
        </Tilt>
        <Tilt style={{  width: '390px',   borderRadius: '15px'}}>
        <div className="box">

            <div className="content con2">
                <h2>02</h2>
                <h3>Вторая карта</h3>
                <p>Тут Заполняет андрей</p>
               
            </div>
        </div>
        </Tilt>
        <Tilt style={{  width: '390px',   borderRadius: '15px'}}>
        <div className="box">

            <div className="content con3">
                <h2>03</h2>
                <h3>Третья карта</h3>
                <p>Тут Заполняет андрей</p>
                
            </div>
        </div>
        </Tilt>
    </div>
    </div>
    )
}

export default Meangement
