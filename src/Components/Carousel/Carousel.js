import React, { Component } from "react";
import Flexbox from "flexbox-react";


class Carousel extends Component {
    render() {
        return(
            <Flexbox flexDirection="row" justifyContent="center" maxHeight="60vh" >
                    {/* maybe rename below id to 'carousel-outer' or something more fitting once you have successfully coded the carousel */}
                <div id="carousel-generic" class="carousel slide" interval="false">
                    {/* carousel indicators */}
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-generic" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-generic" data-slide-to="2"></li>
                    </ol>

                    {/* Wrapper for slides */}
                    <div class="carousel-inner" role="listbox">
                        
                        <div class="item active">
                            {/* IntroSlide Component goes here */}
                            {/* placeholder image */}
                            <img src="https://placeimg.com/100/100/tech" />
                        </div>

                        
                        <div class="item">
                            {/* PortfolioSlide Component goes here */}
                            {/* placeholder image */}
                            <img src="https://placeimg.com/100/100/tech" />
                        </div>

                        <div class="item">
                            {/* ContactSlide Component goes here */}
                            {/* placeholder image */}
                            <img src="https://placeimg.com/100/100/tech" />
                        </div>

                        {/* CONTROLS */}
                        <a class="left carousel-control" href="#carousel-generic" role="button" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#carousel-generic" role="button" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </Flexbox>
        )
    }
}

export default Carousel;