import React, { useState } from 'react';
  const Form = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'fullName') {
            setFullName(value);
        } else if (name === 'email') {
            setEmail(value);
        }
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'my_preset');
            const response = await fetch('https://api.cloudinary.com/v1_1/dig52r1m8/image/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setAvatar(data.secure_url);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
            <label className="block text-gray-700 mb-2">Full Name:</label>
            <input type='text' name='fullName' value={fullName} onChange={handleChange} className="w-full p-2 border rounded-lg mb-4" />
            <label className="block text-gray-700 mb-2">Email:</label>
            <input type='email' name='email' value={email} onChange={handleChange} className="w-full p-2 border rounded-lg mb-4" />
            <label className="block text-gray-700 mb-2">Avatar:</label>
            <input type='file' name='avatar' accept='image/*' onChange={handleFileChange} className="w-full p-2 border rounded-lg mb-4" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
            </form>
        );
    }

export default Form;g