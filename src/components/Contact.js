import React from 'react'
import {TextInput, Button } from 'react-materialize'
import '../styles/contact.css'

function Contact() {
    return (
        <>
            <h2>Contacto</h2>
            <form action="">
                <div className="name__email">
                    <div>
                        <TextInput placeholder="Nombre"></TextInput>
                    </div>
                    <div>
                        <TextInput placeholder="Email"></TextInput>
                    </div>

                </div>
                <div className="telefono__select">
                    <div><TextInput placeholder="Teléfono"></TextInput></div>
                    <div><TextInput placeholder="Asunto"></TextInput></div>
                </div>
                <div className="text__area">
                    <textarea name="" id="" cols="30" rows="6"></textarea>
                </div>
                <Button>Enviar</Button>
            </form>


        </>
    )
}

export default Contact
