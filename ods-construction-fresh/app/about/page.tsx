export default function About() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-500 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-sky-50 max-w-3xl">
            Building quality homes and lasting relationships in Eleuthera for over a decade
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Founded in 2013, Eleuthera Construction has been a cornerstone of 
                  residential building in the beautiful island of Eleuthera, The Bahamas.
                </p>
                <p>
                  We started with a simple mission: to provide high-quality construction 
                  services that respect both our clients' visions and the unique beauty 
                  of our island home.
                </p>
                <p>
                  Over the years, we've grown from a small team to become one of 
                  Eleuthera's most trusted construction companies, completing hundreds 
                  of projects while maintaining our commitment to excellence.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl p-12 shadow-lg">
              <div className="text-center space-y-8">
                <div>
                  <div className="text-5xl font-bold text-sky-600">10+</div>
                  <div className="text-gray-700 font-semibold mt-2">Years Experience</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-amber-500">200+</div>
                  <div className="text-gray-700 font-semibold mt-2">Projects Completed</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-teal-500">100%</div>
                  <div className="text-gray-700 font-semibold mt-2">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every detail, ensuring the highest 
                quality in all our work.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                Honest communication and transparent practices build trust with 
                our clients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🌴</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                Committed to supporting and enriching our local Eleuthera community.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Embracing modern techniques while honoring traditional craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the skilled professionals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                JD
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">James Davidson</h3>
              <p className="text-sky-600 font-semibold mb-3">Founder & Lead Contractor</p>
              <p className="text-gray-600">
                25+ years of construction experience in The Bahamas
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                MT
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Maria Thompson</h3>
              <p className="text-amber-600 font-semibold mb-3">Project Manager</p>
              <p className="text-gray-600">
                Expert in coordinating complex residential projects
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                RC
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Robert Collins</h3>
              <p className="text-teal-600 font-semibold mb-3">Master Carpenter</p>
              <p className="text-gray-600">
                Specializing in custom woodwork and fine finishes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Together
          </h2>
          <p className="text-xl mb-8 text-sky-50">
            Ready to start your construction project? Get in touch with our team today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

