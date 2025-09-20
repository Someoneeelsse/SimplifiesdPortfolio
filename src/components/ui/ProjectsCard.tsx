import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";
import { sections } from "@/lib/utils";

const ProjectsCard = () => {
  const projects =
    sections.find((section) => section.title === "Projects")?.items || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300 group"
          >
            <div className="space-y-4">
              {/* Project Header */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-600/50 rounded-lg text-gray-400 hover:text-purple-400 hover:bg-slate-600 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>

              {/* Project Tags */}
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind"].map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.1 + tagIndex * 0.05,
                      duration: 0.3,
                    }}
                    className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md text-xs font-medium border border-purple-500/30"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Project Actions */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-4 text-gray-500 text-sm">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>2024</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors duration-200"
                >
                  <span className="text-sm font-medium">View Project</span>
                  <ExternalLink className="w-3 h-3" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
