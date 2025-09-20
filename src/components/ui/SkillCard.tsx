import { motion } from "framer-motion";
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Server,
} from "lucide-react";

const SkillCard = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "Java", "Python", "TypeScript"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frameworks & Libraries",
      icon: Monitor,
      skills: ["React", "Node.js", "Express", "Next.js"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "iOS", "Android"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "System Engineering",
      icon: Server,
      skills: ["Automation", "Robotics", "PLC", "SCADA"],
      color: "from-gray-500 to-slate-500",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300 group"
          >
            <div className="space-y-4">
              {/* Category Header */}
              <div className="flex items-center space-x-3">
                <div
                  className={`p-3 bg-gradient-to-r ${category.color} rounded-lg`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1 + skillIndex * 0.05,
                      duration: 0.3,
                    }}
                    className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-600/30 hover:border-purple-500/30 transition-colors duration-200"
                  >
                    <span className="text-gray-300 font-medium">{skill}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-xs text-purple-400 font-medium">
                        Expert
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-8 bg-slate-800/30 rounded-xl p-6 border border-slate-600/50"
      >
        <h3 className="text-xl font-bold text-white mb-4">Additional Skills</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Git",
            "Linux",
            "Agile",
            "Scrum",
            "JIRA",
            "Figma",
            "Photoshop",
            "AutoCAD",
          ].map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
              className="px-4 py-2 bg-slate-700/50 rounded-full text-gray-300 border border-slate-600 hover:border-purple-500/50 hover:text-purple-300 transition-colors duration-200"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
