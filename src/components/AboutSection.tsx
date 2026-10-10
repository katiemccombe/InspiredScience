import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import groupPhoto from "../assets/Group.jpg";
import groupWorkshopPhoto from "../assets/Group2.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const aboutParagraphs = [
  "InspirED Science Outreach is a graduate student-led initiative that delivers hands-on STEM workshops for students in Grades 9-12, with a focus on underserved, rural, and Indigenous communities. Our goal is to reduce barriers to science education by bringing interactive, laboratory-based experiences to students who may not otherwise have access to them. Our workshops allow students to learn about a wide variety of topics, such as DNA analysis using PCR, enzymatic reaction experiments, and exercise physiology demonstrations; these experiences help students gain practical skills and encourage them to consider future careers in STEM."
];

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

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          <img
            src={groupPhoto}
            alt="InspirED Science team together"
            className="w-full aspect-[3/2] object-cover rounded-2xl shadow-lg border border-border"
          />
          <img
            src={groupWorkshopPhoto}
            alt="InspirED Science team leading a workshop"
            className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg border border-border"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {aboutParagraphs.map((text, i) => (
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
