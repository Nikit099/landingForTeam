import React, { useEffect, useState } from 'react';
import Bishop from './figures/bishop';
import King from './figures/king';
import Knight from './figures/knight';
import Pawn from './figures/pawn';
import Queen from './figures/queen';
import Rook from './figures/rook';

const Cell = ({color, id, choose, step}) => {
const [around, setAround] = useState(null)

useEffect(() => {
    setAround(choose)
    
}, [choose])
useEffect(() => {
    stand()
}, [step])
    const stand = () => {

        // step.pawns.map(i => {
        //     console.log();
        //     return id === i && <Pawn/>
        // })
        if(id === step.pawns[0] || id === step.pawns[1] || id === step.pawns[2] || id === step.pawns[3] || id === step.pawns[4] || id === step.pawns[5] || id === step.pawns[6] || id === step.pawns[7] ){
            return <Pawn/>
        }
      
        if(id === step.bishops.bishopW || id === step.bishops.bishopB){
            return  <Bishop/>
        }
        if( id === step.king ){
           return <King/> 
        }
        if(id === step.queen ){
            return <Queen/>
        }
        if(id === step.knights.knightB || id === step.knights.knightW ){
            return <Knight/>
        }
        if(id === step.rooks.rookB || id === step.rooks.rookW ){
            return <Rook/>
        }
    }

    const paint = () => {
       return around && <div className='around' ></div> 
    }
    return (
        color  ? 
            <div className='cell black' id={id} >
                {stand()}
                {paint()}
                
            </div>
            :
            <div className='cell white' id={id} >
                 {stand()}
                 {paint()}
            </div> 
    );
};

export default Cell;