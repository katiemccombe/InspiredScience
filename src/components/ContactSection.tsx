import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-section-alt" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm uppercase tracking-[0.2em] text-primary mb-4">For Interested Educators and Students</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Bring InspirED to Your School
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Are you interested in planning a workshop for your school? Fill out the form below and we’ll be in touch.!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          action="https://formspree.io/f/mreyojoa"
          method="POST"
          className="max-w-lg mx-auto space-y-5"
        >
          <div>
            <label className="block font-display text-sm font-semibold text-foreground mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
            />
          </div>
          <div>
            <label className="block font-display text-sm font-semibold text-foreground mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
            />
          </div>
          <div>
            <label className="block font-display text-sm font-semibold text-foreground mb-2">School / Organization</label>
            <input
              type="text"
              name="school"
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
            />
          </div>
          <div>
            <label className="block font-display text-sm font-semibold text-foreground mb-2">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 rounded-lg font-display font-bold text-white shadow-lg transition-transform hover:scale-[1.02]"
            style={{ background: '#ff9d00' }}
          >
            Request a Workshop
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;