import { useState } from 'react'
import './index.css'

const Contact = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const submitForm = e => {
        e.preventDefault()
        setFullName("")
        setEmail("")
        setPhone("")
        setMessage("")
    }

    return (
        <div id="contact" className='contact-container'>
            <h1 className='info contact'>Contact</h1>
            <form className='contact-form-container' onSubmit={submitForm}>
                <p className='contact-fill'>Fill out the booking form below to ask any questions, or reach out to us directly at <a className='mail' href=' '>help@velvetclouds.com</a> with any questions or concerns. </p>
                <div className='input-container'>
                    <label htmlFor='fullName'>Full Name</label>
                    <input id="fullName" type='text' placeholder='Full Name' value={fullName} onChange={e => setFullName(e.target.value)} />
                </div>
                <div className='input-container'>
                    <label htmlFor='email'>Email</label>
                    <input id="email" type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='input-container'>
                    <label htmlFor='phone'>Phone</label>
                    <input id="phone" type='number' placeholder='Phone' value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
                <div className='input-container'>
                    <label htmlFor='message'>Message</label>
                    <textarea id="message" type='text' placeholder='Message' rows={8} value={message} onChange={e => setMessage(e.target.value)} />
                </div>
                <button type='submit' className='tickets-button' style={{marginTop: '35px'}}>Submit</button>
            </form>
        </div>
    )
}

export default Contact