import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  { name: "Java Programming", icon: "/assets/icons/java.png" },
  { name: "Python Programming", icon: "/assets/icons/python.webp" },
  { name: "PHP Programming", icon: "/assets/icons/php.png" },
  { name: "HTML5", icon: "/assets/icons/html.png" },
  
  { name: "CSS", icon: "/assets/icons/css.png" },
  { name: ".NET Framework", icon: "/assets/icons/net.png" },
  { name: "JavaScript", icon: "/assets/icons/javascript.png" },
  { name: "React JS", icon: "/assets/icons/reactjs.png" },
  
];

const databases = [
  { name: "MySQL", icon: "/assets/icons/mysql.png" },
  { name: "MongoDB", icon: "/assets/icons/mongodb.png" },
  { name: "PostgreSQL", icon: "/assets/icons/postgresql.jpg" },
];

const tools = [

  { name: "Docker", icon: "/assets/icons/docker.jpg" },
  { name: "Visual Studio Code", icon: "/assets/icons/vscode.jpg" },
  { name: "XAMPP", icon: "/assets/icons/xamp.jpg" },
  { name: "GitHub", icon: "/assets/icons/github.jpg" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

{skills.map((skill) => (
  <div className="skill-card" key={skill.name}>
    <img src={skill.icon} alt={skill.name} />
    <span>{skill.name}</span>
  </div>
))}

function SkillGrid({ title, data }) {
  return (
    <>
      <motion.h3
        className="skills-subtitle"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>

      <motion.div
        className="skill-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {data.map((itemData) => (
          <motion.div
            key={itemData.name}
            className="skill-card"
            variants={item}
            whileHover={{ y: -8, scale: 1.05, rotate: 1 }}
          >
            <img src={itemData.icon} alt={itemData.name} />
            <span>{itemData.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default function Skills() {
  return (
    <section className="skills-section" id="skills"
    style={{ padding: "80px 20px", background: "#0e0602", color: "#f5eeee" }}
    >
      <div className="container">
        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
    textAlign: "center",
    color: "#ede7e7",
    fontSize: "36px",
    fontWeight: 700,
    marginBottom: "20px",
  }}
        >
          Professional Skills
        </motion.h2>

        <SkillGrid title="Programming & Frameworks" data={skills} />
        <SkillGrid title="Databases" data={databases} />
        <SkillGrid title="Tools & Platforms" data={tools} />
      </div>
    </section>
  );
}
