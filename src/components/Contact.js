import React from 'react'
import { TextInput, Button } from 'react-materialize'
import contact from '../assets/images/contact.svg'
import '../styles/contact.css'

function Contact() {
    return (
        <>  

        <div className="container__form__contact">
            <div>
                <p>Contacto</p>
                <img src={contact} alt=""/>
            </div>
        <form action="">
                <div>
                    <input type="text" placeholder="Nombre" />
                    <input type="email" placeholder="email" />
                </div>
                <div>
                    <input type="text" placeholder="Celular" />
                    <input type="text" placeholder="Asunto" />

                </div>
                <div>
                    <textarea class="materialize-textarea" name="" id="" cols="30" rows="10" maxLength="350" placeholder="Mensaje - Max 350 caracteres."></textarea>
                </div>
                <div>
                <button>Enviar</button>
                </div>
                
            </form>
        </div>

         
        </>
    )
}

export default Contact
