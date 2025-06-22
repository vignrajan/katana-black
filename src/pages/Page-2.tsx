// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [isAgeVerified, setIsAgeVerified] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const verified = localStorage.getItem('ageVerified');
    if (verified === 'true') {
      setIsAgeVerified(true);
    }
  }, []);

  const handleAgeVerification = () => {
    setIsAgeVerified(true);
    localStorage.setItem('ageVerified', 'true');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!isAgeVerified) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="max-w-md w-full bg-black border border-[#b30000] p-8 rounded shadow-lg">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-[#b30000] mb-4 font-serif">Age Verification</h2>
            <p className="text-cream-100 mb-4">This website contains adult content intended for individuals 18 years of age or older.</p>
            <p className="text-cream-100 mb-2">By entering, you confirm that:</p>
            <ul className="text-cream-100 text-left list-disc pl-6 mb-6">
              <li>You are at least 18 years old</li>
              <li>You understand this site contains adult-oriented content</li>
              <li>Viewing this content is legal in your jurisdiction</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <button 
              onClick={handleAgeVerification}
              className="bg-[#b30000] text-white py-3 px-6 !rounded-button whitespace-nowrap cursor-pointer hover:bg-[#8b0000] transition-colors duration-300 border border-[#b30000] shadow-lg"
            >
              I am 18+ years old - Enter
            </button>
            <a href="https://www.google.com" className="text-center text-cream-100 hover:text-[#b30000] transition-colors duration-300 cursor-pointer">
              Exit - I am under 18
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
          <img 
            src="https://readdy.ai/api/search-image?query=Dark%20gothic%20atmosphere%20with%20red%20lighting%2C%20mysterious%20shadows%2C%20elegant%20gothic%20architecture%20with%20ornate%20details%2C%20dark%20ambiance%20with%20subtle%20red%20accents%2C%20moody%20and%20dramatic%20scene%20with%20gothic%20elements%2C%20professional%20photography%20with%20dramatic%20lighting&width=1440&height=800&seq=1&orientation=landscape" 
            alt="Gothic background" 
            className="w-full h-full object-cover object-top"
          />
        </div>
        
        <nav className="relative z-20 px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#b30000] font-serif">KatanaOnyxxxBlack</div>
          
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-[#b30000] transition-colors duration-300 cursor-pointer"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
          
          <div className={`lg:flex items-center space-x-8 ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-black bg-opacity-95 p-4 flex flex-col space-y-4 space-x-0' : 'hidden'}`}>
            <a href="#home" className="text-white hover:text-[#b30000] transition-colors duration-300 cursor-pointer whitespace-nowrap">Home</a>
            <a href="#services" className="text-white hover:text-[#b30000] transition-colors duration-300 cursor-pointer whitespace-nowrap">Services</a>
            <a href="#links" className="text-white hover:text-[#b30000] transition-colors duration-300 cursor-pointer whitespace-nowrap">Links</a>
            <a href="#contact" className="text-white hover:text-[#b30000] transition-colors duration-300 cursor-pointer whitespace-nowrap">Contact</a>
            <button className="bg-[#b30000] text-white py-2 px-6 !rounded-button whitespace-nowrap cursor-pointer hover:bg-[#8b0000] transition-colors duration-300 border border-[#b30000]">
              Book Session
            </button>
          </div>
        </nav>
        
        <div className="relative z-10 px-6 py-20 md:py-32 lg:py-48 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-serif leading-tight">
              <span className="block">Dominance</span> 
              <span className="text-[#b30000]">Redefined</span>
            </h1>
            <p className="text-lg md:text-xl text-cream-100 max-w-2xl">
              Enter the realm of sophisticated control and elegant submission. Experience the art of domination through a Gothic lens of refinement and power.
            </p>
            <div className="pt-6">
              <button className="bg-[#b30000] text-white py-3 px-8 !rounded-button whitespace-nowrap cursor-pointer hover:bg-[#8b0000] transition-colors duration-300 border border-[#b30000] shadow-lg">
                Begin Your Journey
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#b30000] mb-12 text-center font-serif">Exclusive Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-black border border-[#b30000] rounded shadow-lg overflow-hidden group hover:shadow-[#b30000] transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Elegant%20gothic%20setting%20with%20red%20lighting%2C%20luxurious%20dark%20interior%20with%20gothic%20architecture%2C%20dramatic%20shadows%20and%20red%20accent%20lighting%2C%20mysterious%20atmosphere%20with%20gothic%20elements%2C%20professional%20photography%20with%20dramatic%20lighting%2C%20no%20people%20visible&width=400&height=300&seq=2&orientation=landscape" 
                  alt="Virtual Sessions" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 font-serif">Virtual Domination</h3>
                <p className="text-cream-100 mb-4">
                  Experience the art of submission through immersive virtual sessions tailored to your deepest desires and boundaries.
                </p>
                <button className="text-[#b30000] hover:text-white border border-[#b30000] hover:bg-[#b30000] py-2 px-4 !rounded-button whitespace-nowrap cursor-pointer transition-colors duration-300">
                  Explore
                </button>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-black border border-[#b30000] rounded shadow-lg overflow-hidden group hover:shadow-[#b30000] transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Dark%20gothic%20aesthetic%20with%20red%20lighting%2C%20elegant%20writing%20desk%20with%20gothic%20elements%2C%20antique%20parchment%20and%20quill%2C%20mysterious%20atmosphere%20with%20gothic%20architecture%20details%2C%20professional%20photography%20with%20dramatic%20lighting%2C%20no%20people%20visible&width=400&height=300&seq=3&orientation=landscape" 
                  alt="Personalized Experiences" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 font-serif">Personalized Rituals</h3>
                <p className="text-cream-100 mb-4">
                  Custom-crafted experiences designed to explore the depths of power exchange through sophisticated Gothic aesthetics.
                </p>
                <button className="text-[#b30000] hover:text-white border border-[#b30000] hover:bg-[#b30000] py-2 px-4 !rounded-button whitespace-nowrap cursor-pointer transition-colors duration-300">
                  Discover
                </button>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className="bg-black border border-[#b30000] rounded shadow-lg overflow-hidden group hover:shadow-[#b30000] transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Gothic%20style%20exclusive%20content%20creation%20setting%2C%20dark%20room%20with%20red%20accent%20lighting%2C%20professional%20camera%20equipment%20visible%2C%20gothic%20decor%20elements%2C%20mysterious%20atmosphere%20with%20dramatic%20shadows%2C%20professional%20photography%20setup%20with%20gothic%20aesthetic&width=400&height=300&seq=4&orientation=landscape" 
                  alt="Exclusive Content" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 font-serif">Exclusive Content</h3>
                <p className="text-cream-100 mb-4">
                  Gain access to premium Gothic-themed content that explores the elegant darkness of dominance and submission.
                </p>
                <button className="text-[#b30000] hover:text-white border border-[#b30000] hover:bg-[#b30000] py-2 px-4 !rounded-button whitespace-nowrap cursor-pointer transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section id="links" className="py-16 px-6 bg-gradient-to-b from-black to-[#0a0000]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#b30000] mb-12 text-center font-serif">Connect With Me</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {/* OnlyFans */}
            <a href="#" className="bg-black border border-[#b30000] rounded p-6 flex flex-col items-center justify-center hover:bg-[#0a0000] transition-colors duration-300 cursor-pointer group">
              <i className="fab fa-brands fa-square-facebook text-4xl text-white group-hover:text-[#b30000] transition-colors duration-300 mb-3"></i>
              <span className="text-white font-medium">OnlyFans</span>
            </a>
            
            {/* LoyalFans */}
            <a href="#" className="bg-black border border-[#b30000] rounded p-6 flex flex-col items-center justify-center hover:bg-[#0a0000] transition-colors duration-300 cursor-pointer group">
              <i className="fas fa-heart text-4xl text-white group-hover:text-[#b30000] transition-colors duration-300 mb-3"></i>
              <span className="text-white font-medium">LoyalFans</span>
            </a>
            
            {/* Twitter */}
            <a href="#" className="bg-black border border-[#b30000] rounded p-6 flex flex-col items-center justify-center hover:bg-[#0a0000] transition-colors duration-300 cursor-pointer group">
              <i className="fab fa-twitter text-4xl text-white group-hover:text-[#b30000] transition-colors duration-300 mb-3"></i>
              <span className="text-white font-medium">Twitter</span>
            </a>
            
            {/* Instagram */}
            <a href="#" className="bg-black border border-[#b30000] rounded p-6 flex flex-col items-center justify-center hover:bg-[#0a0000] transition-colors duration-300 cursor-pointer group">
              <i className="fab fa-instagram text-4xl text-white group-hover:text-[#b30000] transition-colors duration-300 mb-3"></i>
              <span className="text-white font-medium">Instagram</span>
            </a>
            
            {/* Booking Platform */}
            <a href="#" className="bg-black border border-[#b30000] rounded p-6 flex flex-col items-center justify-center hover:bg-[#0a0000] transition-colors duration-300 cursor-pointer group">
              <i className="far fa-calendar-alt text-4xl text-white group-hover:text-[#b30000] transition-colors duration-300 mb-3"></i>
              <span className="text-white font-medium">Book Session</span>
            </a>
            
            {/* Email */}
            <a href="#" className="bg-black border border-[#b30000] rounded p-6 flex flex-col items-center justify-center hover:bg-[#0a0000] transition-colors duration-300 cursor-pointer group">
              <i className="far fa-envelope text-4xl text-white group-hover:text-[#b30000] transition-colors duration-300 mb-3"></i>
              <span className="text-white font-medium">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Consent Form Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-black border border-[#b30000] rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#b30000] mb-8 text-center font-serif">Sacred Contract</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-cream-100 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="fullName" 
                  className="w-full bg-black border border-[#b30000] rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#b30000]"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="age" className="block text-cream-100 mb-2">Age Verification</label>
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="age" 
                    className="w-5 h-5 text-[#b30000] border-[#b30000] focus:ring-[#b30000] rounded"
                    required
                  />
                  <span className="text-cream-100">I confirm I am 18 years of age or older</span>
                </div>
              </div>
              
              <div>
                <label htmlFor="sessionType" className="block text-cream-100 mb-2">Session Type</label>
                <div className="relative">
                  <select 
                    id="sessionType" 
                    className="appearance-none w-full bg-black border border-[#b30000] rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#b30000] pr-10"
                    required
                  >
                    <option value="">Select Session Type</option>
                    <option value="virtual">Virtual Domination</option>
                    <option value="ritual">Personalized Ritual</option>
                    <option value="content">Exclusive Content</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="limits" className="block text-cream-100 mb-2">Hard Limits</label>
                <textarea 
                  id="limits" 
                  rows={4} 
                  className="w-full bg-black border border-[#b30000] rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#b30000]"
                  placeholder="Please specify any hard limits or boundaries"
                  required
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="signature" className="block text-cream-100 mb-2">Digital Signature</label>
                <input 
                  type="text" 
                  id="signature" 
                  className="w-full bg-black border border-[#b30000] rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#b30000]"
                  placeholder="Type your full name as signature"
                  required
                />
              </div>
              
              <div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    className="w-5 h-5 text-[#b30000] border-[#b30000] focus:ring-[#b30000] rounded"
                    required
                  />
                  <label htmlFor="consent" className="text-cream-100">I voluntarily submit and consent to all activities discussed</label>
                </div>
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full bg-[#b30000] text-white py-3 px-6 !rounded-button whitespace-nowrap cursor-pointer hover:bg-[#8b0000] transition-colors duration-300 border border-[#b30000] shadow-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-6 border-t border-[#b30000]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-2xl font-bold text-[#b30000] font-serif mb-4 md:mb-0">KatanaOnyxxxBlack</div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-[#b30000] transition-colors duration-300 cursor-pointer">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-[#b30000] transition-colors duration-300 cursor-pointer">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-[#b30000] transition-colors duration-300 cursor-pointer">
                <i className="far fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
          
          <div className="text-center text-cream-100 text-sm">
            <p className="mb-4">All activities between consenting adults. Must be 18+ to enter.</p>
            <p>© 2025 KatanaOnyxxxBlack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
