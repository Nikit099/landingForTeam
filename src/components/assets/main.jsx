import React, { useState } from 'react'
import Meangement from '../utils/management'
import Modal from '../utils/modal'


function Main() {
    const [isModal, setIsModal] = useState(false)
    const changeModal = (event) => {
        event.stopPropagation()
        setIsModal(!isModal)
    }
    return (
        <div className='main'>
            <div className="main_container">
            {
                isModal && <Modal changeModal={changeModal}/>
            }
               
                <img src="https://static.tildacdn.com/tild3134-3339-4562-a266-333832323431/pexels-christina-mor.jpg" alt="" />
                <div className='span'></div>
                <h1>Надежная платформа для онлайн-обучения персонала</h1>
                <div className="btn">
                <button className='try' onClick={changeModal}>ПОПРОБОВАТЬ БЕСПЛАТНО</button>

                </div>
                
            </div>
            <Meangement/>

        </div>
    )
}

export default Main
