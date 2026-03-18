import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BrainCog, FlaskConical, Microscope, Cpu, Atom } from "lucide-react";
import Abbey from "../assets/Abbey.png";
import John from "../assets/John.png";
import Sam from "../assets/Sam.png";
import Katie from "../assets/Katie.png";
import Abinaci from "../assets/Abinaci.png";

const disciplines = [
  {
    icon: BrainCog,
    title: "Katie",
    description: "lalala lala llala lala lala lala lalalalala lalalalalala lalalalalala lallal ala lal allal alallalal alala lal alala lalala lalala lalalala lalalal lalla lalalla la lalalal alall l alalalala lalalala lala lalalala",
    photo: Katie,
  },
  {
    icon: FlaskConical,
    title: "Abinaci",
    description: "bio",
    photo: Abinaci,
  },
  {
    icon: Microscope,
    title: "John",
    description: "bio",
    photo: John,
  },
  {
    icon: Cpu,
    title: "Abbey",
    description: "bio",
    photo: Abbey,
  },
  {
    icon: Atom,
    title: "Sam",
    description: "bio",
    photo: Sam,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {disciplines.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-white rounded-2xl p-10 shadow-lg border border-border hover:shadow-xl transition-shadow flex flex-col items-center overflow-hidden h-auto min-h-[340px]"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <d.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4 text-center">{d.title}</h3>
              <div className="w-full flex flex-col md:flex-row items-start">
                <div className="overflow-hidden">
                  <img
                    src={d.photo}
                    alt={d.title + " photo"}
                    className="w-36 h-36 aspect-square rounded-xl object-cover border border-border shadow-md mb-2 md:mb-0 md:mr-4 md:float-left"
                    style={{ background: '#fff' }}
                  />
                  <p className="font-body text-muted-foreground leading-relaxed text-justify break-words whitespace-pre-line">
                  {d.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisciplinesSection;
