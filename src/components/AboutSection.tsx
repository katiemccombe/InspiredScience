import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BrainCog, FlaskConical, Microscope, Cpu, Atom } from "lucide-react";
import Abbey from "../assets/Headshots/Abbey.jpg";
import Abi from "../assets/Headshots/Abi.jpg";
import Claire from "../assets/Headshots/Claire.jpeg";
import Dillon from "../assets/Headshots/Dillon.jpeg";
import Jessica from "../assets/Headshots/Jessica.jpeg";
import John from "../assets/Headshots/John.jpg";
import Katie from "../assets/Headshots/Katie.jpg";
import Sam from "../assets/Sam.jpg";
import groupPhoto from "../assets/Group.jpg";
import groupWorkshopPhoto from "../assets/Group2.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const aboutParagraphs = [
  "InspirED Science is a graduate student-led initiative dedicated to making science more engaging, accessible, and meaningful within South-Western Ontario communities. Founded by students passionate about education and outreach, InspirED Science is intended to support educators and inspire students through hands-on, interactive STEM experiences.",
  "Reflecting on our own journeys into the world of science, we recognize how inspiring it can be while still being inaccessible to most. While science classrooms are full of potential, there is often limited time and resources to bring complex concepts to life. InspirED Science works alongside teachers and schools to deliver engaging workshops and demonstrations that complement existing curricula while sparking deeper curiosity and understanding.",
  "Our team was formed through a shared commitment to experiential learning and as students ourselves, we understand the impact of hands-on discovery, and the difference it makes when science feels relevant, exciting, and approachable. This perspective drives everything we do.",
  "Our goal is to empower students to see themselves as capable scientists and critical thinkers, while supporting educators with meaningful, curriculum-aligned programming."
];

const cofounders = [
  {
    icon: BrainCog,
    name: "Katie",
    role: "Co-Founder",
    image: Katie,
    bio: "Katie earned an Honours BSc in Interdisciplinary Medical Sciences at Western University and is currently pursuing an MESc in Biomedical Engineering. Her research focuses on developing and testing a virtual reality simulation of Victoria Hospital in London, Ontario, designed to help pediatric patients manage prehospital anxiety through familiarization. Katie enjoys snowboarding and participating in triathlons. Growing up in a small town in the Ottawa Valley, she experienced firsthand how programs like InspirED could bring classroom learning to life. She is passionate about giving back to her community and sharing her love for science and technology with students in similar situations."
  },
  {
    icon: FlaskConical,
    name: "Abinaci",
    role: "Co-Founder",
    image: Abi,
    bio: "Abinaci earned an Honours BSc in Interdisciplinary Medical Sciences with a Minor in Medical Cell Biology at Western University and is currently pursuing an MSc in Physiology and Pharmacology. Her research focuses on identifying predictive markers for patients who develop acute kidney injury after cisplatin chemotherapy treatment. She enjoys playing volleyball and basketball, and she is passionate about making science accessible to broader audiences, seeing InspirED Science as a way to share complex scientific concepts with the public."
  },
  {
    icon: Microscope,
    name: "John",
    role: "Co-Founder",
    image: John,
    bio: "John earned an Honours BSc in Interdisciplinary Medical Sciences at Western University and is currently pursuing an MSc in Physiology and Pharmacology. His research focuses on kidney injury and transplantation. He loves hockey, soccer, and the gym. John joined InspirED Science in hopes to provide access to STEM workshops that he never had."
  },
  {
    icon: Cpu,
    name: "Abbey",
    role: "Co-Founder",
    image: Abbey,
    bio: "Abbey earned an Honours BSc in Interdisciplinary Medical Sciences at Western University and is currently pursuing a PhD in Physiology and Pharmacology, where her research focuses on how certain cells in the intestine detect nutrients from food and chemical signals produced by the bacteria living in our gut, using mini-gut models called organoids. She loves hiking and pilates. Abbey joined InspirED Science because doing experiments in high school was one of her favourite parts of science class, and inspired her to pursue science in higher education. She realized that not all students have the same opportunities that she did, so she'd love to help bring hands-on experiments to schools that may not otherwise have access to them."
  },
  {
    icon: Atom,
    name: "Sam",
    role: "Co-Founder",
    image: Sam,
    bio: "Sam earned an Honours BSc in Interdisciplinary Medical Sciences at Western University and is currently pursuing a PhD in Pathology and Laboratory Medicine, where his research focuses on cannabis use during pregnancy and the risk of diabetes in children. He enjoys skiing and running, and he believes that accessible education is important. As a lay writer for science communication, Sam sees InspirED Science as an opportunity to bring the complexities of science to a wider audience."
  }
];

