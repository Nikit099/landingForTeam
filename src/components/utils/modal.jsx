import React from 'react'

function Modal({changeModal}) {
  
    return (
        <div className='modal_container'>
               <div className="modal">
                   <p className='title'>Для получения доступа укажите</p>
                   <p className='title2'>Контактные данные</p>
                   <div className="contInp">
                   <input type="name"  placeholder='Имя и фамилия '  />
                   <input type="text" placeholder='Название организации' />
                   <input type='tel' placeholder='+7 (999) 999-99-99' />
                   <input type="email" placeholder='E-mail' />
                   </div>
                   <div className="btn2">
                   <button className='get' onClick={changeModal}>Получить доступ</button>
                   </div>
               </div>
        </div>
    )
}

export default Modal
