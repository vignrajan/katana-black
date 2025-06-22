import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Calendar, Mail, Twitter, Instagram, ChevronDown, Star, Shield, Crown } from 'lucide-react';

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
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-red-950 flex items-center justify-center z-50">
        <div className="max-w-md w-full bg-black/90 backdrop-blur-sm border border-red-700/50 p-10 rounded-2xl shadow-2xl mx-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="mb-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-700 to-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-red-400 mb-6 font-serif tracking-wide">Age Verification</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">This website contains adult content intended for individuals 18 years of age or older.</p>
              <p className="text-gray-300 mb-4 font-medium">By entering, you confirm that:</p>
              <ul className="text-gray-300 text-left list-none space-y-2 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  You are at least 18 years old
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  You understand this site contains adult-oriented content
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  Viewing this content is legal in your jurisdiction
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <button 
                onClick={handleAgeVerification}
                className="bg-gradient-to-r from-red-700 to-red-800 text-white py-4 px-8 rounded-xl font-semibold cursor-pointer hover:from-red-600 hover:to-red-700 transition-all duration-300 border border-red-600/50 shadow-lg hover:shadow-red-700/25 transform hover:scale-105"
              >
                I am 18+ years old - Enter
              </button>
              <a href="https://www.google.com" className="text-center text-gray-400 hover:text-red-400 transition-colors duration-300 cursor-pointer py-2">
                Exit - I am under 18
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
          <img 
            src="https://images.pexels.com/photos/2693212/pexels-photo-2693212.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Gothic background" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <nav className="relative z-20 px-6 lg:px-12 py-6 flex justify-between items-center backdrop-blur-sm bg-black/20">
          <div className="text-3xl font-bold text-red-400 font-serif tracking-wider">
            KatanaOnyxxxBlack
          </div>
          
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-red-400 transition-colors duration-300 cursor-pointer p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          
          <div className={`lg:flex items-center space-x-10 ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md p-6 flex flex-col space-y-6 space-x-0 border-t border-red-700/30' : 'hidden'}`}>
            <a href="#home" className="text-white hover:text-red-400 transition-colors duration-300 cursor-pointer font-medium tracking-wide">Home</a>
            <a href="#services" className="text-white hover:text-red-400 transition-colors duration-300 cursor-pointer font-medium tracking-wide">Services</a>
            <a href="#links" className="text-white hover:text-red-400 transition-colors duration-300 cursor-pointer font-medium tracking-wide">Links</a>
            <a href="#contact" className="text-white hover:text-red-400 transition-colors duration-300 cursor-pointer font-medium tracking-wide">Contact</a>
            <button className="bg-gradient-to-r from-red-700 to-red-800 text-white py-3 px-8 rounded-xl font-semibold cursor-pointer hover:from-red-600 hover:to-red-700 transition-all duration-300 border border-red-600/50 shadow-lg hover:shadow-red-700/25 transform hover:scale-105">
              Book Session
            </button>
          </div>
        </nav>
        
        <div className="relative z-10 px-6 lg:px-12 py-32 lg:py-48 max-w-6xl mx-auto flex items-center min-h-[80vh]">
          <div className="space-y-8 max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <Crown className="w-8 h-8 text-red-400" />
              <span className="text-red-400 font-medium tracking-widest uppercase text-sm">Premium Experience</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-serif leading-none">
              <span className="block mb-4">Dominance</span> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Redefined</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
              Enter the realm of sophisticated control and elegant submission. Experience the art of domination through a Gothic lens of refinement and power.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row gap-6">
              <button className="bg-gradient-to-r from-red-700 to-red-800 text-white py-4 px-10 rounded-xl font-semibold cursor-pointer hover:from-red-600 hover:to-red-700 transition-all duration-300 border border-red-600/50 shadow-lg hover:shadow-red-700/25 transform hover:scale-105">
                Begin Your Journey
              </button>
              <button className="border-2 border-red-600/50 text-red-400 py-4 px-10 rounded-xl font-semibold cursor-pointer hover:bg-red-600/10 transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Star className="w-6 h-6 text-red-400" />
              <span className="text-red-400 font-medium tracking-widest uppercase text-sm">Premium Services</span>
              <Star className="w-6 h-6 text-red-400" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">Exclusive Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Carefully curated experiences designed to explore the depths of power exchange through sophisticated aesthetics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-red-700/30 rounded-2xl shadow-2xl overflow-hidden group hover:shadow-red-700/20 transition-all duration-500 hover:border-red-600/50 hover:transform hover:scale-105">
              <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src="https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop" 
                  alt="Virtual Sessions" 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-serif">Virtual Domination</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Experience the art of submission through immersive virtual sessions tailored to your deepest desires and boundaries.
                </p>
                <button className="text-red-400 hover:text-white border-2 border-red-600/50 hover:bg-red-600 py-3 px-6 rounded-xl font-semibold cursor-pointer transition-all duration-300 w-full">
                  Explore
                </button>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-red-700/30 rounded-2xl shadow-2xl overflow-hidden group hover:shadow-red-700/20 transition-all duration-500 hover:border-red-600/50 hover:transform hover:scale-105">
              <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src="https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop" 
                  alt="Personalized Experiences" 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-serif">Personalized Rituals</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Custom-crafted experiences designed to explore the depths of power exchange through sophisticated Gothic aesthetics.
                </p>
                <button className="text-red-400 hover:text-white border-2 border-red-600/50 hover:bg-red-600 py-3 px-6 rounded-xl font-semibold cursor-pointer transition-all duration-300 w-full">
                  Discover
                </button>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-red-700/30 rounded-2xl shadow-2xl overflow-hidden group hover:shadow-red-700/20 transition-all duration-500 hover:border-red-600/50 hover:transform hover:scale-105 md:col-span-2 lg:col-span-1">
              <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src="https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop" 
                  alt="Exclusive Content" 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-serif">Exclusive Content</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Gain access to premium Gothic-themed content that explores the elegant darkness of dominance and submission.
                </p>
                <button className="text-red-400 hover:text-white border-2 border-red-600/50 hover:bg-red-600 py-3 px-6 rounded-xl font-semibold cursor-pointer transition-all duration-300 w-full">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section id="links" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">Connect With Me</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Follow my journey across multiple platforms and stay connected
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* OnlyFans */}
            <a href="#" className="bg-gradient-to-br from-gray-900 to-black border border-red-700/30 rounded-2xl p-8 flex flex-col items-center justify-center hover:bg-gradient-to-br hover:from-red-900/20 hover:to-black transition-all duration-300 cursor-pointer group hover:border-red-600/50 hover:transform hover:scale-105 shadow-lg hover:shadow-red-700/20">
              <div className="w-16 h-16 bg-gradient-to-br from-red-700 to-red-800 rounded-2xl flex items-center justify-center mb-4 group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300 shadow-lg">
                <span className="text-white font-bold text-xl">OF</span>
              </div>
              <span className="text-white font-semibold text-lg">OnlyFans</span>
            </a>
            
            {/* LoyalFans */}
            <a href="#" className="bg-gradient-to-br from-gray-900 to-black border border-red-700/30 rounded-2xl p-8 flex flex-col items-center justify-center hover:bg-gradient-to-br hover:from-red-900/20 hover:to-black transition-all duration-300 cursor-pointer group hover:border-red-600/50 hover:transform hover:scale-105 shadow-lg hover:shadow-red-700/20">
              <div className="w-16 h-16 bg-gradient-to-br from-red-700 to-red-800 rounded-2xl flex items-center justify-center mb-4 group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <span className="text-white font-semibold text-lg">LoyalFans</span>
            </a>
            
            {/* Twitter */}
            <a href="#" className="bg-gradient-to-br from-gray-900 to-black border border-red-700/30 rounded-2xl p-8 flex flex-col items-center justify-center hover:bg-gradient-to-br hover:from-red-900/20 hover:to-black transition-all duration-300 cursor-pointer group hover:border-red-600/50 hover:transform hover:scale-105 shadow-lg hover:shadow-red-700/20">
              <div className="w-16 h-16 bg-gradient-to-br from-red-700 to-red-800 rounded-2xl flex items-center justify-center mb-4 group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300 shadow-lg">
                <Twitter className="w-8 h-8 text-white" />
              </div>
              <span className="text-white font-semibold text-lg">Twitter</span>
            </a>
            
            {/* Instagram */}
            <a href="#" className="bg-gradient-to-br from-gray-900 to-black border border-red-700/30 rounded-2xl p-8 flex flex-col items-center justify-center hover:bg-gradient-to-br hover:from-red-900/20 hover:to-black transition-all duration-300 cursor-pointer group hover:border-red-600/50 hover:transform hover:scale-105 shadow-lg hover:shadow-red-700/20">
              <div className="w-16 h-16 bg-gradient-to-br from-red-700 to-red-800 rounded-2xl flex items-center justify-center mb-4 group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300 shadow-lg">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <span className="text-white font-semibold text-lg">Instagram</span>
            </a>
            
            {/* Booking Platform */}
            <a href="#" className="bg-gradient-to-br from-gray-900 to-black border border-red-700/30 rounded-2xl p-8 flex flex-col items-center justify-center hover:bg-gradient-to-br hover:from-red-900/20 hover:to-black transition-all duration-300 cursor-pointer group hover:border-red-600/50 hover:transform hover:scale-105 shadow-lg hover:shadow-red-700/20">
              <div className="w-16 h-16 bg-gradient-to-br from-red-700 to-red-800 rounded-2xl flex items-center justify-center mb-4 group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300 shadow-lg">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <span className="text-white font-semibold text-lg">Book Session</span>
            </a>
            
            {/* Email */}
            <a href="#" className="bg-gradient-to-br from-gray-900 to-black border border-red-700/30 rounded-2xl p-8 flex flex-col items-center justify-center hover:bg-gradient-to-br hover:from-red-900/20 hover:to-black transition-all duration-300 cursor-pointer group hover:border-red-600/50 hover:transform hover:scale-105 shadow-lg hover:shadow-red-700/20">
              <div className="w-16 h-16 bg-gradient-to-br from-red-700 to-red-800 rounded-2xl flex items-center justify-center mb-4 group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <span className="text-white font-semibold text-lg">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Consent Form Section */}
      <section id="contact" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-700/30 rounded-3xl p-10 lg:p-12 shadow-2xl">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-br from-red-700 to-red-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Sacred Contract</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Begin your journey with a formal agreement of consent and boundaries
              </p>
            </div>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="fullName" className="block text-gray-300 mb-3 font-medium">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    className="w-full bg-black/50 border border-red-700/30 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="sessionType" className="block text-gray-300 mb-3 font-medium">Session Type</label>
                  <div className="relative">
                    <select 
                      id="sessionType" 
                      className="appearance-none w-full bg-black/50 border border-red-700/30 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent pr-12 transition-all duration-300 backdrop-blur-sm"
                      required
                    >
                      <option value="">Select Session Type</option>
                      <option value="virtual">Virtual Domination</option>
                      <option value="ritual">Personalized Ritual</option>
                      <option value="content">Exclusive Content</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                      <ChevronDown size={20} />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="limits" className="block text-gray-300 mb-3 font-medium">Hard Limits & Boundaries</label>
                <textarea 
                  id="limits" 
                  rows={5} 
                  className="w-full bg-black/50 border border-red-700/30 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none"
                  placeholder="Please specify any hard limits, boundaries, or special considerations"
                  required
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="signature" className="block text-gray-300 mb-3 font-medium">Digital Signature</label>
                <input 
                  type="text" 
                  id="signature" 
                  className="w-full bg-black/50 border border-red-700/30 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  placeholder="Type your full name as digital signature"
                  required
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <input 
                    type="checkbox" 
                    id="age" 
                    className="w-6 h-6 text-red-600 border-red-700/30 focus:ring-red-600 rounded-lg mt-1 bg-black/50"
                    required
                  />
                  <label htmlFor="age" className="text-gray-300 leading-relaxed">I confirm I am 18 years of age or older and legally able to enter into this agreement</label>
                </div>
                
                <div className="flex items-start space-x-4">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    className="w-6 h-6 text-red-600 border-red-700/30 focus:ring-red-600 rounded-lg mt-1 bg-black/50"
                    required
                  />
                  <label htmlFor="consent" className="text-gray-300 leading-relaxed">I voluntarily submit and consent to all activities discussed within the specified boundaries</label>
                </div>
              </div>
              
              <div className="pt-6">
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-red-700 to-red-800 text-white py-5 px-8 rounded-xl font-semibold cursor-pointer hover:from-red-600 hover:to-red-700 transition-all duration-300 border border-red-600/50 shadow-lg hover:shadow-red-700/25 transform hover:scale-105 text-lg"
                >
                  Submit Sacred Contract
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-black to-gray-900 py-16 px-6 lg:px-12 border-t border-red-700/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="text-3xl font-bold text-red-400 font-serif mb-6 md:mb-0 tracking-wider">
              KatanaOnyxxxBlack
            </div>
            
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300 cursor-pointer p-2 rounded-lg hover:bg-red-900/20">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300 cursor-pointer p-2 rounded-lg hover:bg-red-900/20">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300 cursor-pointer p-2 rounded-lg hover:bg-red-900/20">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="text-center text-gray-400 space-y-4">
            <p className="text-lg">All activities between consenting adults. Must be 18+ to enter.</p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-700 to-transparent mx-auto"></div>
            <p className="text-sm">© 2025 KatanaOnyxxxBlack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;