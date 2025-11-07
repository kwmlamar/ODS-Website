export default function Portfolio() {
  const projects = [
    {
      title: 'Oceanview Villa',
      category: 'New Construction',
      description: 'Modern 4-bedroom beachfront home with panoramic ocean views',
      features: ['4 Bedrooms', '3.5 Bathrooms', 'Pool', 'Ocean Views'],
      color: 'from-sky-400 to-blue-500'
    },
    {
      title: 'Historic Home Restoration',
      category: 'Renovation',
      description: 'Complete restoration of a 1960s island home with modern amenities',
      features: ['3 Bedrooms', 'Updated Kitchen', 'New Roof', 'Modern Systems'],
      color: 'from-amber-400 to-orange-500'
    },
    {
      title: 'Coastal Cottage',
      category: 'New Construction',
      description: 'Charming 2-bedroom cottage designed for island living',
      features: ['2 Bedrooms', 'Open Floor Plan', 'Covered Porch', 'Garden'],
      color: 'from-teal-400 to-cyan-500'
    },
    {
      title: 'Luxury Kitchen Remodel',
      category: 'Kitchen Remodel',
      description: 'High-end kitchen transformation with custom cabinetry',
      features: ['Custom Cabinets', 'Granite Counters', 'New Appliances', 'Island'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Master Suite Addition',
      category: 'Addition',
      description: 'Spacious master suite with spa-like bathroom',
      features: ['Master Bedroom', 'Walk-in Closet', 'Luxury Bath', 'Private Deck'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Island Estate',
      category: 'New Construction',
      description: 'Expansive 5-bedroom estate with guest house',
      features: ['5 Bedrooms', 'Guest House', 'Pool & Spa', '2 Acres'],
      color: 'from-indigo-400 to-blue-500'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-500 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-sky-50 max-w-3xl">
            Explore our completed projects showcasing quality craftsmanship and attention to detail
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Project Image Placeholder */}
                <div className={`h-64 bg-gradient-to-br ${project.color} flex items-center justify-center text-white`}>
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">
                      {project.category === 'New Construction' ? '🏡' : 
                       project.category === 'Renovation' ? '🔨' :
                       project.category === 'Kitchen Remodel' ? '🚿' :
                       project.category === 'Addition' ? '➕' : '🏗️'}
                    </div>
                    <div className="text-sm font-semibold opacity-90">
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that speak to our experience and dedication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl font-bold text-sky-600 mb-2">200+</div>
              <div className="text-gray-700 font-semibold">Homes Built</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl font-bold text-amber-500 mb-2">150+</div>
              <div className="text-gray-700 font-semibold">Renovations</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl font-bold text-teal-500 mb-2">300+</div>
              <div className="text-gray-700 font-semibold">Happy Clients</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl font-bold text-green-500 mb-2">10+</div>
              <div className="text-gray-700 font-semibold">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              Hear from homeowners who've worked with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-xl shadow-md">
              <div className="text-amber-500 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4 italic text-lg">
                "They transformed our dated house into a modern dream home. The attention 
                to detail and quality of work exceeded our expectations."
              </p>
              <p className="font-semibold text-gray-900">— Jennifer & Mark L.</p>
              <p className="text-sm text-gray-600">Historic Home Restoration</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl shadow-md">
              <div className="text-amber-500 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4 italic text-lg">
                "Building our oceanview villa was seamless thanks to their professionalism. 
                They delivered on time and within budget."
              </p>
              <p className="font-semibold text-gray-900">— Thomas R.</p>
              <p className="text-sm text-gray-600">Oceanview Villa</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md">
              <div className="text-amber-500 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4 italic text-lg">
                "The kitchen remodel completely changed how we use our home. Beautiful 
                craftsmanship and they were a pleasure to work with."
              </p>
              <p className="font-semibold text-gray-900">— Diana K.</p>
              <p className="text-sm text-gray-600">Luxury Kitchen Remodel</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-md">
              <div className="text-amber-500 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4 italic text-lg">
                "Our coastal cottage is perfect. They understood our vision and brought 
                it to life exactly as we imagined."
              </p>
              <p className="font-semibold text-gray-900">— Robert & Lisa M.</p>
              <p className="text-sm text-gray-600">Coastal Cottage</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Project Today
          </h2>
          <p className="text-xl mb-8 text-sky-50">
            Let's create something beautiful together. Contact us for a consultation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

