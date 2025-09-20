import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";

const EducationCard = () => {
  const educationData = [
    {
      title: "Bachelor in Automation and Robotics",
      institution: "Western Norway University of Applied Sciences",
      period: "2020 - 2023",
      location: "Bergen, Norway",
      description:
        "Comprehensive study of automation systems, robotics, and industrial control systems with focus on practical applications.",
      achievements: [
        "Graduated with Honors",
        "Final Project: Industrial Automation System",
        "GPA: 3.8/4.0",
      ],
      skills: [
        "PLC Programming",
        "SCADA Systems",
        "Industrial Robotics",
        "Control Systems",
        "HMI Development",
      ],
      type: "degree",
    },
    {
      title: "Java Backend Developer Certificate",
      institution: "Hyperskill",
      period: "2024",
      location: "Online",
      description:
        "Intensive program covering advanced Java concepts, Spring Framework, and backend development best practices.",
      achievements: [
        "Completed 15+ Projects",
        "Advanced Spring Boot",
        "Microservices Architecture",
      ],
      skills: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "Microservices",
        "Database Design",
      ],
      type: "certificate",
    },
    {
      title: "Three.js Developer Certificate",
      institution: "Three.js Journey",
      period: "2025",
      location: "Online",
      description:
        "Mastery of 3D web development using Three.js, WebGL, and modern 3D graphics programming.",
      achievements: ["3D Portfolio Project", "WebGL Shaders", "3D Animation"],
      skills: ["Three.js", "WebGL", "3D Graphics", "Shaders", "Animation"],
      type: "certificate",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="space-y-8">
        {educationData.map((education, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.01 }}
            className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300 group"
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-3 rounded-lg ${
                      education.type === "degree"
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                        : "bg-gradient-to-r from-purple-500 to-pink-500"
                    }`}
                  >
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {education.title}
                    </h3>
                    <p className="text-purple-400 font-medium mb-1">
                      {education.institution}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{education.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{education.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    education.type === "degree"
                      ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                      : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  }`}
                >
                  {education.type === "degree" ? "Degree" : "Certificate"}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {education.description}
              </p>

              {/* Achievements */}
              <div>
                <h4 className="text-sm font-semibold text-purple-400 mb-3 flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Key Achievements
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {education.achievements.map(
                    (achievement, achievementIndex) => (
                      <motion.div
                        key={achievementIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.1 + achievementIndex * 0.05,
                          duration: 0.3,
                        }}
                        className="flex items-center space-x-2 p-2 bg-slate-800/30 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-300">
                          {achievement}
                        </span>
                      </motion.div>
                    )
                  )}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-sm font-semibold text-purple-400 mb-3">
                  Skills Gained
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: index * 0.1 + skillIndex * 0.05,
                        duration: 0.3,
                      }}
                      className="px-3 py-1 bg-slate-600/50 rounded-full text-sm text-gray-300 border border-slate-500 hover:border-purple-500/50 hover:text-purple-300 transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EducationCard;
