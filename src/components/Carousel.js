import React, {useState} from "react";


export default function Carousel({imgs, index}) {

    
    const style= {
        transform: `translateX(${-index* 100}%)`
    }


    return(
        <div className="carousel" style={style}>
            
            {imgs.map((img) => {
                return(
                    <img src={img} key={img} />
                )
            })}
        </div>
    )
}