'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Crafting Quality Spaces',
      subtitle: 'Transforming homes with expert craftsmanship and attention to detail',
      image: '/images/slide1.jpg',
      isGradient: false,
    },
    {
      title: (
        <>
          Building with<br />
          Purpose &<br />
          Precision
        </>
      ),
      subtitle: 'Your trusted construction partner in The Bahamas since 2000',
      image: '/images/slide2.jpeg',
      isGradient: false,
    },
    {
      title: 'Based in Eleuthera',
      subtitle: 'Locally rooted, delivering exceptional residential construction projects',
      image: '/images/slide3.JPEG',
      isGradient: false,
    },
  ];

  // Auto-advance slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div>
      {/* Hero Carousel */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={
              slide.isGradient
                ? { background: slide.image }
                : {
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }
            }
          >
            {/* Dark tint overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Subtle 3x2 Grid Overlay for aesthetics */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 pointer-events-none z-10">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="border border-white/10"
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-20">
              <div className="max-w-2xl mx-auto">
                <div className="relative inline-block mb-3">
                  {/* Yellow Accent Corners around welcome text */}
                  <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-yellow-500"></div>
                  <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-yellow-500"></div>
                  
                  <p className="text-base sm:text-lg text-white/80 text-left px-4 py-2 tracking-wide">
                    Welcome to <span className="font-bold">The Bahamas</span>
          </p>
        </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-left mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 text-left mb-8 font-light leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="flex justify-start">
                  <Button
                    asChild
                    variant="yellow"
                    size="2xl"
                  >
                    <Link href="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-yellow-500 w-8'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-prose">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building Dreams in Paradise Since 2000
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                ODS Construction is a family-run business rooted in Eleuthera, The Bahamas. 
                With over two decades of island construction experience, we understand the 
                unique challenges and opportunities of building in paradise.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From hurricane-resistant homes to luxury beachfront properties, we combine 
                traditional craftsmanship with modern techniques to create spaces that stand 
                the test of time and tropical weather.
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/slide2.jpeg')" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction solutions for island living
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl mb-4">🏡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Residential Builds
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Custom homes designed for island living, built to withstand tropical conditions 
                while maximizing comfort and style.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl mb-4">🔨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Renovations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Transform existing spaces with modern upgrades, storm damage repairs, and 
                complete home makeovers that breathe new life into properties.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl mb-4">🏊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Pool Construction
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Custom swimming pools and spas designed for tropical paradise, from infinity 
                pools to family-friendly designs with lasting durability.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl mb-4">🌴</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Outdoor Living
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Beautiful decks, patios, pergolas, and outdoor kitchens that extend your 
                living space and embrace the island lifestyle.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Roofing Services
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Hurricane-rated roofing installation and repairs, designed to protect your 
                home through the toughest tropical storms and weather.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Site Prep
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Professional land clearing, foundation work, and site preparation services 
                to ensure your project starts on solid ground.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">
              Showcasing our finest work across Eleuthera
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['/images/slide1.jpg', '/images/slide2.jpeg', '/images/slide3.JPEG'].map((img, idx) => (
              <div 
                key={idx}
                className="relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url('${img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-xl font-bold mb-1">Project {idx + 1}</h3>
                    <p className="text-sm text-white/90">Eleuthera, Bahamas</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl mb-3">🌴</div>
              <h3 className="text-xl font-bold mb-2">Built for Island Conditions</h3>
              <p className="text-gray-300">Hurricane-resistant construction techniques proven over 20+ years</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-bold mb-2">Family-Run Trust</h3>
              <p className="text-gray-300">Local reputation built on integrity and quality workmanship</p>
            </div>
            <div>
              <div className="text-4xl mb-3">⏰</div>
              <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
              <p className="text-gray-300">Reliable scheduling and project management you can count on</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by families across Eleuthera
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-sky-400 flex items-center justify-center text-white font-bold text-xl">
                  JM
                </div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900">John & Mary Thompson</div>
                  <div className="text-sm text-gray-600">Homeowners</div>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "ODS Construction built our dream home and exceeded every expectation. 
                Their knowledge of island construction is unmatched."
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center text-white font-bold text-xl">
                  SK
                </div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900">Sarah Klein</div>
                  <div className="text-sm text-gray-600">Property Developer</div>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "Professional, reliable, and always on time. Working with a family business 
                made all the difference in our renovation project."
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-400 flex items-center justify-center text-white font-bold text-xl">
                  DR
                </div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900">David Roberts</div>
                  <div className="text-sm text-gray-600">Beach House Owner</div>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "After Hurricane damage, ODS rebuilt our home stronger than ever. 
                Their storm-proof techniques gave us complete peace of mind."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free consultation and quote for your construction project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              asChild
              variant="yellow"
              size="2xl"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get A Free Quote
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </Link>
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-gray-300">
            <a href="tel:+12424705294" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <span className="text-xl">📞</span>
              <span>+1 (242) 470-5294</span>
            </a>
            <a href="https://wa.me/12424705294" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <span className="text-xl">💬</span>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
