import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import clairePhoto from "../assets/Headshots/Claire.jpeg";
import dillonPhoto from "../assets/Headshots/Dillon.jpeg";
import jessicaPhoto from "../assets/Headshots/Jessica.jpeg";
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

const vps = [
  {
    name: "Claire",
    role: "VP of Graphic Design",
    image: clairePhoto,
    bio: "Claire earned an Honours BSc in Biochemistry and Medical Biophysics and an MSc in Biochemistry at Western University, where her research focused on enhancing current CRISPR-Cas9/gene editing technology. She is currently pursuing an advanced degree in Medical Radiation Technology at Fanshawe. In her free time, she enjoys playing golf, going to the gym, and crocheting. Claire joined InspirED Science as a way to share her passion for science and learning."
  },
  {
    name: "JT (Jessica)",
    role: "VP of Academics",
    image: jessicaPhoto,
    bio: "Jessica earned her BSc in Pharmacy from the University of Ghana. She is currently pursuing a PhD in Physiology and Pharmacology at Western University. Her research focuses on characterizing the function of the protein translation factor, EEF1A1, in regulating energy metabolism and the implications for metabolic disease associated with lipid accumulation. Jessica loves playing basketball and watching movies and TV shows. She chose to be a part of InspirED Science because she had the opportunity to mentor high school students and has seen firsthand how access to science and education shapes students' confidence and provides new knowledge on diverse opportunities and career options."
  },
  {
    name: "Dillon Jung",
    role: "VP of Outreach",
    image: dillonPhoto,
    bio: "Dillon Jung is a third-year Health Sciences student at Western University. He has held multiple student outreach positions, working with organizations of every size, from large national brands to small local ones. He boxes, meditates, and trains at the gym. Dillon joined InspirED Science because the hands-on labs the team builds are exactly the thing he would have loved to have in his own high school years. He believes discovery is what makes science exciting, and he wants students across every education system to have that access."
  }
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

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto mt-24"
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-display text-sm uppercase tracking-[0.2em] text-primary mb-4">Leadership</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              Meet Our VPs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vps.map((vp, i) => (
              <motion.article
                key={vp.name}
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: 0.15 * (i + 1) }}
                className="rounded-2xl border border-border bg-card/60 p-6 shadow-sm"
              >
                <img
                  src={vp.image}
                  alt={`${vp.name} headshot`}
                  className="h-28 w-28 rounded-full object-cover border-2 border-primary/20 shadow-sm mx-auto"
                />
                <span className="mt-5 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-primary">
                  {vp.role}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold text-foreground">{vp.name}</h3>
                <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">{vp.bio}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
