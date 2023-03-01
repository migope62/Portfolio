import React, { useState } from 'react';
import './form.css';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3005/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('Une erreur est survenue lors de l\'envoi du message');
                }
            })
            .then(data => {
                alert(data);
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(error => {
                console.error(error);
                alert(error.message);
            });
    };

    return (
        <div className="contact">
            <h1>Contactez-moi via ce formulaire ou par E-mail à Maxime62580@laposte.net</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default Form;