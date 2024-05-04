import { useState } from 'react';
import "./Contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Message submitted successfully!');
                // Optionally, reset the form data after successful submission
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to submit message');
            }
        } catch (error) {
            console.error('Error submitting message:', error);
            alert('Failed to submit message. Please try again later.');
        }
    };

    return (
        <div className="contact">
            <div className="headingcontact">
                <h1>Contact Me</h1>
            </div>
            <div className="headingh3contact">
                <h3>Please fill out the form below to discuss any work opportunities</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Your Name"
                    className="input1"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <br />
                <input
                    placeholder="Your email"
                    type="email"
                    className="input2"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder="Your Message"
                    rows="5"
                    cols="50"
                    className="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                ></textarea>
                <br />
                <button type="submit" className="submitbtn">Submit</button>
            </form>
        </div>
    );
}
