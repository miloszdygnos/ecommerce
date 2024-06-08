import React, {useState} from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import img1 from "../assets/jordan1.png";
import img2 from "../assets/jordan3.jpg";
import img3 from "../assets/jordan4.jpg";
import img4 from "../assets/jordan5.jpg";
import img5 from "../assets/jordan high.png";
import img6 from "../assets/jordan high2.png";


export default function Home() {
    const imgs = [img1, img2, img3, img4, img5, img6]; 

    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex(index => {
            if(index === 0) return imgs.length - 1
            return index - 1 
        })
    }
    const handleNext = () => {
        setIndex(index => {
            if(index === imgs.length - 1) return 0;
            return index + 1
        })
    }
    return(
        <div className="homePage">
            <Navbar />
           <h1 className="heroText"><span className="heroLogo">Sneaker Head</span>
                <p className="heroDescription">The only trustworhy online sneaker reselling shop
                <br/><span className="offer">check our bestsellers down below</span>
           </p>
           </h1>
           <div className="outerCarousel">
            <button 
                    className="prevBtn carouselBtn"
                    onClick={handlePrev}
                >&lt;</button>
                <button 
                    className="nextBtn carouselBtn"
                    onClick={handleNext}
                        
                >&gt;</button>

             
             <Link to="/products"><Carousel className="outerCarousel" index={index} imgs={imgs}/></Link>
           </div>
            
        </div>
    )
}