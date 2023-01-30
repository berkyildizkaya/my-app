import React,{useState} from "react";
import Carousel  from "react-bootstrap/Carousel";

function Slider(){
    const[index,setIndex] = useState(0);
    const handleSelect = (selectedIndex,e) =>{
      setIndex(selectedIndex);  
    };

    return(
        <Carousel activeIndex={index} onSelect={handleSelect}>

            <Carousel.Item>
            <img className="d-block w-100" src="https://images8.alphacoders.com/545/545905.jpg" alt="İlk Slide"/>
        
            <Carousel.Caption>
            <h3> Aciklama</h3>
            <p>lorem lorem lorem lorem</p>
            </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
            <img className="d-block w-100" src="https://images8.alphacoders.com/545/545905.jpg" alt="İlk Slide"/>
        
            <Carousel.Caption>
            <h3> Aciklama</h3>
            <p>lorem lorem lorem lorem</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;