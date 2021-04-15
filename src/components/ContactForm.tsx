import React, { useRef, useState } from 'react'
import { FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core'
import ButtonFlex from '@root/theme/ButtonFlex'
import Validator from '@wilfredlopez/validator'

import classes from './ContactForm.module.css'
import { EMAIL_API_URL } from '../constants'


const THANK_YOU = 'Thank you. Your Message has been sent.'


interface EmailBodyParams {
    name: string
    email: string
    subject: string
    message: string
}

function sendAPIRequest(values: EmailBodyParams) {

    return fetch(EMAIL_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
    }).then(res => res.json()).then(data => data as { result: "Success" | "Failure" })
}


export const ContactForm = () => {
    const [{ email, message, name, subject }, setState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const emailRef = useRef<HTMLInputElement>(null)
    const [emailError, setEmailError] = useState("")
    const [showThankYou, setShowThankYou] = useState(false)

    async function sendContactForm() {
        const validEmail = Validator.isEmail(email)
        if (!validEmail) {
            setEmailError("Invalid Email")
            emailRef.current?.focus()
            return
        }

        try {
            const req = await sendAPIRequest({
                name, email, subject, message
            })
            if (req.result === 'Success') {
                console.log("SUCCESS")
            }
            toggleShowThanYou()
        } catch (error) {
            console.log(error)
        } finally {
            setState({
                email: "",
                message: "",
                name: "",
                subject: ""
            })

        }

    }

    function toggleShowThanYou() {
        setShowThankYou(true)
        setTimeout(() => {
            setShowThankYou(false)
        }, 5000)
    }


    function handleChange(evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const name = evt.target.name
        setState(current => {
            return { ...current, [name]: evt.target.value }
        })
    }


    return (
        <>
            <form className={classes.ContainerForm} onSubmit={(e) => {
                e.preventDefault()
                sendContactForm()
            }}>
                <FormControl fullWidth>

                    <InputLabel htmlFor="component-name">Name</InputLabel>
                    <Input
                        id="component-name"
                        onChange={handleChange}
                        name="name"
                        value={name} required fullWidth />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="component-email">Email</InputLabel>
                    <Input
                        id="component-email"
                        onChange={handleChange}
                        name="email"
                        ref={emailRef}
                        onBlur={() => {
                            if (!Validator.isEmail(email)) {
                                setEmailError("Invalid Email")
                            } else {
                                setEmailError("")
                            }
                        }}
                        fullWidth
                        error={emailError !== ''}
                        value={email} placeholder="email" required type="email" />
                    <FormHelperText error={emailError !== ''}>{emailError}</FormHelperText>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="component-subject">Subject</InputLabel>
                    <Input
                        id="component-subject"
                        fullWidth
                        name="subject"
                        onChange={handleChange}
                        value={subject} placeholder="subject" required />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="component-subject">Message</InputLabel>
                    <Input
                        fullWidth
                        name="message"
                        onChange={handleChange}
                        value={message} multiline placeholder="message" required rows={5} />
                </FormControl>
                <FormControl fullWidth>
                    <ButtonFlex className={classes.ButtonSubmit} color="outlinedDefault" type="submit">Send</ButtonFlex>
                </FormControl>
            </form>
            <div className={classes.ThanksDiv}>
                {showThankYou &&
                    (<p>
                        {THANK_YOU}
                    </p>)
                }
            </div>
        </>
    )
}
