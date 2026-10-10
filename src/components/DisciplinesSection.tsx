import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BrainCog, FlaskConical, Microscope, Cpu, Atom } from "lucide-react";
import Abbey from "../assets/Headshots/Abbey.jpg";
import John from "../assets/Headshots/John.jpg";
import Sam from "../assets/Sam.jpg";
import Katie from "../assets/Headshots/Katie.jpg";
import Abi from "../assets/Headshots/Abi.jpg";
import Claire from "../assets/Headshots/Claire.jpeg";
import Jessica from "../assets/Headshots/Jessica.jpeg";
import Dillon from "../assets/Headshots/Dillon.jpeg";

const disciplines = [
  {
    icon: BrainCog,
    title: "Katie",
    role: "Co-Founder",
    description: "Katie earned an Honours BSc in Interdisciplinary Medical Sciences at Western University and is currently pursuing an MESc in Biomedical Engineering. Her research focuses on developing and testing a virtual reality simulation of Victoria Hospital in London, Ontario, designed to help pediatric patients manage prehospital anxiety through familiarization. Katie enjoys snowboarding and participating in triathlons. Growing up in a small town in the Ottawa Valley, she experienced firsthand how programs like InspirED could bring classroom learning to life. She is passionate about giving back to her community and sharing her love for science and technology with students in similar situations.",
    photo: Katie,
  },
  {
    icon: FlaskConical,
    title: "Abinaci",
    role: "Co-Founder",
    description: "Abinaci earned an Honours BSc in Interdisciplinary Medical Sciences with a Minor in Medical Cell Biology at Western University and is currently pursuing an MSc in Physiology and Pharmacology. Her research focuses on identifying predictive markers for patients who develop acute kidney injury after cisplatin chemotherapy treatment. She enjoys playing volleyball and basketball, and she is passionate about making science accessible to broader audiences, seeing InspirED Science as a way to share complex scientific concepts with the public.",
    photo: Abi,
  },
  {
    icon: Microscope,
    title: "John",
    role: "Co-Founder",
    description: "John earned an Honours BSc in Interdisciplinary Medical Sciences at Western University and is currently pursuing an MSc in Physiology and Pharmacology. His research focuses on kidney injury and transplantation. He loves hockey, soccer, and the gym. John joined InspirED Science in hopes to provide access to STEM workshops that he never had.",
    photo: John,
  },
  {
    icon: Cpu,
    title: "Abbey",
    role: "Co-Founder",
    description: "Abbey earned an Honours BSc in Interdisciplinary Medical Sciences at Western University and is currently pursuing a PhD in Physiology and Pharmacology, where her research focuses on how certain cells in the intestine detect nutrients from food and chemical signals produced by the bacteria living in our gut, using mini-gut models called organoids. She loves hiking and pilates. Abbey joined InspirED Science because doing experiments in high school was one of her favourite parts of science class, and inspired her to pursue science in higher education. She realized that not all students have the same opportunities that she did, so she'd love to help bring hands-on experiments to schools that may not otherwise have access to them.",
    photo: Abbey,
  },
  {
    icon: Atom,
    title: "Sam",
    role: "Co-Founder",
    description: "Sam earned an Honours BSc in Interdisciplinary Medical Sciences at Western University and is currently pursuing a PhD in Pathology and Laboratory Medicine, where his research focuses on cannabis use during pregnancy and the risk of diabetes in children. He enjoys skiing and running, and he believes that accessible education is important. As a lay writer for science communication, Sam sees InspirED Science as an opportunity to bring the complexities of science to a wider audience.",
    photo: Sam,
  },
  {
    icon: BrainCog,
    title: "Claire",
    role: "VP of Graphic Design",
    description: "Claire earned an Honours BSc in Biochemistry and Medical Biophysics and an MSc in Biochemistry at Western University, where her research focused on enhancing current CRISPR-Cas9/gene editing technology. She is currently pursuing an advanced degree in Medical Radiation Technology at Fanshawe. In her free time, she enjoys playing golf, going to the gym, and crocheting. Claire joined InspirED Science as a way to share her passion for science and learning.",
    photo: Claire,
  },
  {
    icon: FlaskConical,
    title: "Jessica",
    role: "VP of Academics",
    description: "Jessica earned her BSc in Pharmacy from the University of Ghana. She is currently pursuing a PhD in Physiology and Pharmacology at Western University. Her research focuses on characterizing the function of the protein translation factor, EEF1A1, in regulating energy metabolism and the implications for metabolic disease associated with lipid accumulation. Jessica loves playing basketball and watching movies and TV shows. She chose to be a part of InspirED Science because she had the opportunity to mentor high school students and has seen firsthand how access to science and education shapes students' confidence and provides new knowledge on diverse opportunities and career options.",
    photo: Jessica,
  },
  {
    icon: Microscope,
    title: "Dillon",
    role: "VP of Outreach",
    description: "Dillon is a third-year Health Sciences student at Western University. He has held multiple student outreach positions, working with organizations of every size, from large national brands to small local ones. He boxes, meditates, and trains at the gym. Dillon joined InspirED Science because the hands-on labs the team builds are exactly the thing he would have loved to have in his own high school years. He believes discovery is what makes science exciting, and he wants students across every education system to have that access.",
    photo: Dillon,
  },
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
          <p className="font-display text-sm uppercase tracking-[0.2em] text-primary mb-4">Our People</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Meet the Team
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
              <p className="font-display text-xs uppercase tracking-[0.16em] text-primary mb-4 text-center">{d.role}</p>
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
