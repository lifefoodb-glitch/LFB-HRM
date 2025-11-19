import React from 'react';

const About = () => {
  return (
    <main className="py-12">
           <section className="mt-20 pt-12 border-t">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-slate-700 mb-4">
                Welcome to EnergyHub, where innovation meets refreshment. We craft premium energy drinks designed for those who demand peak performance.
              </p>
              <p className="text-lg text-slate-700 mb-4">
                Our mission is to provide high-quality, natural energy solutions that fuel your adventures, whether you're conquering workouts, crushing goals, or pushing boundaries.
              </p>
              <p className="text-lg text-slate-700">
                With a commitment to quality and sustainability, every sip of our energy drink is packed with premium ingredients and bold flavors.
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-400 to-rose-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Premium Quality Ingredients</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Natural Energy Boost</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Eco-Friendly Packaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Trusted by Athletes & Professionals</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
    </main>
  );
};

export default About;
