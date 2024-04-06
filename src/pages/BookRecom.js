import React, { useState } from 'react';
import axios from 'axios';

const BookRecom = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        degree: '',
        department: '',
        related_info: ''
    });
    const [result, setResult] = useState('');
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('/submit_data', formData);
            console.log(response.data);

            const resultResponse = await axios.get('/submit_data');
            console.log(resultResponse.data);
            setResult(resultResponse.data.display);

            setFormData({
                degree: '',
                department: '',
                related_info: ''
            });
            setShowModal(true); // Open the modal after fetching the result
        } catch (error) {
            console.error('Error submitting form data:', error);
        } finally {
            setLoading(false);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const parsedP = React.createElement("div", { dangerouslySetInnerHTML: { __html: result } });

    return (
        <div className="container mx-auto mt-20">
            <h2 className="text-2xl font-semibold mb-8">BOOk RECOMMENDER</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="degree" className="block mb-2">Degree:</label>
                    <input type="text" id="degree" name="degree" value={formData.degree} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="department" className="block mb-2">Department:</label>
                    <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="related_info" className="block mb-2">Related Info:</label>
                    <input type="text" id="related_info" name="related_info" value={formData.related_info} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md relative">
                    {loading && <div className="absolute inset-0 bg-gray-600 opacity-50 rounded-md"></div>}
                    {loading ? 'Loading...' : 'Submit'}
                </button>
            </form>

            {/* Modal component */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
                    <div className="bg-white p-8 rounded-md z-10">
                        <h2 className="text-2xl font-semibold mb-4">Result:</h2>
                        <div>{parsedP}</div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookRecom;
