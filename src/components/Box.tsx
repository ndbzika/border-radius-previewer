import React, { useState } from "react";
import '../styles/Box.css'


export function Box() {
    const [inputTopLeft, setInputTopLeft] = useState(0);
    const [inputTopRight, setInputTopRight] = useState(0);
    const [inputBottomLeft, setInputBottomLeft] = useState(0);
    const [inputBottomRight, setInputBottomRight] = useState(0);

    class values {
        tl
        tr
        bl
        br
        constructor(tl:number,tr:number,bl:number,br:number){
            this.tl = tl
            this.tr = tr
            this.bl = bl
            this.br = br
        }
    }
    interface iValues {
        tl:number
        tr:number
        bl:number
        br:number
    }

    const handleInputTopLeft = (e:any) :void => {
        let {value} = e.target.value;
        setInputTopLeft(value)
        setBorderRadius;
    }
    const handleInputTopRight = (e:any) :void => {
        let {value} = e.target.value
        setInputTopRight(value)
        setBorderRadius;
    }
    const handleInputBottomLeft = (e:any) :void => {
        let {value} = e.target.value
        setInputBottomLeft(value)
        setBorderRadius;
    }
    const handleInputBottomRight = (e:any) :void => {
        let {value} = e.target.value
        setInputBottomRight(value)
        console.log(inputBottomRight);
        
        setBorderRadius;
    }

    const setBorderRadius = (border:iValues):void => {
        //let valores = new values(setInputTopLeft,setInputTopRight,setInputBottomLeft,setInputBottomRight)
        let box: HTMLElement = document.querySelector(".caixa") as HTMLElement;
        console.log()
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