import React from 'react'
import Tilt from 'react-vanilla-tilt'
import arrow from '../../img/arrow.png'
import controller from '../../img/controller.png'
import dollar from '../../img/dollar.png'
import toolkit from '../../img/toolkit.png'
import people from '../../img/people.png'
import increase from '../../img/increase.png'
import upwardArrow from '../../img/upward-arrow.png'
import growth from '../../img/growth.png'

function Meangement() {
    return (
        <div className='mean'>
             <h1>Новый подход к обучению</h1>
        <div className="container">
           
            <Tilt style={{  width: '320px',   borderRadius: '15px'}}  className="tilt">
        <div className="box">
            
            <div className="content con1">
            <div className="imgBlock toolkit">
                    <img src={toolkit} alt="" />
                </div>
              
                <h2>01</h2>
                <h3> Загрузи материалы</h3>
                <p>Интуитивно понятный конструктор курсов</p>
               
            </div>
           
        </div>
        </Tilt>
        <Tilt style={{  width: '320px',   borderRadius: '15px'}}>
        <div className="box">

            <div className="content con2">
                <div className="imgBlock arrow">
                    <img src={arrow} alt="" />

                </div>
                <div className="imgBlock game">
                    <img src={controller} alt="" />

                </div>
                <h2>02</h2>
                
                <h3>Добавь геймификацию</h3>
                <p>Элементы геймификации мотивируют сотрудников обучаться</p>
               
            </div>
        </div>
        </Tilt>
        <Tilt style={{  width: '320px',   borderRadius: '15px'}}>
        <div className="box">

            <div className="content con3">
            <div className="imgBlock people">
                    <img src={people} alt="" />
                </div>
                <div className="imgBlock upwardArrow">
                    <img src={upwardArrow} alt="" />

                </div>
                <h2>03</h2>
                <h3>Получи результат </h3>
                <p>Квалифицированные кадры за минимальное время</p>
                
            </div>
        </div>
        </Tilt>
        <Tilt style={{  width: '320px',   borderRadius: '15px'}}>
        <div className="box">
      
            <div className="content con4">
            <div className="imgBlock dollar">
                    <img src={dollar} alt="" />
                </div>
                <div className="imgBlock increase">
                    <img src={increase} alt="" />

                </div>
                <h2>04</h2>
                <h3>Монетизируй контент</h3>
                <p>Опубликуй свой курс на площадке и получай прибыль!</p>
                
            </div>
        </div>
        </Tilt>
    </div>
    </div>
    )
}

export default Meangement
