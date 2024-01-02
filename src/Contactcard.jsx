import React, { useState } from 'react';

const ContactCard = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
    });

    const [notification, setNotification] = useState({
        show: false,
        type: 'success', // or 'error'
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form data
        if (!formData.name || !formData.message) {
            setNotification({
                show: true,
                type: 'error',
                message: 'Please fill in all required fields',
            });

            setTimeout(() => {
                setNotification({
                    show: false,
                    type: 'error',
                    message: '',
                });
            }, 5000);
    
            return;
        }

        // Construct the WhatsApp link
        const phone_number = '6285786946323'; // Update with the correct phone number
        const whatsappMessage = `Name: ${formData.name}Message: ${formData.message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappLink = `https://wa.me/${phone_number}?text=${encodedMessage}`;

        // Open the WhatsApp link in a new tab
        window.open(whatsappLink, '_blank');

        setNotification({
            show: true,
            type: 'success',
            message: 'Message sent via WhatsApp',
        });

        // Clear the form data after submission
        setFormData({
            name: '',
            message: '',
        });

        // Hide notification after 5 seconds (adjust the time as needed)
        setTimeout(() => {
            setNotification({
                show: false,
                type: 'success',
                message: '',
            });
        }, 5000);
    };

    return (
        <div className="mx-auto p-10 bg-gray-800">
            <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div>
                        <label className="text-white block">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full py-2 px-3 bg-gray-600 rounded-md"
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        <label className="text-white block">Your Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="8"
                            className="w-full py-2 px-3 bg-gray-600 rounded-md"
                            placeholder="Write your message..."
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-green-500 text-black w-full p-3 hover:bg-green-700"
                        >
                            Send Message on WhatsApp
                        </button>
                    </div>   
                </div>
            </form>
            {notification.show && (
                <div
                    className={`mt-4 p-3 ${
                        notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                    } text-white`}
                >
                    {notification.message}
                </div>
            )}
        </div>
    );
};

export default ContactCard;
