import React from 'react';
import bw from './db/bw/adore.jpg';
import red from './db/red/adore.jpg';
import blue from './db/blue/adore.jpg';

const Card = () => {
    let imageRed= red;
    let imageBlue = blue;
    return (
        <div>
            <article class="mw5 center hidden mv4">
                    <img class="db center mw5 tc black link dim"
                        id="outfit"
                        alt=""
                        src={bw}/>
                    <h1 class="f3 bg-near-black white mv3 pv2 ph2">Adore Delano</h1>
            </article>
        </div>
    )
}

export default Card;