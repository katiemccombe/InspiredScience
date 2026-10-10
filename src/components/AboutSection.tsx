import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Abbey from "../assets/Headshots/Abbey.jpg";
import Abi from "../assets/Headshots/Abi.jpg";
import Claire from "../assets/Headshots/Claire.jpeg";
import Dillon from "../assets/Headshots/Dillon.jpeg";
import Jessica from "../assets/Headshots/Jessica.jpeg";
import John from "../assets/Headshots/John.jpg";
import Katie from "../assets/Headshots/Katie.jpg";
import groupPhoto from "../assets/Group.jpg";
import groupWorkshopPhoto from "../assets/Group2.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const aboutParagraphs = [
  "InspirED Science Outreach is a graduate student-led initiative that delivers hands-on STEM workshops for students in Grades 9-12, with a focus on underserved, rural, and Indigenous communities. Our goal is to reduce barriers to science education by bringing interactive, laboratory-based experiences to students who may not otherwise have access to them. Our workshops allow students to learn about a wide variety of topics, such as DNA analysis using PCR, enzymatic reaction experiments, and exercise physiology demonstrations; these experiences help students gain practical skills and encourage them to consider future careers in STEM."
];

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

const presidents: TeamMember[] = [
  {
    name: "Katie",
    role: "Cofounder",
    image: Katie,
    bio: "Katie earned an Honours BSc in Interdisciplinary Medical Sciences at Western University and is currently pursuing an MESc in Biomedical Engineering. Her research focuses on developing and testing a virtual reality simulation of Victoria Hospital in London, Ontario, designed to help pediatric patients manage prehospital anxiety through familiarization. Katie enjoys snowboarding and participating in triathlons. Growing up in a small town in the Ottawa Valley, she experienced firsthand how programs like InspirED could bring classroom learning to life. She is passionate about giving back to her community and sharing her love for science and technology with students in similar situations."
  },
  {
    name: "John",
    role: "Cofounder",
    image: John,
    bio: "John earned an Honours BSc in Interdisciplinary Medical Sciences at Western University and is currently pursuing an MSc in Physiology and Pharmacology. His research focuses on kidney injury and transplantation. He loves hockey, soccer, and the gym. John joined InspirED Science in hopes to provide access to STEM workshops that he never had."
  },
  {
    name: "Abinaci",
    role: "Cofounder",
    image: Abi,
    bio: "Abinaci earned an Honours BSc in Interdisciplinary Medical Sciences with a Minor in Medical Cell Biology at Western University and is currently pursuing an MSc in Physiology and Pharmacology. Her research focuses on identifying predictive markers for patients who develop acute kidney injury after cisplatin chemotherapy treatment. She enjoys playing volleyball and basketball, and she is passionate about making science accessible to broader audiences, seeing InspirED Science as a way to share complex scientific concepts with the public."
  },
  {
    name: "Abbey",
    role: "Cofounder",
    image: Abbey,
    bio: "Abbey earned an Honours BSc in Interdisciplinary Medical Sciences at Western University and is currently pursuing a PhD in Physiology and Pharmacology, where her research focuses on how certain cells in the intestine detect nutrients from food and chemical signals produced by the bacteria living in our gut, using mini-gut models called organoids. She loves hiking and pilates. Abbey joined InspirED Science because doing experiments in high school was one of her favourite parts of science class, and inspired her to pursue science in higher education. She realized that not all students have the same opportunities that she did, so she'd love to help bring hands-on experiments to schools that may not otherwise have access to them."
  }
];

const vicePresidents: TeamMember[] = [
  {
    name: "Claire",
    role: "VP of Graphic Design",
    image: Claire,
    bio: "Claire earned an Honours BSc in Biochemistry and Medical Biophysics and an MSc in Biochemistry at Western University, where her research focused on enhancing current CRISPR-Cas9/gene editing technology. She is currently pursuing an advanced degree in Medical Radiation Technology at Fanshawe. In her free time, she enjoys playing golf, going to the gym, and crocheting. Claire joined InspirED Science as a way to share her passion for science and learning."
  },
  {
    name: "Jessica",
    role: "VP of Academics",
    image: Jessica,
    bio: "Jessica earned her BSc in Pharmacy from the University of Ghana. She is currently pursuing a PhD in Physiology and Pharmacology at Western University. Her research focuses on characterizing the function of the protein translation factor, EEF1A1, in regulating energy metabolism and the implications for metabolic disease associated with lipid accumulation. Jessica loves playing basketball and watching movies and TV shows. She chose to be a part of InspirED Science because she had the opportunity to mentor high school students and has seen firsthand how access to science and education shapes students' confidence and provides new knowledge on diverse opportunities and career options."
  },
  {
    name: "Dillon",
    role: "VP of Outreach",
    image: Dillon,
    bio: "Dillon is a third-year Health Sciences student at Western University. He has held multiple student outreach positions, working with organizations of every size, from large national brands to small local ones. He boxes, meditates, and trains at the gym. Dillon joined InspirED Science because the hands-on labs the team builds are exactly the thing he would have loved to have in his own high school years. He believes discovery is what makes science exciting, and he wants students across every education system to have that access."
  }
];

const TeamCard = ({ member, index, inView }: { member: TeamMember; index: number; inView: boolean }) => (
  <motion.article
    variants={fadeInUp}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    transition={{ delay: 0.1 * (index + 1) }}
    className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow flex flex-col items-center overflow-hidden"
  >
    <p className="inline-flex items-center justify-center rounded-full border border-primary/15 bg-primary/5 px-3 py-1 font-display text-[10px] uppercase tracking-[0.18em] text-primary mb-3 text-center leading-none">
      {member.role}
    </p>
    <h3 className="font-display font-bold text-2xl text-foreground mb-4 text-center">{member.name}</h3>
    <img
      src={member.image}
      alt={`${member.name} photo`}
      className="w-36 h-36 aspect-square rounded-xl object-cover border border-border shadow-md mb-6"
    />
    <p className="font-body text-muted-foreground leading-7 text-left break-words whitespace-pre-line">{member.bio}</p>
  </motion.article>
);

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
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">Meet the Team</h2>
          </div>

          <section className="mb-16" aria-labelledby="presidents-heading">
            <h3 id="presidents-heading" className="font-display font-bold text-2xl md:text-3xl text-foreground text-center mb-8">Presidents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {presidents.map((member, index) => (
                <TeamCard key={member.name} member={member} index={index} inView={inView} />
              ))}
            </div>
          </section>

          <section aria-labelledby="vice-presidents-heading">
            <h3 id="vice-presidents-heading" className="font-display font-bold text-2xl md:text-3xl text-foreground text-center mb-8">Vice Presidents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {vicePresidents.map((member, index) => (
                <TeamCard key={member.name} member={member} index={index} inView={inView} />
              ))}
            </div>
          </section>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
