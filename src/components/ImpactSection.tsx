import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, School, Lightbulb } from "lucide-react";

const ImpactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm uppercase tracking-[0.2em] text-secondary mb-4">Why It Matters</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            The Impact of Hands-On Science
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {[
            {
              icon: Users,
              title: "Community Connections",
              text: "We work with educators and mentors at Western University and local high schools to reach students who may not otherwise encounter STEM.",
            },
            {
              icon: Lightbulb,
              title: "First-Time Experiences",
              text: "Many students have never used laboratory equipment before. Our workshops give them meaningful, memorable first encounters with real science.",
            },
            {
              icon: School,
              title: "Teacher Support",
              text: "Teachers and school staff have been incredibly supportive, helping us connect with students and explore opportunities to bring workshops into their schools.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">{item.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
