import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen featureBackground py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold carousal-title mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-700 carousal-text">
            Book our auditorium for your next event
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 h-full">
            <h2 className="text-3xl card-title text-gray-800 mb-6">Send us a message</h2>
            <div className="space-y-6 card-text">
              {['name', 'phone', 'email'].map((field) => (
                <div key={field}>
                  <label className="block text-gray-800 mb-2 font-medium capitalize">
                    {field} *
                  </label>
                  <input
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                    placeholder={`Your ${field}`}
                  />
                </div>
              ))}

              <div>
                <label className="block text-gray-800 mb-2 font-medium">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition resize-none"
                  placeholder="Tell us about your event..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg transition transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Auditorium Details */}
          <div className="h-full space-y-6">
            <div>
              <h2 className="text-3xl card-title text-gray-800 mb-6">Auditorium Details</h2>
              
              <div className="space-y-6 card-text">
                {[
                  { icon: MapPin, title: 'Location', text: '123 Theater Avenue\nDowntown District\nCity, State 12345' },
                  { icon: Phone, title: 'Phone', text: '+1 (555) 123-4567' },
                  { icon: Mail, title: 'Email', text: 'bookings@auditorium.com' },
                  { icon: Clock, title: 'Office Hours', text: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed' }
                ].map((item, idx) => (
                  <div className="flex items-start space-x-4" key={idx}>
                    <div className="bg-yellow-400 p-3 rounded-lg">
                      <item.icon className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-gray-800 font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373631531654!3d-37.817209742021234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1519275012063"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Auditorium Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}