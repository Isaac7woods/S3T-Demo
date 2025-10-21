import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Activity, Apple, MonitorPlay, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://isaac7woods.app.n8n.cloud/webhook-test/8bdcbb42-cc00-489e-b3c7-9a8afef39dd3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-stone-800 to-zinc-900">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src="/image copy.png" alt="S3T Logo" className="w-12 h-12 object-contain" />
              <span className="text-2xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                S3T
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-zinc-300 hover:text-white transition-colors font-medium">Home</a>
              <a href="#about" className="text-zinc-300 hover:text-white transition-colors font-medium">About</a>
              <a href="#services" className="text-zinc-300 hover:text-white transition-colors font-medium">Services</a>
              <a href="#contact" className="text-zinc-300 hover:text-white transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Scrolling Banner */}
      <div className="fixed top-[73px] w-full z-40 bg-gradient-to-r from-zinc-900 via-stone-900 to-zinc-900 border-b border-zinc-800 overflow-hidden py-3">
        <div className="flex animate-scroll whitespace-nowrap">
          <div className="flex items-center gap-16 px-8">
            <span className="text-4xl font-black text-red-900">SPEED</span>
            <span className="text-4xl font-black text-red-900">STRENGTH</span>
            <span className="text-4xl font-black text-red-900">SPORTS</span>
            <span className="text-4xl font-black text-red-900">SPEED</span>
            <span className="text-4xl font-black text-red-900">STRENGTH</span>
            <span className="text-4xl font-black text-red-900">SPORTS</span>
            <span className="text-4xl font-black text-red-900">SPEED</span>
            <span className="text-4xl font-black text-red-900">STRENGTH</span>
            <span className="text-4xl font-black text-red-900">SPORTS</span>
            <span className="text-4xl font-black text-red-900">SPEED</span>
            <span className="text-4xl font-black text-red-900">STRENGTH</span>
            <span className="text-4xl font-black text-red-900">SPORTS</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 via-stone-700/30 to-zinc-900/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,212,216,0.08),transparent_50%)] opacity-40"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image - Left Half */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-600 to-zinc-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative rounded-2xl overflow-hidden border border-zinc-600/50">
                <img
                  src="/image.png"
                  alt="Jason - Personal Trainer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Copy - Right Half */}
            <div className="flex flex-col justify-center items-center text-center pt-16">
              <a href="tel:6154058165" className="inline-flex items-center gap-2 text-red-600 hover:text-red-500 transition-colors mb-8 group">
                <Phone className="w-6 h-6" />
                <span className="text-2xl font-bold tracking-wide">(615) 405-8165</span>
              </a>

              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                  Transform Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                  Fitness Journey
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-400 mb-12 font-light leading-relaxed max-w-2xl">
                Achieve strength and speed with expert personal training.
              </p>

              <div>
                <a
                  href="#contact"
                  className="inline-block px-10 py-5 bg-gradient-to-r from-zinc-600 to-zinc-700 hover:from-zinc-500 hover:to-zinc-600 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zinc-500/50"
                >
                  Start Your Journey
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Jason Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-zinc-900 to-stone-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-600 to-zinc-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative rounded-2xl overflow-hidden border border-zinc-600/50">
                <img
                  src="/image copy copy copy.png"
                  alt="Jason - Personal Trainer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                Meet Jason, Your Personal Trainer
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p className="text-lg">
                  I'm Jason, an ACE certified personal trainer with 4 years of experience. My passion for fitness stems from my background as a travel soccer coach, where I focused on helping athletes incorporate weight training into their routines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gradient-to-b from-stone-900 to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Personal Training */}
            <Link to="/services/personal-training" className="group relative block">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-600 to-zinc-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative p-8 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300 h-full cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-zinc-700 to-zinc-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="w-8 h-8 text-zinc-200" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-100 mb-4">Personal Training</h3>
                <p className="text-zinc-400 leading-relaxed">
                  One-on-one personalized training sessions tailored to your specific goals, fitness level, and schedule. Get expert guidance and accountability every step of the way.
                </p>
              </div>
            </Link>

            {/* Nutrition Coaching */}
            <Link to="/services/nutrition-coaching" className="group relative block">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-600 to-zinc-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative p-8 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300 h-full cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-zinc-700 to-zinc-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Apple className="w-8 h-8 text-zinc-200" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-100 mb-4">Nutrition Coaching</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Customized meal plans and nutritional guidance designed to complement your training. Learn sustainable eating habits that fuel your performance and recovery.
                </p>
              </div>
            </Link>

            {/* Speed and Strength Training */}
            <Link to="/services/speed-strength-training" className="group relative block">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-600 to-zinc-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative p-8 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300 h-full cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-zinc-700 to-zinc-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MonitorPlay className="w-8 h-8 text-zinc-200" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-100 mb-4">Speed and Strength Training</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Specialized programs focused on building explosive power and speed. Perfect for athletes looking to enhance their performance and gain a competitive edge.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-zinc-900 to-stone-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-600 to-zinc-500 rounded-2xl blur opacity-20"></div>
              <div className="relative p-8 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl border border-zinc-700/50">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-zinc-300 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-300 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-300 font-medium mb-2">Message</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                      placeholder="Tell me about your fitness goals..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-zinc-600 to-zinc-700 hover:from-zinc-500 hover:to-zinc-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-zinc-700 to-zinc-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-zinc-200" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-100 mb-1">Email</h3>
                  <p className="text-zinc-400">jason@jasonfitness.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-zinc-700 to-zinc-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-zinc-200" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-100 mb-1">Phone</h3>
                  <p className="text-zinc-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-zinc-700 to-zinc-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-zinc-200" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-100 mb-1">Location</h3>
                  <p className="text-zinc-400">Downtown Fitness Center<br />123 Main Street, Suite 100</p>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-bold text-zinc-100 mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Instagram className="w-5 h-5 text-zinc-300" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Facebook className="w-5 h-5 text-zinc-300" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Twitter className="w-5 h-5 text-zinc-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Dumbbell className="w-6 h-6 text-zinc-400" strokeWidth={2.5} />
                <span className="text-xl font-bold text-zinc-300">JASON FITNESS</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Transforming lives through personalized fitness training and nutrition guidance.
              </p>
            </div>

            <div>
              <h4 className="text-zinc-300 font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-zinc-500 hover:text-zinc-300 transition-colors text-sm">Home</a>
                <a href="#about" className="block text-zinc-500 hover:text-zinc-300 transition-colors text-sm">About</a>
                <a href="#services" className="block text-zinc-500 hover:text-zinc-300 transition-colors text-sm">Services</a>
                <a href="#contact" className="block text-zinc-500 hover:text-zinc-300 transition-colors text-sm">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="text-zinc-300 font-bold mb-4">Connect</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg flex items-center justify-center transition-all duration-300">
                  <Instagram className="w-4 h-4 text-zinc-400" />
                </a>
                <a href="#" className="w-10 h-10 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg flex items-center justify-center transition-all duration-300">
                  <Facebook className="w-4 h-4 text-zinc-400" />
                </a>
                <a href="#" className="w-10 h-10 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg flex items-center justify-center transition-all duration-300">
                  <Twitter className="w-4 h-4 text-zinc-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-800 text-center">
            <p className="text-zinc-600 text-sm">
              © 2025 Jason Fitness. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
