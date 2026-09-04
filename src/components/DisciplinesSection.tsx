import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BrainCog, FlaskConical, Microscope, Cpu, Atom } from "lucide-react";
import Abbey from "../assets/Abbey.jpg";
import John from "../assets/John.jpg";
import Sam from "../assets/Sam.jpg";
import Katie from "../assets/Katie.jpg";
import Abi from "../assets/Abi.jpg";

const disciplines = [
  {
    icon: BrainCog,
    title: "Katie",
    description: "Katie earned an Honours BSc in Interdisciplinary Medical Sciences at Western University and is currently pursuing an MESc in Biomedical Engineering. Her research focuses on developing and testing a virtual reality simulation of Victoria Hospital in London, Ontario, designed to help pediatric patients manage prehospital anxiety through familiarization. Katie enjoys snowboarding and participating in triathlons. Growing up in a small town in the Ottawa Valley, she experienced firsthand how programs like InspirED could bring classroom learning to life. She is passionate about giving back to her community and sharing her love for science and technology with students in similar situations.",
    photo: Katie,
  },
  {
    icon: FlaskConical,
    title: "Abinaci",
    description: "Abinaci earned an Honours BSc in Interdisciplinary Medical Sciences with a Minor in Medical Cell Biology at Western University and is currently pursuing an MSc in Physiology and Pharmacology. Her research focuses on identifying predictive markers for patients who develop acute kidney injury after cisplatin chemotherapy treatment. She enjoys playing volleyball and basketball, and she is passionate about making science accessible to broader audiences, seeing InspirED Science as a way to share complex scientific concepts with the public.",
    photo: Abi,
  },
  {
    icon: Microscope,
    title: "John",
    description: "John earned an Honours BSc in Interdisciplinary Medical Sciences at Western University and is currently pursuing an MSc in Physiology and Pharmacology. His research focuses on kidney injury and transplantation. He loves hockey, soccer, and the gym. John joined InspirED Science in hopes to provide access to STEM workshops that he never had.",
    photo: John,
  },
  {
    icon: Cpu,
    title: "Abbey",
    description: "Abbey earned an Honours BSc in Interdisciplinary Medical Sciences at Western University and is currently pursuing a PhD in Physiology and Pharmacology, where her research focuses on how certain cells in the intestine detect nutrients from food and chemical signals produced by the bacteria living in our gut, using mini-gut models called organoids. She loves hiking and pilates. Abbey joined InspirED Science because doing experiments in high school was one of her favourite parts of science class, and inspired her to pursue science in higher education. She realized that not all students have the same opportunities that she did, so she'd love to help bring hands-on experiments to schools that may not otherwise have access to them.",
    photo: Abbey,
  },
  {
    icon: Atom,
    title: "Sam",
    description: "Sam earned an Honours BSc in Interdisciplinary Medical Sciences at Western University and is currently pursuing a PhD in Pathology and Laboratory Medicine, where his research focuses on cannabis use during pregnancy and the risk of diabetes in children. He enjoys skiing and running, and he believes that accessible education is important. As a lay writer for science communication, Sam sees InspirED Science as an opportunity to bring the complexities of science to a wider audience.",
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
              <div className="w-full flex flex-col items-center">
                <img
                  src={d.photo}
                  alt={d.title + " photo"}
                  className="w-36 h-36 aspect-square rounded-xl object-cover border border-border shadow-md mb-6"
                  style={{ background: '#fff' }}
                />
                <p className="font-body text-muted-foreground leading-7 text-left break-words whitespace-pre-line">
                  {d.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisciplinesSection;
