import logo from '../assets/Logo.png';

const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-x-8 md:gap-x-12">
        {/* Left: Main Info with Logo */}
        <div className="flex items-center mb-8 md:mb-0">
          <span className="w-12 h-12 flex items-center justify-center rounded-full bg-white mr-4">
            <img src={logo} alt="Logo" className="w-10 h-10" />
          </span>
          <div>
            <p className="font-display font-bold text-xl text-primary-foreground mb-2">InspirED Science</p>
            <p className="font-body text-primary-foreground/70 text-sm">
              London, Ontario, Canada
            </p>
            <p className="font-body text-primary-foreground/50 text-xs mt-6">
              © {new Date().getFullYear()} InspirED Science. All rights reserved.
            </p>
          </div>
        </div>
        {/* Divider */}
        <div className="hidden md:block h-20 border-l border-primary-foreground/30 mx-4"></div>
        {/* Right: Contact Us */}
        <div className="text-right">
          <p className="font-display font-bold text-xl text-primary-foreground mb-2">Contact Us!</p>
          <div className="flex flex-col items-end gap-2">
            <a
              href="https://outlook.live.com/mail/0/deeplink/compose?to=inspiredsci@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-body text-primary-foreground/80 text-lg hover:text-yellow-400 transition-colors"
              style={{ marginTop: 0 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 mr-2">
                <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v16h16V4H4zm8 7.414l6-4.414V6l-6 4.414L6 6v1l6 4.414z" />
              </svg>
              inspiredsci@gmail.com
            </a>
            <a
              href="https://www.instagram.com/inspired_sci/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-body text-primary-foreground/80 text-lg hover:text-yellow-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm4.25 3.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zm0 1.5a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5zm5.25.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z" />
              </svg>
              Follow us on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
