'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { SiMinutemailer } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-green-400">
      <main className="max-w-6xl mx-auto p-4 md:p-8">
        <h1 className="glitch-effect text-4xl md:text-6xl font-mono font-bold mb-6">
          <span className="text-blue-500">&lt;</span>
          contact
          <span className="text-blue-500">/&gt;</span>
        </h1>
        
        <div className="typing-effect font-mono text-lg mb-8">
          $ ssh contact@gaps.dev
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <div className="font-mono">
              <div className="text-yellow-400 mb-4"># Personal Info</div>
              <Image 
                src="/images/DSC.jpg" 
                alt="Profile Picture" 
                width={200} 
                height={200} 
                className="rounded-xl mb-6 hover:scale-105 transition-transform duration-300" 
              />
              <div className="text-green-300 mb-4">Oluwapelumi Gideon, AINA</div>
              <div className="text-gray-400 mb-6">Web & Mobile Developer</div>
              
              <div className="space-y-4">
                <pre className="bg-black/30 p-3 rounded">
                  <span className="text-blue-400">const</span> <span className="text-purple-400">contact</span> = {`{
  phone: "+2348129241613",
  email: "ainaoluwapelumigideon@gmail.com",
  location: "Lokoja, Kogi State, Nigeria"
}`}
                </pre>

                <div className="flex space-x-4 mt-4">
                  <a href="https://wa.me/message/CRHFR45SVC6IH1" target="_blank" className="text-green-400 hover:text-green-300">
                    <IoLogoWhatsapp size={24} />
                  </a>
                  <a href="http://linkedin.com/in/the-aina-oluwapelumi" target="_blank" className="text-green-400 hover:text-green-300">
                    <FaLinkedinIn size={24} />
                  </a>
                  <a href="https://twitter.com/gapsaina" target="_blank" className="text-green-400 hover:text-green-300">
                    <BsTwitterX size={24} />
                  </a>
                  <a href="https://github.com/OluwapelumiG" target="_blank" className="text-green-400 hover:text-green-300">
                    <FiGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <div className="font-mono">
              <div className="text-yellow-400 mb-4"># Send Message</div>
              <div className="text-gray-400 mb-6">
                $ echo "I am always open to discussing new projects, opportunities, and partnerships."
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-green-300 mb-2" htmlFor="name">name:</label>
                    <input 
                      className="w-full bg-black/30 border border-green-500/30 rounded p-2 text-green-300 focus:outline-none focus:border-green-500"
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-green-300 mb-2" htmlFor="email">email:</label>
                    <input 
                      className="w-full bg-black/30 border border-green-500/30 rounded p-2 text-green-300 focus:outline-none focus:border-green-500"
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-green-300 mb-2" htmlFor="message">message:</label>
                  <textarea 
                    className="w-full bg-black/30 border border-green-500/30 rounded p-2 text-green-300 focus:outline-none focus:border-green-500"
                    id="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button 
                  className="w-full bg-green-500/20 text-green-400 border border-green-500/30 py-2 px-4 rounded hover:bg-green-500/30 transition duration-300"
                  type="submit"
                >
                  $ send_message.sh
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}