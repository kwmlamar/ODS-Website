export default function Services() {
  const services = [
    {
      title: 'New Home Construction',
      icon: '🏡',
      description: 'Build your dream home from the ground up with our comprehensive construction services.',
      features: [
        'Custom home design consultation',
        'Site preparation and foundation work',
        'Structural framing and roofing',
        'Complete interior and exterior finishing',
        'Hurricane-resistant construction',
        'Energy-efficient building practices'
      ],
      color: 'from-sky-50 to-blue-50'
    },
    {
      title: 'Home Renovations',
      icon: '🔨',
      description: 'Transform your existing home with professional renovation services.',
      features: [
        'Whole-house renovations',
        'Room additions and extensions',
        'Structural modifications',
        'Interior redesign and updates',
        'Exterior improvements',
        'Modernization and upgrades'
      ],
      color: 'from-amber-50 to-orange-50'
    },
    {
      title: 'Kitchen & Bath Remodeling',
      icon: '🚿',
      description: 'Create beautiful, functional spaces with our specialized remodeling services.',
      features: [
        'Custom kitchen design',
        'Cabinet installation',
        'Countertop and backsplash work',
        'Modern bathroom designs',
        'Plumbing and fixture installation',
        'Tile and flooring installation'
      ],
      color: 'from-teal-50 to-cyan-50'
    },
    {
      title: 'Custom Carpentry',
      icon: '🪵',
      description: 'Handcrafted woodwork and custom furniture to enhance your living spaces.',
      features: [
        'Custom cabinetry',
        'Built-in shelving and storage',
        'Wooden decks and pergolas',
        'Crown molding and trim work',
        'Custom furniture pieces',
        'Decorative woodwork'
      ],
      color: 'from-green-50 to-emerald-50'
    },
    {
      title: 'Outdoor Living Spaces',
      icon: '🌺',
      description: 'Extend your living area outdoors with beautiful, functional designs.',
      features: [
        'Deck and patio construction',
        'Outdoor kitchens',
        'Pergolas and gazebos',
        'Pool houses',
        'Landscape integration',
        'Weather-resistant materials'
      ],
      color: 'from-purple-50 to-pink-50'
    },
    {
      title: 'Maintenance & Repairs',
      icon: '🔧',
      description: 'Keep your home in top condition with our maintenance and repair services.',
      features: [
        'Regular home maintenance',
        'Storm damage repairs',
        'Roof repairs and replacement',
        'Foundation repairs',
        'Painting and refinishing',
        'Emergency repairs'
      ],
      color: 'from-red-50 to-orange-50'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-500 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-sky-50 max-w-3xl">
            Comprehensive construction solutions for all your residential building needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 md:p-12 shadow-lg`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                      {service.description}
                    </p>
                    <a
                      href="/contact"
                      className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                      Get a Quote
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      What's Included:
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-sky-600 mr-3 text-xl">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A straightforward approach to bringing your project to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-sky-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-sky-600">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultation</h3>
              <p className="text-gray-600">
                We meet to discuss your vision, needs, and budget.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-amber-600">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Planning</h3>
              <p className="text-gray-600">
                Detailed plans and estimates are prepared for your approval.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-teal-600">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Construction</h3>
              <p className="text-gray-600">
                Our skilled team brings your project to life.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-green-600">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Completion</h3>
              <p className="text-gray-600">
                Final walkthrough and handover of your finished project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-sky-50">
            Contact us today for a free consultation and quote for your project.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
}

