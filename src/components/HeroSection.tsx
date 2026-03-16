import { motion } from "framer-motion";
import heroImage from "@/assets/hero-lab.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Graduate students mentoring young students in a science laboratory"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-sm md:text-base uppercase tracking-[0.25em] text-primary-foreground/80 mb-6"
        >
          Western University · London, Ontario
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6"
        >
          InspirED Science
          <br />
          Outreach
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10"
        >
          Making science accessible to the next generation through hands-on workshops and mentorship.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-display font-bold text-accent-foreground transition-transform hover:scale-105"
            style={{ background: "var(--gradient-cta)" }}
          >
            Book a Workshop
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-display font-semibold text-primary-foreground border-2 border-primary-foreground/40 hover:border-primary-foreground/80 transition-colors"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
