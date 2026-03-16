import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", school: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch soon.");
    setFormData({ name: "", email: "", school: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-section-alt" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm uppercase tracking-[0.2em] text-secondary mb-4">For Educators</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Bring InspirED to Your School
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Interested in hosting a workshop? Fill out the form below and we'll work with you to plan an engaging experience for your students.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-5"
        >
          {[
            { label: "Your Name", key: "name" as const, type: "text" },
            { label: "Email Address", key: "email" as const, type: "email" },
            { label: "School / Organization", key: "school" as const, type: "text" },
          ].map((field) => (
            <div key={field.key}>
              <label className="block font-display text-sm font-semibold text-foreground mb-2">{field.label}</label>
              <input
                type={field.type}
                required
                value={formData[field.key]}
                onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
              />
            </div>
          ))}
          <div>
            <label className="block font-display text-sm font-semibold text-foreground mb-2">Message</label>
            <textarea
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 rounded-lg font-display font-bold text-accent-foreground transition-transform hover:scale-[1.02]"
            style={{ background: "var(--gradient-cta)" }}
          >
            Request a Workshop
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
