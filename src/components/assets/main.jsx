import React, { useState } from 'react'
import Meangement from '../utils/management'
import Modal from '../utils/modal'
import axios from 'axios'

function Main() {
    const [isModal, setIsModal] = useState(false)
    const [value, setValue] = useState({ name: '',   company:'', tel: '' , email: '',})
    const changeModal = () => {
        setIsModal(!isModal)
        
        if(value.name && value.company && value.tel && value.email){
            axios.post('https://61c3f0c4f1af4a0017d99198.mockapi.io/forTeam', value)
            setValue({name: '',   company:'', tel: '' , email: ''})
        }
        
    }
    return (
        <div className='main'>
            <div className="main_container">
            {
                isModal && <Modal changeModal={changeModal} setValue={setValue} value={value}/>
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
