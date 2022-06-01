import React from 'react'

function Modal({changeModal, value, setValue}) {
  
    return (
        <div className='modal_container'>
               <div className="modal">
                   <p className='title'>Для получения доступа укажите</p>
                   <p className='title2'>Контактные данные</p>
                   <div className="contInp">
                   <input type="name" value={value.name} onChange={(e) => setValue({...value, name: e.target.value})}  placeholder='Имя и фамилия '  />
                   <input type="text" value={value.company}  onChange={(e) => setValue({...value, company: e.target.value})}  placeholder='Название организации' />
                   <input type='tel' value={value.tel}  onChange={(e) => setValue({...value, tel: e.target.value})}  placeholder='+7 (999) 999-99-99' />
                   <input type="email" value={value.email}  onChange={(e) => setValue({...value, email: e.target.value})}  placeholder='E-mail' />
                   </div>
                   <div className="btn2">
                   <button className='get' onClick={changeModal}>Получить доступ</button>
                   </div>
               </div>
        </div>
    )
}

export default Modal
