import React from "react";

function mainBlock(props) {
    return (
        <div className="block__wrapper">
            <img  src={props.image} alt="тут должна быть картника" className="block__image"/>
            <h3>{props.title}</h3>
            <p className="block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
        </div>
    );
}

export default mainBlock;