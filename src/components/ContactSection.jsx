import React, { useState } from 'react';
import { issueCategories } from '../data/mock';
import { Send, Phone, MapPin, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('तुमची तक्रार यशस्वीपणे नोंदवली गेली!');
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', category: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            भाऊंचे Digital Office
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            तुमची <span className="text-orange-500">समस्या</span> नोंदवा
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            तुमच्या समस्या आम्हाला कळवा. आम्ही ऐकू आहोत!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">धन्यवाद!</h3>
                <p className="text-gray-600 text-center">
                  तुमची तक्रार यशस्वीपणे नोंदवली गेली आहे.<br />
                  आम्ही लवकरच संपर्क करू.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-500" />
                  तक्रार नोंदवा
                </h3>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    तुमचे नाव
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none"
                    placeholder="तुमचे पूर्ण नाव"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    मोबाईल नंबर
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none"
                    placeholder="तुमचा मोबाईल नंबर"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    समस्येचा प्रकार
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none appearance-none bg-white"
                  >
                    <option value="">प्रकार निवडा</option>
                    {issueCategories.map((cat, index) => (
                      <option key={index} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    तुमची समस्या
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none resize-none"
                    placeholder="तुमची समस्या सविस्तर लिहा..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:shadow-xl hover:-translate-y-1'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      पाठवत आहे...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      तक्रार पाठवा
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Map Card */}
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                प्रभाग क्र. १६०
              </h3>
              <div className="rounded-2xl overflow-hidden bg-gray-100 h-[400px] flex items-center justify-center">
                <img
                  src="/assets/Prabhag No_160.png"
                  alt="प्रभाग नकाशा"
                  className="max-w-full max-h-full object-contain"
                />
              </div>


            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-6 text-white">
                <Phone className="w-8 h-8 mb-3" />
                <p className="font-bold text-lg mb-1">संपर्क क्रमांक</p>
                <p className="text-white/80">+91 98765 43210</p>
                <p className="text-white/80">+91 99305 13335</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
                <MessageCircle className="w-8 h-8 mb-3" />
                <p className="font-bold text-lg mb-1">WhatsApp</p>
                <p className="text-white/80">+91 98765 43210</p>
                <p className="text-white/80">+91 99305 13335</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">सोशल मीडिया</h3>

              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/kiranjlandge?igsh=MWViYnp1YjA5dm43ag%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-center bg-gray-50 rounded-xl text-gray-600 font-medium hover:bg-orange-50 hover:text-orange-600 transition-colors text-sm"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/share/17zu1tqG2Z/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-center bg-gray-50 rounded-xl text-gray-600 font-medium hover:bg-orange-50 hover:text-orange-600 transition-colors text-sm"
                >
                  FaceBook
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
