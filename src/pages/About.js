import React, { useState } from "react";

function About() {
    const [expandedIndex, setExpandedIndex] = useState(-1);
    const interview_questions = [
        {
            question: "Controlling Noise Levels",
            answer: "To ensure a conducive environment for study and concentration, our project incorporates advanced noise detection technology. Using state-of-the-art sensors strategically placed throughout the library, we're able to monitor noise levels in real-time. By analyzing this data, we can implement automated measures to mitigate excessive noise, such as issuing reminders or adjusting environmental controls. This proactive approach ensures that library patrons can enjoy a quiet and focused atmosphere conducive to learning and research."
        },
        {
            question: "Real Time Study Room Status Updates",
            answer: "Our project incorporates real-time monitoring of study room availability, providing users with instant updates on room occupancy. Through a network of sensors strategically placed in study areas, we continuously track room occupancy status. Users can conveniently check the availability of study rooms through our web application or digital displays located throughout the library. This feature ensures that users can quickly locate and access available study spaces, optimizing their library experience for enhanced productivity and convenience."
        },
        {
            question: "Automated Temperature Control with DHT Sensor and Cooling Fan",
            answer: "Our project integrates an automated temperature control system utilizing a DHT sensor and a cooling fan. The DHT sensor continuously monitors the ambient temperature and humidity levels in the library environment. Upon detecting elevated temperatures, the system activates the cooling fan to maintain a comfortable and conducive atmosphere for users. This automated approach ensures optimal temperature regulation without the need for manual intervention, enhancing the overall comfort and experience within the library setting."
        },
        {
            question: "Book Recommendations Through ESP32 Cam Scanning",
            answer: "Our project incorporates an innovative book recommendation system facilitated by ESP32 Cam scanning technology. Using the ESP32 Cam, users can easily scan book covers within the library. The system then utilizes image recognition algorithms to identify scanned books and provide personalized recommendations based on user preferences and browsing history. This intuitive approach enhances the discovery of relevant reading materials, enriching the library experience for users."
        },
    ];

    const handleToggleExpand = (index) => {
        setExpandedIndex(index === expandedIndex ? -1 : index);
    };

    return (
        <div className=" min-h-screen py-12">
            <div className="container mx-auto">
                <h1 className="text-center text-4xl font-bold text-gray-800 mb-12 mt-11">About</h1>
                <p className="text-center text-gray-800 text-lg mb-12">Welcome to "Next-Gen Library Services using IoT for Enhanced User Experience"! Our project aims to revolutionize the way libraries operate by integrating cutting-edge Internet of Things (IoT) technology. By leveraging sensors, smart algorithms, and a user-friendly web application, we're creating a more dynamic and personalized library environment. From noise detection for a quieter study space to personalized book recommendations, our project enhances every aspect of the library experience. Join us as we reimagine the future of libraries and empower users with smarter, more engaging services.</p>
                <div className="grid gap-8 md:grid-cols-2">
                    {interview_questions.map((each, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{each.question}</h2>
                            <p className="text-gray-700">{expandedIndex === index ? each.answer : each.answer.substring(0, 150) + "..."}</p>
                            <button onClick={() => handleToggleExpand(index)} className="mt-4 text-blue-600 hover:underline">{expandedIndex === index ? "Show less" : "Read more"}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
