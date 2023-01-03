import React, { ChangeEvent, useState } from "react";
import '../styles/Box.css'
import { BorderRadius } from "../types/borderRadius";


export function Box() {
    const [inputTopLeft, setInputTopLeft] = useState('');
    const [inputTopRight, setInputTopRight] = useState('');
    const [inputBottomLeft, setInputBottomLeft] = useState('');
    const [inputBottomRight, setInputBottomRight] = useState('');

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
        console.log(borderRadius());
        
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

    const handleCopyText = (e:any) => {
        e.select();
        navigator.clipboard.writeText(e.value);
    }
    const text = () => {
        return{
            __html: `border-bottom-left-radius: ${borderRadius().borderBottomLeftRadius};
            border-bottom-right: ${borderRadius().borderBottomRightRadius};
            border-top-left-radius: ${borderRadius().borderTopLeftRadius};
            border-top-right-radius: ${borderRadius().borderTopRightRadius}`
        }
    }
    return(
        <div className="border_radius">
            <input type="number" name="border-top-left" placeholder="0" value={inputTopLeft} id="top_left" className="input_border" onChange={handleInputTopLeft}/>
            <input type="number" name="border-top-right" placeholder="0" value={inputTopRight} id="top_right" className="input_border" onChange={handleInputTopRight} />
            <div style={borderRadius()} className="caixa">
                <div  className='command'>
                    <code dangerouslySetInnerHTML={text()}></code>
                </div>
            </div>
            <input type="number" name="border-bottom-left" placeholder="0" value={inputBottomLeft} id="bottom_left" className="input_border" onChange={handleInputBottomLeft} />
            <input type="number" name="border-bottom-right" placeholder="0" value={inputBottomRight} id="bottom_right" className="input_border" onChange={handleInputBottomRight} />
        </div>
    );
}