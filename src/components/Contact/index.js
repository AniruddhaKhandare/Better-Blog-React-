import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail=(e)=>{
        e.preventDefault()
        emailjs
        .sendForm(
            'gmail',
            "template_4jqswix",
            refForm.current,
            'user_O5TvUcfVV4ep7v0GP'
        )
        .then(
            ()=>{
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            ()=>{
                alert('Failed to send the message, please try again')
            }
        )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15} />
                    </h1>
                    <p>
                        I am intrested in freelance opportunities - especially ambition or large projects. However, if you have other request or question, don't hesitate to contact me me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name='name' placeholder='Name' required />
                                </li>
                                <li className="half">
                                    <input type="email" name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type="text" placeholder='Subject' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name="message" id="" cols="30" rows="10" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact;