import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="font-display text-sm uppercase tracking-[0.2em] text-secondary mb-4">Our Story</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
            From Undergraduate Friends to Graduate Mentors
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {[
            "Our group was formed by graduate students who share a passion for STEM and community outreach. We first met during our undergraduate studies and stayed connected as we continued into graduate programs in fields such as Physiology, Pharmacology, Pathology, and Biomedical Engineering.",
            "Through our own experiences, we realized that many students do not have opportunities to participate in hands-on science or to meet people working in STEM. This inspired us to create InspirED Science Outreach to help make science more accessible to young students.",
            "We are connected to our community through relationships with educators and mentors at Western University and local high schools in London, Ontario and nearby communities. Through these connections, we have shared our experiences with students and introduced basic laboratory concepts and demonstrations.",
          ].map((text, i) => (
            <motion.p
              key={i}
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.15 * (i + 1) }}
              className="font-body text-lg leading-relaxed text-muted-foreground"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
