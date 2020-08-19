import React from 'react';
import Coombes from '../../assets/images/Coombes.png'
import Momo from '../../assets/images/Momo.png';
import Kappu from '../../assets/images/Kappu.png';
import Nille from '../../assets/images/Nille.png';
import Penemille from '../../assets/images/Penemille.png';
const loadImage = (props)=>{
    let src =require('../../assets/images/'+props.imgName+'.png') ;

    return <img src={src} alt="Set" />
}
export default loadImage;