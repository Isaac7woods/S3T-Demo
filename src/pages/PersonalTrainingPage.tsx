import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, CheckCircle, Phone, ArrowRight } from 'lucide-react';

function PersonalTrainingPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', description: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      console.log('Form submitted:', formData);
      setSubmitMessage('Thank you! We will contact you soon.');
      setFormData({ name: '', phone: '', email: '', description: '' });
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
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
            <Link to="/" className="text-zinc-300 hover:text-white transition-colors font-medium">
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-zinc-700 to-zinc-600 rounded-2xl mb-6">
              <Activity className="w-12 h-12 text-zinc-200" strokeWidth={2} />
            </div>
            <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Personal Training
            </h1>
            <p className="text-2xl text-zinc-400 max-w-3xl mx-auto">
              One-on-one personalized training sessions tailored to your specific goals, fitness level, and schedule.
            </p>
          </div>

          {/* What You Get Section */}
          <div className="relative group mb-16">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-600 to-zinc-500 rounded-2xl blur opacity-20"></div>
            <div className="relative p-12 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl border border-zinc-700/50">
              <h2 className="text-3xl font-bold text-zinc-100 mb-8">What You Get</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-zinc-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-200 mb-2">Personalized Program Design</h3>
                    <p className="text-zinc-400">Custom workout plans designed specifically for your goals and fitness level.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-zinc-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-200 mb-2">Expert Form Correction</h3>
                    <p className="text-zinc-400">Real-time feedback and adjustments to ensure safe, effective movements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-zinc-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-200 mb-2">Progress Tracking</h3>
                    <p className="text-zinc-400">Regular assessments to monitor your improvements and adjust your program.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-zinc-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-200 mb-2">Accountability & Motivation</h3>
                    <p className="text-zinc-400">Consistent support to keep you on track and motivated to reach your goals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-zinc-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-200 mb-2">Flexible Scheduling</h3>
                    <p className="text-zinc-400">Training sessions that fit your busy lifestyle and schedule.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-zinc-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-200 mb-2">Injury Prevention</h3>
                    <p className="text-zinc-400">Professional guidance to train safely and prevent common workout injuries.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Who It's For Section */}
          <div className="relative group mb-16">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-600 to-zinc-500 rounded-2xl blur opacity-20"></div>
            <div className="relative p-12 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl border border-zinc-700/50">
              <h2 className="text-3xl font-bold text-zinc-100 mb-6">Who It's For</h2>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                Personal training is perfect for anyone looking to take their fitness to the next level. Whether you're just starting out or you're an experienced athlete, customized one-on-one training provides the expertise and accountability you need to achieve your goals.
              </p>
              <p className="text-zinc-300 text-lg leading-relaxed">
                Ideal for those seeking weight loss, muscle building, athletic performance enhancement, post-injury rehabilitation, or simply wanting to learn proper exercise technique in a safe and supportive environment.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative group mb-16">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-600 to-zinc-500 rounded-2xl blur opacity-30"></div>
            <div className="relative p-12 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl border border-zinc-700/50 text-center">
              <h2 className="text-4xl font-black text-zinc-100 mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                Let's work together to create a personalized training program that fits your goals and lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:6154058165"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-zinc-600 to-zinc-700 hover:from-zinc-500 hover:to-zinc-600 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zinc-500/50"
                >
                  <Phone className="w-6 h-6" />
                  Call Now: (615) 405-8165
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-lg rounded-lg border border-zinc-700 hover:border-zinc-600 transition-all duration-300"
                >
                  <ArrowRight className="w-6 h-6" />
                  View Other Services
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-600 to-zinc-500 rounded-2xl blur opacity-20"></div>
            <div className="relative p-12 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl border border-zinc-700/50">
              <h2 className="text-3xl font-bold text-zinc-100 mb-8 text-center">Contact Us</h2>
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
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
                  <label className="block text-zinc-300 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors"
                    placeholder="Your phone number"
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
                  <label className="block text-zinc-300 font-medium mb-2">Description</label>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                    placeholder="Tell us about your fitness goals..."
                  />
                </div>
                {submitMessage && (
                  <div className="text-center text-zinc-300 font-medium">
                    {submitMessage}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-zinc-600 to-zinc-700 hover:from-zinc-500 hover:to-zinc-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalTrainingPage;
