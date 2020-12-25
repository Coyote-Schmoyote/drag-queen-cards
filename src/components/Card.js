import React from 'react';
  

const Card = ({name, season, instagram, image}) => {
    return (
        <div>
            <div className=" dib br3 pa3 ma2 grow bw2 shadow-5" 
                    style={{background: '#f0e6e4'}}>

                <img alt='a queen' width="200" height="200" src={image}></img>
                <h2>{name}</h2>
                <p>Season: {season}</p>
                <p>{instagram}</p>
            </div>
        </div>
    );
}
export default Card;