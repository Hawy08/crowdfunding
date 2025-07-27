import React from "react";

const partners = [
  { name: "Partner 1", logo: "🏢" },
  { name: "Partner 2", logo: "🏭" },
  { name: "Partner 3", logo: "🏪" },
  { name: "Partner 4", logo: "🏬" },
  { name: "Partner 5", logo: "🏢" },
  { name: "Partner 6", logo: "🏭" },
];

export default function FooterBanner() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Partners Section */}
      <section className="bg-white flex-1 flex items-center justify-center py-12">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">Our Partners</h3>
          <div className="relative overflow-hidden">
            <div className="flex space-x-8 animate-scroll" style={{
              animation: 'scroll 20s linear infinite',
            }}>
              {partners.map((partner, idx) => (
                <div key={idx} className="flex-shrink-0 flex items-center justify-center w-32 h-16 bg-gray-100 rounded-lg">
                  <div className="text-2xl">{partner.logo}</div>
                </div>
              ))}
              {/* Duplicate partners for seamless loop */}
              {partners.map((partner, idx) => (
                <div key={`duplicate-${idx}`} className="flex-shrink-0 flex items-center justify-center w-32 h-16 bg-gray-100 rounded-lg">
                  <div className="text-2xl">{partner.logo}</div>
                </div>
              ))}
            </div>
          </div>
          
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </section>

      {/* Footer Links Section */}
      <footer className="bg-green-600 text-white flex-1 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 py-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Pamoja</h3>
              <p className="text-green-100 mb-4 max-w-md">
                Empowering communities through blockchain-powered fundraising. 
                Transparent, secure, and impactful crowdfunding for social change.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-green-200 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-green-200 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-green-200 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Start a Campaign</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Browse Campaigns</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-green-500 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-100 text-sm">
              © 2024 Pamoja. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-green-100 hover:text-white text-sm transition-colors">Privacy</a>
              <a href="#" className="text-green-100 hover:text-white text-sm transition-colors">Terms</a>
              <a href="#" className="text-green-100 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 