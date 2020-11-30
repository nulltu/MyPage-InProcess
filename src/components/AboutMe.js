import React from 'react'
import photo from '../assets/images/undraw_about_me_wa29.svg'
import '../styles/aboutMe.css'

function AboutMe() {
    return (
        <section className="container__section__sobre__mi">
            <div className="sobre__mi">
                <div>
                    <h2 className="title__sobre__mi">Sobre Mí</h2>
                    <p>
                        Soy desarrollador web JR Full Stack MERN. Después de haber pasado por el bootcamp de MINDHUB ya me encuentro listo para mi primer trabajo en el sector IT, tengo la experiencia de haber trabajado en equipo usando metodologías agiles, manejo de APIs  y un amplio conocimiento en los que es llevar un proyecto desde cero con React JS.
                        Me considero una persona asertiva, responsable, colaborativa y totalmente adaptable a mi entorno. Por otro lado me gusta familiarizarme con nuevas tecnologías,  y siempre busco  la solución más sencilla pero eficaz ante algún requerimiento.
                    </p>
                    <p>"Creo que ser desarrollador es un aprendizaje constante, eso lo hace desafiante y fascinante al mismo tiempo".</p>
                </div>
                <img src={photo} alt="" />
            </div>
        </section>
    )
}
export default AboutMe
