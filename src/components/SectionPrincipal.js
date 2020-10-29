import React from 'react'
import photo from '../assets/images/rusbent.jpg'
import photoDeveloper from '../assets/images/developer.svg'
import photoCode from '../assets/images/undraw_code_review_l1q9.svg'
import { Row, Col } from 'react-materialize'

function SectionPrincipal() {

    return (
        <>
            <div className="container__section__principal">
                <div className="section__principal">
                    <p><span id="console">console</span><span id="log">.log</span><span className="keys">(</span><span id="hola__mundo">"Hola MUNDO!!"</span><span className="keys">)</span></p>
                    <p className="mi__nombre">Mi nombre es Rusbent y soy <br />
                    Desarrollador Full Stack Web JR
                    </p>
                </div>
                <div>
                    <img className="photo__developer" src={photoDeveloper} alt="" />
                </div>
            </div>
            <Row>
                <Col className="black-text center" m={6}>
                    <h3>Sobre mí</h3>
                    <p className="sobre__mi"> Después de haber pasado por el bootcamp de MINDHUB ya me encuentro listo para mi primer trabajo en el sector IT, tengo la experiencia de haber trabajado en equipo usando metodologías agiles, manejo de APIs  y un amplio conocimiento en los que es llevar un proyecto desde cero con React JS.
                    Me considero una persona asertiva, responsable, colaborativa y totalmente adaptable a mi entorno. Por otro lado me gusta familiarizarme con nuevas tecnologías,  y siempre busco  la solución más sencilla pero eficaz ante algún requerimiento. Creo que ser programador es un aprendizaje constante,
                     eso lo hace desafiante y fascinante al mismo tiempo.</p>
                </Col>
                <Col m={6} className="center">
                    <img className="container__photo" src={photoCode} alt="" />
                </Col>
            </Row>

        </>
    )
}

export default SectionPrincipal
