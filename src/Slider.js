import React,{useState} from 'react'
import './slider.scss'
import ImgComp from './ImgComp'
import sample  from "./Images/sample.jpg";
import i5 from './Images/i5.jpg'
import i3  from './Images/i3.jpg'
import i6 from './Images/i6.jpg'
import test from './Images/test.jpg'



function  Slider(){

    let sliderArr = [ <ImgComp src="https://wonderfulengineering.com/wp-content/uploads/2016/01/Desktop-Wallpaper-4.jpg" /> ,<ImgComp src={sample} /> ,<ImgComp src={i3} />,<ImgComp src={i5} />,<ImgComp src={i6} />]
    const [x,setX]=useState(0)

    const goLeft=()=>{
        x===0?setX(-100*(sliderArr.length-1)):setX(x+100)
    }

    const goRight=()=>{
        x===-100*(sliderArr.length-1)?setX(0):setX(x-100)
    }
    return(
        <div className="slider">
        {
            sliderArr.map((item,index)=>{
                return(
                    <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                        {item}
                    </div>
                )
            }

            )}

        <button id="goLeft" onClick={goLeft}><i class="fas fa-chevron-left"></i></button>
        <button id="goRight" onClick={goRight}><i class="fas fa-chevron-right"></i></button>

        </div>
    )
}

export default Slider