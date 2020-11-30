import React from 'react'
import styled from 'styled-components'
import github from '../assets/icons/001-github 1.svg'
import linkedIn from '../assets/icons/002-linkedin 1.svg'
import whatsapp from '../assets/icons/003-whatsapp 1.png'
import telegram from '../assets/icons/004-telegram 1.svg'
import  { keyframes } from 'styled-components'
import { bounce } from 'react-animations'
import '../styles/iconsSocial.css'


const Bounce = styled.div`animation:2s ${keyframes`${bounce}`} infinite`
const BounceTwo = styled.div`animation:3s ${keyframes`${bounce}`} infinite`

function IconsSocial() {
    return (
            <div className="icons__social">
                <Bounce><a href="https://github.com/nulltu"><img src={github} alt="" /></a></Bounce>
                <BounceTwo><a href="https://www.linkedin.com/in/rusbent/"><img src={linkedIn} alt="" /></a></BounceTwo>
                <Bounce><a href="https://wa.link/drumpu"><img src={whatsapp} alt="" /></a></Bounce>
                <BounceTwo><a href="https://telegram.me/Rusbent"><img src={telegram} alt="" /></a></BounceTwo>
            </div>
    )
}

export default IconsSocial
