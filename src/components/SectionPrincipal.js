import React from 'react'
import Styled, { keyframes } from 'styled-components'
import { bounce } from 'react-animations'
import photo from '../assets/images/rusbent.jpg'
import photoDeveloper from '../assets/images/developer.svg'
import styled from 'styled-components'
import github from '../assets/icons/001-github 1.svg'
import linkedIn from '../assets/icons/002-linkedin 1.svg'
import whatsapp from '../assets/icons/003-whatsapp 1.png'
import telegram from '../assets/icons/004-telegram 1.svg'

const Bounce = styled.div`animation:2s ${keyframes`${bounce}`} infinite`
const BounceTwo = styled.div`animation:3s ${keyframes`${bounce}`} infinite`

function SectionPrincipal() {

    return (
        <>
            <section className="container__section__principal">
                <div className="section__principal">
                    <p><span id="console">console</span><span id="log">.log</span><span className="keys">(</span><span id="hola__mundo">"Hola MUNDO!!"</span><span className="keys">)</span></p>
                    <p className="mi__nombre">Mi nombre es <span id="rusbent">Rusbent</span> y soy <br />
                    Desarrollador Full Stack Web JR
                    </p>
                </div>
                <div>
                    <img className="photo__developer" src={photoDeveloper} alt="" />
                </div>
            </section>
            <section className="icons__social">
                <Bounce><a href="https://github.com/nulltu"><img src={github} alt="" /></a></Bounce>
                <BounceTwo><a href="https://www.linkedin.com/in/rusbent/"><img src={linkedIn} alt="" /></a></BounceTwo>
                <Bounce><img src={whatsapp} alt="" /></Bounce>
                <BounceTwo><img src={telegram} alt="" /></BounceTwo>
            </section>
            <section>
                <h2>Sobre Mí</h2>
                <div  className="sobre__mi">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores numquam temporibus blanditiis culpa architecto ipsam fugiat placeat est at iure error, sed reprehenderit cum officiis nam tenetur laborum dolore qui
                </p>
                    <img src={photo} alt="" />
                </div>

            </section>


        </>
    )
}

export default SectionPrincipal
