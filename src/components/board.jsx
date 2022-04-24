import React, { useContext, useEffect, useState } from 'react'
import Cell from './cell'
import { mooveContext } from './context/context'

function Board() {
    const positions = {
       
        pawns: [56, 55, 54, 53, 52, 51, 50, 49],
        bishops: {
            bishopW: 59,
            bishopB: 62,
        },
        knights: {
            knightB: 58,
            knightW: 63,
        },
        rooks:{
            rookW: 57,
            rookB: 64,
        },
        queen: 61,
        king: 60
    }
    const [quantity, setQuantity] = useState([])
    const [step, setStep] = useState(positions)
    const [flag, setFlag] = useState(false)
    const [flagKnights, setFlagKnights] = useState(false)
    const [elem, setElem] = useState(null)
    
    
    useEffect(() => {
        let color = true
        for(let i = 1; i <= 64; i++){
            const createCell = {
                id: i,
                color: color,
                choose: false,
                
            }
            setQuantity(prev => [...prev, createCell])
            if(i % 8 !== 0){
                color ? color = false : color = true
            } 
        }
        return () => {
            setQuantity([])
        }
      }, [])
    



      const handleClick = (e) => {
          const elemCell = e.target.closest('.cell')
          if(elemCell){
              setQuantity(prev => prev.map(i => {
                  return {...i, choose: false}
              }))
              if(flag){
                  
                for(let i = 0; i < step.pawns.length;  i++){
                    if(step.pawns[i] === elem){
                       if(elem < 57 && elem > 48){
                        if(Number(elemCell.id) === step.pawns[i] - 8 || Number(elemCell.id) === step.pawns[i] - 16){
                            step.pawns[i] = Number(elemCell.id)
                        }
                       }else{
                        if(Number(elemCell.id) === step.pawns[i] - 8 ){
                            step.pawns[i] = Number(elemCell.id)
                        }
                       }
                    }
                }
            }
            if(flagKnights){

                if(step.knights.knightW === elem ){
                    if(Number(elemCell.id) === step.knights.knightW - 15 || Number(elemCell.id) === step.knights.knightW - 17 || Number(elemCell.id) === step.knights.knightW  + 17 || Number(elemCell.id) === step.knights.knightW  + 15){
                        step.knights.knightW = Number(elemCell.id)
                    }
                }else{
                    if(Number(elemCell.id) === step.knights.knightB - 15 || Number(elemCell.id) === step.knights.knightB - 17 || Number(elemCell.id) === step.knights.knightB + 17 || Number(elemCell.id) === step.knights.knightB + 15){
                        step.knights.knightB = Number(elemCell.id)
                    }
                }
            }
              setFlag(false)
              setFlagKnights(false)

                if(elemCell.children.pawn){
                    if(quantity[elemCell.id - 1].id < 57 && quantity[elemCell.id - 1].id > 48){
                        setQuantity(prev => prev.map(i =>  i.id === quantity[elemCell.id - 1].id - 8 || i.id === quantity[elemCell.id - 1].id - 16 ? i = {...i, choose: true} : {...i}
                            ))
                            setFlag(true)
                            setElem(Number(elemCell.id))
                      
                    }else{
                        setQuantity(prev => prev.map(i =>  i.id === quantity[elemCell.id - 1].id - 8  ? i = {...i, choose: true} : {...i}
                            ))
                            setFlag(true)
                            setElem(Number(elemCell.id))
                      
                    }
                 
                  
                 
                }else if(elemCell.children.knight){
                    setQuantity(prev => prev.map(i =>  i.id === quantity[elemCell.id - 1].id - 17 || i.id === quantity[elemCell.id - 1].id - 15 ||  i.id === quantity[elemCell.id - 1].id + 15 ||  i.id === quantity[elemCell.id - 1].id + 17 ? i = {...i, choose: true} : {...i}))
                    setFlagKnights(true)
                    setElem(Number(elemCell.id))
                } else if(elemCell.children.bishop){
                    setQuantity(prev => prev.map(i =>  i.id === quantity[elemCell.id - 1].id - 7 || i.id === quantity[elemCell.id - 1].id - 16 ||  i.id === quantity[elemCell.id - 1].id + 9 ||  i.id === quantity[elemCell.id - 1].id + 20 ? i = {...i, choose: true} : {...i}))
                    
                }
            
            }} 




    return (
        <div className='board' onClick={ e =>  handleClick(e)}> 

            {quantity.map(i => (
            <Cell key = { i.id} color = {i.color} id = {i.id} step = {step} choose = {i.choose}  /> 
            ))}
        </div>
    )
}

export default Board
