import React, { useCallback, useReducer } from 'react';
import Button from '../Button';
import ContactOverlay from '../ContactOverlay';
import Input from '../Input';
import Socials from '../Socials';
import Title from '../Title';

import styles from './styles.module.css';

const initialState = {
    email: "",
    name: "",
    message: "",
}

const reducer = (state, record) => ({ ...state, ...record })

function Contact() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const changeInputHandler = useCallback(e => {
        const { name, value } = e.target;

        dispatch({ [name]: value })
    }, [])

    const sendMail = useCallback(e => {
        /* 
            Enviar email
        */
    }, [])

    return <section className={styles.container}>
        <ContactOverlay />

        <Title size="md" highlightText=" Vamos conversar!">Curtiu?</Title>

        <div style={{ maxWidth: "900px", margin: "50px auto" }}>
            <Input
                name="email"
                placeholder="Email"
                value={state.email}
                type="email"
                onChange={changeInputHandler}
            />

            <Input
                name="name"
                placeholder="Nome"
                value={state.name}
                onChange={changeInputHandler}
            />

            <Input
                name="message"
                placeholder="Mensagem..."
                value={state.message}
                onChange={changeInputHandler}
                type="textarea"
            />

            <Button onClick={sendMail}>Enviar</Button>
        </div>

        <div style={{ maxWidth: "900px", margin: "80px auto", display: "flex", flexDirection: 'column', alignItems: "center", gap: "20px" }}>
            <Title size="sm" highlightText=" Veja as redes sociais!">Não gosta de email?</Title>
            <Socials />
        </div>

    </section>;
}

export default Contact;