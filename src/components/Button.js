import React from 'react';
import './Button.css';

const STYLE=[' no-style','btn-primary','btn-danger','btn-info','btn-success','btn-warning'];
const SIZES=['no-size ','btn--medium','btn--large','btn-rounded'];

export const Button =({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    id
    
})=>{
    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        
            <button onClick={onClick} id={id} className={`btn ${checkButtonStyle} ${checkButtonSize}`}   type={type}>
                {children} 
            </button>
        
    )
};