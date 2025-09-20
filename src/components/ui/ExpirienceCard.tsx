import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceCard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const experienceDetails = [
    {
      yearRange: "2020 - 2024",
      role: "Bachelor in Computer Science",
      description:
        "Studied computer science with a focus on software development and data structures.",
      skills: [
        "Java",
        "Algorithms",
        "Database Management",
        "Software Engineering",
      ],
      additionalInfo:
        "Graduated with honors. Participated in open-source projects.",
    },
    {
      yearRange: "2019 - 2020",
      role: "Frontend Developer Intern",
      description: "Worked on the frontend for a client-facing application.",
      skills: ["React.js", "CSS", "HTML", "Git"],
      additionalInfo:
        "Developed responsive UI components and optimized app performance.",
    },
    // Add more experiences as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-left w-full md:w-3/4 relative"
    >
      <Card className="bg-blue-950 border-blue-700 shadow-lg">
        <CardContent className="p-6">
          <div className="flex space-x-4 mb-4">
            {experienceDetails.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`px-4 py-2 rounded-t-lg transition-all ${
                  activeTab === index
                    ? "bg-blue-600 text-white"
                    : "bg-blue-800 text-gray-300"
                }`}
              >
                {experienceDetails[index].yearRange}
              </button>
            ))}
          </div>

          <div>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-200 mb-2">
                {experienceDetails[activeTab].role}
              </h3>
              <p className="text-gray-400 mb-4">
                {experienceDetails[activeTab].description}
              </p>

              <h4 className="text-lg font-bold text-blue-300 mb-2">Skills:</h4>
              <ul className="list-disc pl-5 text-gray-400 mb-4">
                {experienceDetails[activeTab].skills.map((skill, i) => (
                  <li key={i} className="text-lg">
                    {skill}
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-bold text-blue-300 mb-2">
                Additional Info:
              </h4>
              <p className="text-gray-400">
                {experienceDetails[activeTab].additionalInfo}
              </p>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard;
