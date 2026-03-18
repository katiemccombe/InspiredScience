import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, FlaskConical, Microscope, Cpu } from "lucide-react";
import Abbey from "..assets/Abbey.png";
import John from "../assets/John.png";
import Sam from "../assets/Sam.png";
import Katie from "../assets/Katie.png";
import Abinaci from "../assets/Abinaci.png";

const disciplines = [
  {
    icon: Heart,
    title: "Katie",
    description: "bio",
  },
  {
    icon: FlaskConical,
    title: "Abinaci",
    description: "bio",
  },
  {
    icon: Microscope,
    title: "John",
    description: "bio",
  },
  {
    icon: Cpu,
    title: "Abbey",
    description: "bio",
  },
  {
    icon: Cpu,
    title: "Sam",
    description: "bio",
  }
];

const DisciplinesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-section-alt" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm uppercase tracking-[0.2em] text-primary mb-4">Introduction</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Meet the Team!
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {disciplines.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <d.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">{d.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{d.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisciplinesSection;
