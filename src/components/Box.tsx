import React, { ChangeEvent, useState } from "react";
import '../styles/Box.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';


export function Box() {
    const [inputTopLeft, setInputTopLeft] = useState('0');
    const [inputTopRight, setInputTopRight] = useState('0');
    const [inputBottomLeft, setInputBottomLeft] = useState('0');
    const [inputBottomRight, setInputBottomRight] = useState('0');
    const [copied, setCopied] = useState(false);

    function borderRadius() {
        return {
            borderBottomLeftRadius: `${inputBottomLeft}px`,
            borderBottomRightRadius:  `${inputBottomRight}px`,
            borderTopLeftRadius: `${inputTopLeft}px`,
            borderTopRightRadius: `${inputTopRight}px`
        }
    }

    const handleInputTopLeft = (event:ChangeEvent) => {
        let {value} = event.target as HTMLInputElement
        setInputTopLeft(value)
    }

    const handleInputTopRight = (event:ChangeEvent) => {
        let {value} = event.target as HTMLInputElement
        setInputTopRight(value)
    }

    const handleInputBottomLeft = (event:ChangeEvent) => {
        let {value} = event.target as HTMLInputElement
        setInputBottomLeft(value)
    }

    const handleInputBottomRight = (event:ChangeEvent) => {
        let {value} = event.target as HTMLInputElement
        setInputBottomRight(value)
    }

    const [code, setCode] = useState();
    
    return(
        <>
        <div className="border_radius">
            <input type="number" name="border-top-left" placeholder="0" value={inputTopLeft} id="top_left" className="input_border" onChange={handleInputTopLeft}/>
            <input type="number" name="border-top-right" placeholder="0" value={inputTopRight} id="top_right" className="input_border" onChange={handleInputTopRight} />
            <div style={borderRadius()} className="caixa">
                <div className='command'>
                    <code>
                        border-bottom-left-radius: {inputBottomLeft}px;
                        border-bottom-right-radius:  {inputBottomRight}px;
                        border-top-left-radius: {inputTopLeft}px;
                        border-top-right-radius: {inputTopRight}px;
                    </code>
                </div>
            </div>
            <input type="number" name="border-bottom-left" placeholder="0" value={inputBottomLeft} id="bottom_left" className="input_border" onChange={handleInputBottomLeft} />
            <input type="number" name="border-bottom-right" placeholder="0" value={inputBottomRight} id="bottom_right" className="input_border" onChange={handleInputBottomRight} />
        </div>
        <CopyToClipboard 
        onCopy={()=> setCopied(true)}
        options={{message:'copied!'}} 
        text={  `border-bottom-left-radius: ${inputBottomLeft}px;
                border-bottom-right-radius:  ${inputBottomRight}px;
                border-top-left-radius: ${inputTopLeft}px;
                border-top-right-radius: ${inputTopRight}px;` }>
            <button>Copy code</button>
        </CopyToClipboard>
        </>
    );
}