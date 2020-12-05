import React from 'react';
import Card from './Card';

const CardList = ({dragQueens}) => {    
        return (
            <div>
                {
                    dragQueens.map((user,i) => {
                        return (
                            <Card 
                            key={i} 
                            id ={dragQueens[i].id} 
                            name={dragQueens[i].name} 
                            season={dragQueens[i].season} 
                            instagram={dragQueens[i].Instagram} 
                            image={dragQueens[i].image}
                            instagramAddress={dragQueens[i].instagramAddress}
                        /> 
                        );
                    })
                }
            </div>
        );
    }
export default CardList;