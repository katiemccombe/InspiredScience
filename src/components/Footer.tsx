const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container mx-auto px-6 text-center">
      <p className="font-display font-bold text-xl text-primary-foreground mb-2">InspirED Science Outreach</p>
      <p className="font-body text-primary-foreground/70 text-sm">
        Western University · London, Ontario, Canada
      </p>
      <p className="font-body text-primary-foreground/50 text-xs mt-6">
        © {new Date().getFullYear()} InspirED Science Outreach. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