const vps = [
  {
    icon: BrainCog,
    name: "Claire",
    role: "VP of Graphic Design",
    image: Claire,
    bio: "Claire earned an Honours BSc in Biochemistry and Medical Biophysics and an MSc in Biochemistry at Western University, where her research focused on enhancing current CRISPR-Cas9/gene editing technology. She is currently pursuing an advanced degree in Medical Radiation Technology at Fanshawe. In her free time, she enjoys playing golf, going to the gym, and crocheting. Claire joined InspirED Science as a way to share her passion for science and learning."
  },
  {
    icon: FlaskConical,
    name: "Jessica",
    role: "VP of Academics",
    image: Jessica,
    bio: "Jessica earned her BSc in Pharmacy from the University of Ghana. She is currently pursuing a PhD in Physiology and Pharmacology at Western University. Her research focuses on characterizing the function of the protein translation factor, EEF1A1, in regulating energy metabolism and the implications for metabolic disease associated with lipid accumulation. Jessica loves playing basketball and watching movies and TV shows. She chose to be a part of InspirED Science because she had the opportunity to mentor high school students and has seen firsthand how access to science and education shapes students' confidence and provides new knowledge on diverse opportunities and career options."
  },
  {
    icon: Microscope,
    name: "Dillon",
    role: "VP of Outreach",
    image: Dillon,
    bio: "Dillon is a third-year Health Sciences student at Western University. He has held multiple student outreach positions, working with organizations of every size, from large national brands to small local ones. He boxes, meditates, and trains at the gym. Dillon joined InspirED Science because the hands-on labs the team builds are exactly the thing he would have loved to have in his own high school years. He believes discovery is what makes science exciting, and he wants students across every education system to have that access."
  }
];

const TeamCard = ({ member, index, inView }: { member: { icon: any; name: string; role: string; image: string; bio: string }; index: number; inView: boolean }) => {
  const Icon = member.icon;

  return (
    <motion.article
      key={member.name}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: 0.1 * (index + 1) }}
      className="bg-white rounded-2xl p-10 shadow-lg border border-border hover:shadow-xl transition-shadow flex flex-col items-center overflow-hidden h-auto min-h-[340px]"
    >
      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="font-display font-bold text-2xl text-foreground mb-2 text-center">{member.name}</h3>
      <p className="font-display text-xs uppercase tracking-[0.16em] text-primary mb-4 text-center">{member.role}</p>
      <div className="w-full flex flex-col items-center">
        <img
          src={member.image}
          alt={`${member.name} photo`}
          className="w-36 h-36 aspect-square rounded-xl object-cover border border-border shadow-md mb-6"
          style={{ background: '#fff' }}
        />
        <p className="font-body text-muted-foreground leading-7 text-left break-words whitespace-pre-line">{member.bio}</p>
      </div>
    </motion.article>
  );
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

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto mt-24"
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-display text-sm uppercase tracking-[0.2em] text-primary mb-4">Introduction</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              Meet the Team
            </h2>
          </div>

          <div className="mb-16">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground text-center mb-8">Cofounders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {cofounders.map((member, index) => (
                <TeamCard key={member.name} member={member} index={index} inView={inView} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground text-center mb-8">VPs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {vps.map((member, index) => (
                <TeamCard key={member.name} member={member} index={index} inView={inView} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
