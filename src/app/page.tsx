export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-[72px]">
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20 h-[72px]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <a href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                MoonMatch
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="/login" className="hidden md:inline-block px-6 py-2 rounded-full border border-gray-300 dark:border-gray-600 hover:border-blue-600 transition-all duration-300">
                Login
              </a>
              <a href="/register" className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 transform hover:scale-105">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative container mx-auto px-6 pt-32 pb-20 md:py-40 overflow-hidden bg-gradient-to-r from-blue-600/5 to-purple-600/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-purple-100/40 to-pink-100/40 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 animate-gradient"></div>
          <div className="absolute inset-0 backdrop-blur-[100px]"></div>
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          {/* Hero content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Unlock Your Next Growth Opportunity
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              MoonMatch uses AI to connect innovative startups with established SMEs, fostering collaborations that drive mutual growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/register"
                className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>
          {/* Planets section */}
          <div className="flex-1 relative h-[400px]">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-3xl rounded-full"></div>
            <div className="relative h-full">

              {/* Orbiting planets */}
              <div className="absolute w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-1 shadow-lg shadow-blue-500/50">
                <div className="absolute inset-0 rounded-full bg-[repeating-conic-gradient(from_0deg,transparent_0_15deg,white/30_15deg_30deg)] animate-spin-slow"></div>
              </div>
              <div className="absolute w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-2 shadow-lg shadow-purple-500/50">
                <div className="absolute inset-0 rounded-full bg-[repeating-linear-gradient(45deg,transparent,transparent_6px,white/30_6px,white/30_12px)] animate-spin-slow"></div>
              </div>
              <div className="absolute w-22 h-22 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-3 shadow-lg shadow-pink-500/50">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,white/40_0%,transparent_60%)] animate-spin-slow"></div>
              </div>
              <div className="absolute w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-4 shadow-lg shadow-teal-500/50">
                <div className="absolute inset-0 rounded-full bg-[repeating-radial-gradient(circle_at_center,white/30_0,white/30_2px,transparent_2px,transparent_6px)] animate-spin-slow"></div>
              </div>
              <div className="absolute w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-5 shadow-lg shadow-orange-500/50">
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0_120deg,white/30_120deg_240deg,transparent_240deg_360deg)] animate-spin-slow"></div>
              </div>

              {/* Enhanced central planet - made larger */}
              <div className="absolute w-48 h-48 bg-gradient-to-br from-white via-blue-200 to-blue-400 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl shadow-white/50">
                {/* Central planet patterns */}
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-white/20 to-transparent animate-spin-slow"></div>
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0_45deg,white/20_45deg_135deg,transparent_135deg_360deg)] animate-spin-slow"></div>
                {/* Glowing effect */}
                <div className="absolute -inset-4 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute -inset-8 bg-blue-500/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Grid - Updated with glass morphism effect */}
      <section id="features" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature cards - Added hover effects and glass morphism */}
          <div className="group p-6 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Intelligent Matching</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our AI algorithms analyze startup skills and SME needs to suggest the most promising collaborations.
            </p>
          </div>

          {/* Secure Platform */}
          <div className="group p-6 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
            <p className="text-gray-600 dark:text-gray-300">Secure access via OAuth2 and robust data protection ensure your information is safe.</p>
          </div>

          {/* Smart Dashboard */}
          <div className="group p-6 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Dedicated Dashboards</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Tailored dashboards for startups and SMEs to manage profiles, discover opportunities, and track interactions.
            </p>
          </div>

          {/* API Access */}
          <div className="group p-6 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">API Data Exposure</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Seamlessly integrate with external tools using our comprehensive API for accessing startup and SME data.
            </p>
          </div>

          {/* Document Processing */}
          <div className="group p-6 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Document Analysis</h3>
            <p className="text-gray-600 dark:text-gray-300">
              AI agents analyze uploaded documents like pitch decks to extract key information for better matching.
            </p>
          </div>

          {/* Feedback & Improvement */}
          <div className="group p-6 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-pink-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Feedback-Driven Refinement</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your interactions and feedback continuously improve our matching algorithms for more accurate results.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works - Added timeline visualization */}
      <section className="container mx-auto px-6 py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/10 dark:via-blue-900/10 to-transparent"></div>
        <h2 className="text-3xl font-bold text-center mb-12">How MoonMatch Works</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">For Startups</h3>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">1</div>
              <p className="font-medium">Create a detailed profile showcasing your skills, industry, and upload your pitch deck.</p>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">2</div>
              <p className="font-medium">Discover potential SME clients that align with your expertise through AI-powered suggestions.</p>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">3</div>
              <p className="font-medium">Connect and collaborate with SMEs to explore growth opportunities.</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">For SMEs</h3>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center mr-4">1</div>
              <p className="font-medium">Search and filter registered startups based on industry, technologies, and development stage.</p>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center mr-4">2</div>
              <p className="font-medium">Receive AI-driven suggestions for startups with the highest collaboration potential.</p>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center mr-4">3</div>
              <p className="font-medium">Initiate contact and leave feedback to refine the matchmaking process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Enhanced with more engaging design */}
      <section className="container mx-auto px-6 py-24">
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 animate-grid"></div>
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 opacity-90">Join MoonMatch today and discover your perfect business match.</p>
          <a
            href="/register"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Start now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400">© 2025 Moonstone Fund. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Privacy</a>
            <a href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Terms</a>
            <a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
