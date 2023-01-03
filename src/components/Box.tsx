import React, { useState } from "react";
import '../styles/Box.css'


export function Box() {
    const [inputTopLeft, setInputTopLeft] = useState(0);
    const [inputTopRight, setInputTopRight] = useState(0);
    const [inputBottomLeft, setInputBottomLeft] = useState(0);
    const [inputBottomRight, setInputBottomRight] = useState(0);
    
    let box: HTMLElement = document.querySelector(".caixa") as HTMLElement;
    
    const handleInputTopLeft = (e:any) :void => {
        let {value} = e.target
        setInputTopLeft(value)
        setBorderRadius();
    }
    const handleInputTopRight = (e:any) :void => {
        let {value} = e.target
        setInputTopRight(value)
        setBorderRadius();
    }
    const handleInputBottomLeft = (e:any) :void => {
        let {value} = e.target
        setInputBottomLeft(value)
        setBorderRadius();
    }
    const handleInputBottomRight = (e:any) :void => {
        let {value} = e.target
        setInputBottomRight(value)
        setBorderRadius();
    }

    
    const setBorderRadius = ():void => {
        box.removeAttribute('style')
        console.log(box);
        
        box.style.cssText =
            `border-top-left-radius: ${inputTopLeft}px;` +
            `border-top-right-radius: ${inputTopRight}px;` +
            `border-bottom-right-radius: ${inputBottomRight}px;`+
            `border-bottom-left-radius: ${inputBottomLeft}px;`
    }
    
    return(
        <div className="border_radius">
            <input type="number" name="border-top-left" value={inputTopLeft} id="top_left" className="input_border" onChange={handleInputTopLeft} />
            <input type="number" name="border-top-right" value={inputTopRight} id="top_right" className="input_border" onChange={handleInputTopRight} />
            <div className="caixa">
                <div className='command'>
                    <code>fvck</code>
                </div>
            </div>
            <input type="number" name="border-bottom-left" value={inputBottomLeft} id="bottom_left" className="input_border" onChange={handleInputBottomLeft} />
            <input type="number" name="border-bottom-right" value={inputBottomRight} id="bottom_right" className="input_border" onChange={handleInputBottomRight} />
        </div>
    );
}