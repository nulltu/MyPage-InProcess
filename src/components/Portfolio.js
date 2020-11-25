import React from 'react'
import congress from '../assets/images/Congress.png'
import mytinerary from '../assets/images/MyTinerary.png'
import houseMuv from '../assets/images/HouseMuv.png'
import pyral from '../assets/images/pyral.png'
import github from '../assets/icons/001-github 1.svg'
import demo from '../assets/images/demo.svg'
import '../styles/portfolio.css'
import {
    SideBySideMagnifier,
    MOUSE_ACTIVATION,
} from "react-image-magnifiers";

function Portfolio() {
    return (
        <section className="container__super__portfolio">
            <h2>Portfolio</h2>
            <div className="container__items__portfolio">
                <div>
                    <div className="item__portfolio">
                        <p>Congress 113</p>
                        <SideBySideMagnifier
                            className="input-position"
                            mouseActivation={MOUSE_ACTIVATION.CLICK}
                            imageSrc={congress}
                            overlayOpacity={0.4}
                            alwaysInPlace={true}
                            fillGap={false}
                            cursorStyle={"zoom-in"}
                        />
                        <div className="container__links">
                        <a href="https://stoic-northcutt-640592.netlify.app/"><img src={demo} alt="demo"></img>Demo</a>
                            <a href="https://github.com/nulltu/Congress-113"><img src={github}alt=""></img> Repo</a>
                        </div>
                    </div>
                    <div className="item__portfolio">
                        <p>MyTinerary</p>
                        <SideBySideMagnifier
                            className="input-position"
                            mouseActivation={MOUSE_ACTIVATION.CLICK}
                            imageSrc={mytinerary}
                            overlayOpacity={0.4}
                            alwaysInPlace={true}
                            fillGap={false}
                            cursorStyle={"zoom-in"}
                        />
                        <div className="container__links">
                
                            <a href="https://github.com/nulltu/MyTinerary-Travel"><img src={github} alt=""></img> Repo</a>
                        </div>
                    </div>

                </div>

                <div>
                    <div className="item__portfolio">
                        <p>HouseMuv</p>
                        <SideBySideMagnifier
                            className="input-position"
                            mouseActivation={MOUSE_ACTIVATION.CLICK}
                            imageSrc={houseMuv}
                            overlayOpacity={0.4}
                            alwaysInPlace={true}
                            fillGap={false}
                            cursorStyle={"zoom-in"}
                        />
                        <div className="container__links">
                        <a href="https://housemuv-white.herokuapp.com/sign-in"><img src={demo} alt=""></img>  Demo</a>
                            <a href="https://github.com/nulltu/HOUSE-MUV"><img src={github} alt=""></img> Repo</a>
                        </div>
                    </div>
                    <div className="item__portfolio">
                        <p>Ecommerce Pyral</p>
                        <SideBySideMagnifier
                            className="input-position"
                            mouseActivation={MOUSE_ACTIVATION.CLICK}
                            imageSrc={pyral}
                            overlayOpacity={0.4}
                            alwaysInPlace={true}
                            fillGap={false}
                            cursorStyle={"zoom-in"}
                        />
                        <div className="container__links">
                            <a href="http://pyral.herokuapp.com/"><img src={demo} alt=""></img>  Demo</a>
                            <a href="https://github.com/nulltu/-Ecomerce-Clothing"><img src={github} alt=""></img> Repo</a>
                        </div>

                    </div>
                </div>


            </div>



        </section>
    )
}

export default Portfolio
