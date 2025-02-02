import React from 'react';
import { Github, Linkedin, Twitter, Brain, Blocks, Microscope, Code, Cpu, ArrowRight, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-50 to-blue-50 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 px-4 py-2 rounded-full text-blue-600 font-medium mb-6">
                AI Engineer & Tech Entrepreneur
              </div>
              <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Matt <span className="text-blue-600">Howitt</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Pioneering AI solutions and sharing insights on global stages. 
                Featured speaker at Google Next and successful tech founder.
              </p>
              <div className="flex space-x-4 mb-8">
                <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <Github className="w-6 h-6 text-gray-700" />
                </a>
                <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <Linkedin className="w-6 h-6 text-gray-700" />
                </a>
                <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <Twitter className="w-6 h-6 text-gray-700" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80" 
                alt="Matt Howitt"
                className="relative z-10 rounded-3xl shadow-xl transform -rotate-3 transition-transform hover:rotate-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Areas of Impact</h2>
            <p className="text-xl text-gray-600">
              Pushing the boundaries of technology and sharing knowledge across industries
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl">
                <div className="bg-blue-100 p-3 rounded-xl inline-block mb-6">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Engineering</h3>
                <p className="text-gray-600 mb-6">Building next-generation AI solutions that transform how businesses operate</p>
                <div className="flex items-center text-blue-600 font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl">
                <div className="bg-purple-100 p-3 rounded-xl inline-block mb-6">
                  <Microscope className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Public Speaking</h3>
                <p className="text-gray-600 mb-6">Sharing insights and inspiring innovation at global tech conferences</p>
                <div className="flex items-center text-purple-600 font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl">
                <div className="bg-green-100 p-3 rounded-xl inline-block mb-6">
                  <Code className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tech Leadership</h3>
                <p className="text-gray-600 mb-6">Leading teams to build innovative solutions that scale</p>
                <div className="flex items-center text-green-600 font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Milestones</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-xl mr-4">
                      <Blocks className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Successful Exit</h3>
                      <p className="text-gray-600">Co-founded and successfully sold a technology company that revolutionized its industry</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-xl mr-4">
                      <ExternalLink className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Google Next Speaker</h3>
                      <p className="text-gray-600">Featured speaker sharing insights on AI innovation and future tech trends</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-xl mr-4">
                      <Cpu className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">AI Innovation</h3>
                      <p className="text-gray-600">Pioneered groundbreaking AI solutions across multiple platforms</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-3xl transform rotate-6"></div>
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                  alt="Speaking at conference"
                  className="relative z-10 rounded-3xl shadow-xl transform -rotate-6 transition-transform hover:rotate-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Connect</h2>
            <p className="text-xl text-gray-600 mb-12">
              Interested in collaborating on AI projects or speaking opportunities?
            </p>
            <a 
              href="mailto:contact@example.com" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center text-gray-600">
            <p>© {new Date().getFullYear()} Matt Howitt • AI Engineer & Tech Entrepreneur</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;