import React from "react";
import Carousel  from "react-bootstrap/Carousel";




class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index : 0,
        };
    }
    componentDidMount(){
        this.interval = setInterval(()=>this.setState({index:(this.state.index + 1) % 7}),3000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        return(
            <Carousel  onSelect={this.handleSelect}>
                <Carousel.Item>
                <img className="d-block w-100" src="https://images8.alphacoders.com/545/545905.jpg" alt="İlk Slide"/>
                <Carousel.Caption>
                <h3> Aciklama</h3>
                <p>lorem lorem lorem lorem</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img className="d-block w-100" src="https://p4.wallpaperbetter.com/wallpaper/745/67/618/jujutsu-kaisen-anime-boys-anime-hd-wallpaper-preview.jpg" alt="İlk Slide"/>
                <Carousel.Caption>
                <h3> Aciklama</h3>
                <p>lorem lorem lorem lorem</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Slider;