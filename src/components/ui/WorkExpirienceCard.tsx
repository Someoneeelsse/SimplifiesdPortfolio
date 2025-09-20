import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Award } from "lucide-react";
import { RelevantWorkExpirienceDetails } from "@/lib/utils";

const WorkExpirienceCard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {RelevantWorkExpirienceDetails.map((experience, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleTabClick(index)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              activeTab === index
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                : "bg-slate-700/50 text-gray-300 hover:bg-slate-700 hover:text-white"
            }`}
          >
            <span className="text-sm font-medium">{experience.yearRange}</span>
          </motion.button>
        ))}
      </div>

      {/* Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50"
      >
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {RelevantWorkExpirienceDetails[activeTab].role}
            </h3>
            <div className="flex items-center space-x-4 text-gray-400">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">
                  {RelevantWorkExpirienceDetails[activeTab].yearRange}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed">
            {RelevantWorkExpirienceDetails[activeTab].description}
          </p>

          {/* Skills */}
          <div>
            <h4 className="text-lg font-semibold text-purple-400 mb-3 flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Key Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {RelevantWorkExpirienceDetails[activeTab].skills.map(
                (skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    className="px-3 py-1 bg-slate-600/50 rounded-full text-sm text-gray-300 border border-slate-500"
                  >
                    {skill}
                  </motion.span>
                )
              )}
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-600/30">
            <h4 className="text-sm font-semibold text-purple-400 mb-2">
              Additional Information
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              {RelevantWorkExpirienceDetails[activeTab].additionalInfo}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WorkExpirienceCard;
