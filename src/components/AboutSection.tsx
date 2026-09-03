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
          <p className="font-display text-sm uppercase tracking-[0.2em] text-primary mb-4">Our Story</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
            What is InspirED Science?
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {[
            "InspirED Science is a graduate student-led initiative dedicated to making science more engaging, accessible, and meaningful within South-Western Ontario communities. Founded by students passionate about education and outreach, InspirED Science is intended to support educators and inspire students through hands-on, interactive STEM experiences.",
"Reflecting on our own journeys into the world of science, we recognize how inspiring it can be while still being inaccessible to most. While science classrooms are full of potential, there is often limited time and resources to bring complex concepts to life. InspirED Science works alongside teachers and schools to deliver engaging workshops and demonstrations that complement existing curricula while sparking deeper curiosity and understanding.",
"Our team was formed through a shared commitment to experiential learning and as students ourselves, we understand the impact of hands-on discovery, and the difference it makes when science feels relevant, exciting, and approachable. This perspective drives everything we do.",
"Our goal is to empower students to see themselves as capable scientists and critical thinkers, while supporting educators with meaningful, curriculum-aligned programming."
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
