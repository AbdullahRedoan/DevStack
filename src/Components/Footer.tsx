import Logo from '../assets/logo-text.png';

export const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-100 text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-8">
        
        <div className="grid lg:grid-cols-5 md:grid-cols-3  gap-8 mb-12 text-center md:text-left">
          
          <div className="max-w-full justify-center lg:col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
            <img
              src={Logo} // Replace with your combined image logo path
              alt="DevStack"
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-slate-500 mb-6 leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 font-medium text-slate-700">
              <a href="#github" className="hover:text-pink-600 transition-colors">GitHub</a>
              <span className="md:hidden text-slate-400">•</span>
              <a href="#twitter" className="hover:text-pink-600 transition-colors">Twitter</a>
              <span className="md:hidden text-slate-400">•</span>
              <a href="#linkedin" className="hover:text-pink-600 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Desktop Navigation Links (Hidden on Mobile) */}
          <div className="hidden md:grid grid-cols-3 lg:col-span-3 md:col-span-2 gap-12 lg:gap-16 text-left">
            {/* Product */}
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900">
                Product
              </h4>
              <a href="#home" className="hover:text-pink-600 transition-colors">Home</a>
              <a href="#technologies" className="hover:text-pink-600 transition-colors">Technologies</a>
              <a href="#projects" className="hover:text-pink-600 transition-colors">Projects</a>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900">
                Company
              </h4>
              <a href="#about" className="hover:text-pink-600 transition-colors">About</a>
              <a href="#contact" className="hover:text-pink-600 transition-colors">Contact</a>
              <a href="#careers" className="hover:text-pink-600 transition-colors">Careers</a>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900">
                Legal
              </h4>
              <a href="#privacy" className="hover:text-pink-600 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-pink-600 transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-slate-100 pt-6">
          {/* Bottom Bar */}
          <div className="flex sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#privacy" className="hover:text-slate-600 transition-colors">
                Privacy
              </a>
              <a href="#terms" className="hover:text-slate-600 transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};