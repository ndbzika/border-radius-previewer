import { Console, log } from "console";
import React, { ChangeEvent, DetailedHTMLProps, MouseEventHandler, useState } from "react";
import '../styles/Box.css'
import { BorderRadius } from "../types/borderRadius";


export function Box() {
    const [inputTopLeft, setInputTopLeft] = useState('0');
    const [inputTopRight, setInputTopRight] = useState('0');
    const [inputBottomLeft, setInputBottomLeft] = useState('0');
    const [inputBottomRight, setInputBottomRight] = useState('0');

    function borderRadius(): BorderRadius{
        const borders = {
            borderBottomLeftRadius: `${inputBottomLeft}px`,
            borderBottomRightRadius:  `${inputBottomRight}px`,
            borderTopLeftRadius: `${inputTopLeft}px`,
            borderTopRightRadius: `${inputTopRight}px`
        }
        return borders;
    }

    const handleInputTopLeft = (event:ChangeEvent) :void => {
        let {value} = event.target as HTMLInputElement
        setInputTopLeft(value)
        
    }

    const handleInputTopRight = (event:ChangeEvent) :void => {
        let {value} = event.target as HTMLInputElement
        setInputTopRight(value)
    }

    const handleInputBottomLeft = (event:ChangeEvent) :void => {
        let {value} = event.target as HTMLInputElement
        setInputBottomLeft(value)
    }

    const handleInputBottomRight = (event:ChangeEvent) :void => {
        let {value} = event.target as HTMLInputElement
        setInputBottomRight(value)
    }

    const handleCopyText = () :void => {

    }
    const bl = () => {
        return{
            __html: `border-bottom-left-radius:${borderRadius().borderBottomLeftRadius};`

        }
    }
    const br = () => {
        return{
            __html: `border-bottom-right-radius:${borderRadius().borderBottomRightRadius};`

        }
    }
    const tl = () => {
        return{
            __html: `border-top-left-radius:${borderRadius().borderTopLeftRadius};`
        }
    }
    const tr = () => {
        return{
            __html: `border-top-right-radius:${borderRadius().borderTopRightRadius};`
        }
    }
    return(
        <div className="border_radius">
            <input type="number" name="border-top-left" placeholder="0" value={inputTopLeft} id="top_left" className="input_border" onChange={handleInputTopLeft}/>
            <input type="number" name="border-top-right" placeholder="0" value={inputTopRight} id="top_right" className="input_border" onChange={handleInputTopRight} />
            <div style={borderRadius()} className="caixa">
                <div className='command'>
                    <code dangerouslySetInnerHTML={bl()}></code>
                    <br />
                    <code dangerouslySetInnerHTML={br()}></code>
                    <br />
                    <code dangerouslySetInnerHTML={tl()}></code>
                    <br />
                    <code dangerouslySetInnerHTML={tr()}></code>
                </div>
            </div>
            <input type="number" name="border-bottom-left" placeholder="0" value={inputBottomLeft} id="bottom_left" className="input_border" onChange={handleInputBottomLeft} />
            <input type="number" name="border-bottom-right" placeholder="0" value={inputBottomRight} id="bottom_right" className="input_border" onChange={handleInputBottomRight} />
        </div>
    );
}