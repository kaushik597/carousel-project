import React from 'react'

function ImgComp(src){
    let imgstyles={
        width:100+"%",
        height:"auto"
    }

    return <img src={src} alt="slide-img" style={imgstyles}></img>
}

export default ImgComp