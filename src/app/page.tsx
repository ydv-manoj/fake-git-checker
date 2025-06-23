import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fake Git Checker - Analyze GitHub Contributions',
  description: 'Detect fake GitHub contributions and analyze profile authenticity using advanced algorithms and AI',
  keywords: ['github', 'contributions', 'analysis', 'fake detection', 'developer tools'],
  authors: [{ name: 'Manoj Yadav', url: 'https://github.com/ydv-manoj' }],
  openGraph: {
    title: 'Fake Git Checker',
    description: 'Detect fake GitHub contributions and analyze profile authenticity',
    url: 'https://fake-git-checker.vercel.app',
    siteName: 'Fake Git Checker',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fake Git Checker',
    description: 'Detect fake GitHub contributions and analyze profile authenticity',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-github-gray-100 to-white">
      {/* Header */}
      <header className="border-b border-github-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-github-blue-500 to-github-green-300 flex items-center justify-center">
                <span className="text-white font-bold text-sm">🕵️</span>
              </div>
              <h1 className="text-xl font-bold text-github-gray-900">
                Fake Git Checker
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#features" className="text-github-gray-600 hover:text-github-blue-500 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-github-gray-600 hover:text-github-blue-500 transition-colors">
                How it Works
              </a>
              <a href="#api" className="text-github-gray-600 hover:text-github-blue-500 transition-colors">
                API
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-github-gray-900 mb-6">
            Detect Fake GitHub
            <span className="text-github-blue-500"> Contributions</span>
          </h2>
          <p className="text-xl text-github-gray-600 mb-8 leading-relaxed">
            Analyze GitHub profiles to identify authentic contributions and distinguish them from 
            artificially generated commits using advanced algorithms and AI-powered analysis.
          </p>
          
          {/* Search Form */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter GitHub username..."
                className="w-full px-4 py-3 pr-12 border border-github-gray-300 rounded-lg focus:ring-2 focus:ring-github-blue-500 focus:border-transparent outline-none text-github-gray-900"
                disabled
              />
              <button 
                className="absolute right-2 top-2 px-4 py-1 bg-github-blue-500 text-white rounded-md hover:bg-github-blue-600 transition-colors disabled:opacity-50"
                disabled
              >
                Analyze
              </button>
            </div>
            <p className="text-sm text-github-gray-500 mt-2">
              🚧 Coming soon! This feature is under development.
            </p>
          </div>

          {/* Features Grid */}
          <div id="features" className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-github-gray-200">
              <div className="w-12 h-12 bg-github-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-github-gray-900 mb-2">
                Pattern Detection
              </h3>
              <p className="text-github-gray-600 text-sm">
                Advanced algorithms identify suspicious commit patterns, timing anomalies, and artificial contributions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-github-gray-200">
              <div className="w-12 h-12 bg-github-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-github-gray-900 mb-2">
                AI Analysis
              </h3>
              <p className="text-github-gray-600 text-sm">
                Groq-powered AI evaluates commit messages, code changes, and repository authenticity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-github-gray-200">
              <div className="w-12 h-12 bg-github-yellow-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-github-gray-900 mb-2">
                Detailed Reports
              </h3>
              <p className="text-github-gray-600 text-sm">
                Comprehensive scoring with explanations, red flags, and actionable insights.
              </p>
            </div>
          </div>

          {/* Development Status */}
          <div className="bg-github-yellow-100 border border-github-yellow-300 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-github-yellow-800 mb-2">
              🚧 Under Active Development
            </h3>
            <p className="text-github-yellow-700 mb-4">
              This project is being built incrementally with daily commits. Follow our progress on GitHub!
            </p>
            <a 
              href="https://github.com/ydv-manoj/fake-git-checker" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-github-gray-900 text-white rounded-lg hover:bg-github-gray-800 transition-colors"
            >
              View on GitHub
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-github-gray-200 bg-github-gray-50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-github-gray-600 text-sm">
            Built with ❤️ by{' '}
            <a 
              href="https://github.com/ydv-manoj" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-github-blue-500 hover:underline"
            >
              Manoj Yadav
            </a>
            {' '}• Open source & educational purpose
          </p>
        </div>
      </footer>
    </div>
  );
}