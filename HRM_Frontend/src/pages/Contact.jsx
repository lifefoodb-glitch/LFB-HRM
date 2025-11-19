import React from 'react';

const Contact = () => {
  return (
    <main className="py-12">
  <section className="mt-20 pt-12 border-t">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-slate-700 mb-6">
                Have questions about our products or want to become a partner? We'd love to hear from you!
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                  <a href="mailto:info@energyhub.com" className="text-rose-500 hover:text-rose-600 text-lg">
                    info@energyhub.com
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
                  <p className="text-slate-700 text-lg">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Address</h3>
                  <p className="text-slate-700">123 Energy Street, Power City, PC 12345</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 rounded-lg p-8">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Name</label>
                  <input type="text" placeholder="Your name" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
                  <input type="email" placeholder="Your email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Message</label>
                  <textarea placeholder="Your message" rows="4" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"></textarea>
                </div>
                <button className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 rounded-lg transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
    </main>
  );
};

export default Contact;
