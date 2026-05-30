export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="font-heading font-bold text-2xl tracking-tight mb-4">
              QUARK <span className="text-accent">TALENT</span>
            </div>
            <p className="text-primary-foreground/70 max-w-sm mb-6">
              Talent acquisition and HR advisory with over 20 years of combined experience. We help organizations find and keep the people who matter most.
            </p>
            <div className="flex gap-4">
              {/* LinkedIn — replace href with your company page URL when ready */}
              <a
                href="#"
                aria-label="Quark Talent on LinkedIn"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary-foreground">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>Executive Search</li>
              <li>Talent Strategy</li>
              <li>HRIS Implementation</li>
              <li>Interim Leadership</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-1 text-primary-foreground/70 text-sm">
              <p>partner@quarktalent.com</p>
              <p>Tel: +1 (917) 654-7106</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Quark Talent. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-primary-foreground cursor-pointer">Privacy Policy</span>
            <span className="hover:text-primary-foreground cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
