import React from 'react'

function NewsLetter() {
  return (
    <>
      {/* Newsletter Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gray-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-6 py-16 sm:px-12 lg:px-16">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Stay Inspired
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  Join our newsletter and be the first to discover new updates, exclusive offers, and inspiration.
                </p>
              </div>

              <div className="mt-10 max-w-xl mx-auto">
                <form className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-900 font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all"
                  >
                    Subscribe
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </form>
                <p className="mt-4 text-sm text-gray-400 text-center">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default NewsLetter