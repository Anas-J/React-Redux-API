import React from 'react';
import Carousel from 'react-elastic-carousel';
import './carousel.css';
import { connect } from 'react-redux';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, },
    { width: 786, itemsToShow: 3, itemsToScroll: 3, },
];

const carousel = (props) => {
    const arr=props.data;
    return (
        <>
            {arr.length ? (
                <div style={{ marginTop: "1.8rem" }}>
                <Carousel breakPoints={breakPoints}>
                    {arr.map((item) => {
                        var styleimg = {};
                        console.log(item.thumbnail.length);
                        item.thumbnail.length ===0
                        ? (styleimg = {
                            backgroundImage:"url(https://images.pexels.com/photos/1907227/pexels-photo-1907227.jpeg?cs=srgb&dl=pexels-buenosia-carol-1907227.jpg&fm=jpg)",
                            backgroundSize: "cover",
                            })
                        : (styleimg = {
                            backgroundImage: "url(" + item.thumbnail + ")",
                            backgroundSize: "cover",
                
                        });

                        return (
                            <div>
                                <a href={item.href} target="_blank" rel="noreferrer">
                                    <div className="carousel" style={styleimg}>
                                    <div className="desc">
                                        <div>Title: {item.title}</div>
                                        <div>
                                            {" "}
                                            <span className="ingred">Ingredients: </span>{" "}
                                                {item.ingredients}
                                        </div>
                                    </div>
                                    </div>
                                </a>
                            </div>
                            
                        );
                    })}
                    </Carousel>
                </div>
                ) : (            
                    <div className="carousel-wrapper" style={{marginTop: "3em"}}>
                        <Carousel breakPoints={breakPoints}>
                            <div
                                className="carousel"
                                style={{
                                    backgroundImage:
                                    "url(https://images.pexels.com/photos/372980/pexels-photo-372980.jpeg?cs=srgb&dl=pexels-pixabay-372980.jpg&fm=jpg)",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                            <div
                                className="carousel"
                                style={{
                                    backgroundImage:
                                    "url(https://images.pexels.com/photos/1907227/pexels-photo-1907227.jpeg?cs=srgb&dl=pexels-buenosia-carol-1907227.jpg&fm=jpg)",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                            <div
                                className="carousel"
                                style={{
                                    backgroundImage:
                                    "url(https://images.pexels.com/photos/2459870/pexels-photo-2459870.png?cs=srgb&dl=pexels-taner-soyler-2459870.jpg&fm=jpg)",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                        </Carousel>
                    </div>
                )
            }
        </>
    );
}

const mapStateToProps = (store) => {
    return {
       data: store,
    };
};
  
export default connect(mapStateToProps, null)(carousel);