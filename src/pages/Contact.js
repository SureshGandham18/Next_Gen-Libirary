import React from 'react';
import { CgProfile } from "react-icons/cg";
import { IoIosMail } from "react-icons/io";
import { GiGraduateCap } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";

function Contact() {
  return (
    <div className=" min-h-screen">
      <div className="container mx-auto py-12">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8 mt-8">CONTACT</h2>
        <div className="flex flex-wrap justify-center gap-8 px-20">
          {contacts.map((contact, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <CgProfile className="text-gray-600 mr-2" size={25} />
                <span className="text-xl font-semibold text-slate-800">{contact.name}</span>
              </div>
              <div className="flex items-center mb-4">
                <GiGraduateCap className="text-gray-600 mr-2" size={25} />
                <span className="text-lg font-semibold">{contact.study}</span>
              </div>
              <div className="flex items-center mb-4">
                <FaUniversity className="text-gray-600 mr-2" size={25} />
                <span className="text-lg font-semibold">{contact.college}</span>
              </div>
              <div className="flex items-center">
                <IoIosMail className="text-gray-600 mr-2" size={25} />
                <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">{contact.email}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const contacts = [
  { name: 'G S N Suresh', email: '20pa1a0540@vishnu.edu.in', study: 'B.Tech IV CSE', college: 'Vishnu Institute of Technology' },
  { name: 'G Krishna Vamsi', email: '20pa1a0546@vishnu.edu.in', study: 'B.Tech IV CSE', college: 'Vishnu Institute of Technology'},
  { name: 'D Kavitha', email: '20pa1a0537@vishnu.edu.in', study: 'B.Tech IV CSE', college: 'Vishnu Institute of Technology'},
  { name: 'B M S S Samrat', email: '20pa1a0515@vishnu.edu.in',study: 'B.Tech IV CSE', college: 'Vishnu Institute of Technology' }
];

export default Contact;
