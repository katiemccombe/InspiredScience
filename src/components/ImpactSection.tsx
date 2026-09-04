import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, School, Lightbulb, Bird, BicepsFlexed, TestTube } from "lucide-react";
import circuitPhoto from "../assets/Circuit.jpeg";
import enzymePhoto from "../assets/Enzyme.jpg";
import pcrPhoto from "../assets/PCR.jpg";

const ImpactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="impact" className="py-24 md:py-32 bg-gradient-to-br from-primary/10 via-yellow-100 to-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm uppercase tracking-[0.2em] text-primary mb-4">Lab Skills and Concepts Students Can Apply</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-2">
            Current Workshops
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            We offer three core workshops for high school students, each designed for one class and built for hands-on participation. Sessions focus on physiology and give students experience with laboratory techniques such as pipetting, aseptic technique, and gel electrophoresis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Early Bird or Night Owl Workshop */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/90 rounded-2xl shadow-lg border border-primary/20 text-center p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 via-yellow-100 to-white flex items-center justify-center mb-6 shadow-md">
              <Bird className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display font-bold text-xl text-primary mb-3">Early Bird or Night Owl</h3>
            <img src={pcrPhoto} alt="Early Bird or Night Owl workshop" className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="font-body text-muted-foreground leading-relaxed text-left">
              Students extract their own DNA and use PCR to analyze a gene linked to circadian rhythm. By examining their results, they explore whether their genetic profile aligns with their natural sleep preferences. This workshop introduces pipetting, PCR, and gel electrophoresis, and encourages critical thinking about genetics, environment, and the nature vs. nurture debate.
            </p>
          </motion.div>

          {/* Enzymes in Action Workshop */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/90 rounded-2xl shadow-lg border border-primary/20 text-center p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 via-yellow-100 to-white flex items-center justify-center mb-6 shadow-md">
              <TestTube className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display font-bold text-xl text-primary mb-3">Enzymes in Action</h3>
            <img src={enzymePhoto} alt="Enzymes in Action workshop" className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="font-body text-muted-foreground leading-relaxed text-left">
              Students investigate the function of catalase using liver, potatoes, and onions. By altering temperature and pH, they observe how enzyme activity changes and explore what happens when the body cannot maintain homeostasis. This experiment illustrates how protein structure is linked to function and why stable internal conditions are critical for survival.
            </p>
          </motion.div>

          {/* Circuit Training Workshop */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/90 rounded-2xl shadow-lg border border-primary/20 text-center p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 via-yellow-100 to-white flex items-center justify-center mb-6 shadow-md">
              <BicepsFlexed className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display font-bold text-xl text-primary mb-3">Circuit Training</h3>
            <img src={circuitPhoto} alt="Circuit Training workshop" className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="font-body text-muted-foreground leading-relaxed text-left">
              Students learn about muscle function and electrophysiology using EMG and safe electrical stimulation devices. They observe and record muscle activity, then apply gentle stimulation to trigger muscle contractions—even controlling a classmate’s movements! This interactive experience connects theory to real physiology in a fun, memorable way.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
