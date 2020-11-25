import React from 'react'
import photoDeveloper from '../assets/images/undraw_code_thinking_1jeh.svg'
import '../styles/presentation.css'

function Presentation() {
    return (
        <div>
            <section className="container__section__principal">
                <div className="section__principal">
                    <p><span id="console">console</span><span id="log">.log</span><span className="keys">(</span><span id="hola__mundo">"Hola MUNDO!!"</span><span className="keys">)</span></p>
                    <p className="mi__nombre">Mi nombre es <span id="rusbent">Rusbent</span> y soy
                    Desarrollador Full Stack Web JR
                    </p>
                </div>
                <div>
                    <img className="photo__developer" src={photoDeveloper} alt="" />
                </div>
            </section>

        </div>
    )
}

export default Presentation
