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
              {/* Social icons placeholder */}
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors cursor-pointer" />
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors cursor-pointer" />
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors cursor-pointer" />
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
            <h4 className="font-bold mb-4">Locations</h4>
            <ul className="space-y-3 text-primary-foreground/70 text-sm">
              <li>
                <span className="text-primary-foreground/40 uppercase tracking-widest text-xs">New Jersey</span><br />
                Newport, NJ
              </li>
              <li>
                <span className="text-primary-foreground/40 uppercase tracking-widest text-xs">Toronto</span><br />
                Toronto, ON
              </li>
            </ul>
            <div className="mt-6 space-y-1 text-primary-foreground/70 text-sm">
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
