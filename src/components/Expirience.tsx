import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { sections } from "@/lib/utils";

const Portfolio = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <section className="bg-white py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Jakub Grzybowski
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-6 sm:mb-8">
              System Engineer & Software Developer
            </p>

            <p className="text-lg sm:text-xl text-gray-500 max-w-3xl mb-8 sm:mb-10 leading-relaxed">
              Just a guy who loves clicking buttons on his keyboard. My
              expertises: <b>web development, automation, data analysis.</b>
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8 sm:mb-10">
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="text-base sm:text-lg">Bergen, Norway</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-base sm:text-lg">+47 405 75 491</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="mailto:someoneelsses@gmail.com"
                className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Mail className="w-5 h-5 text-gray-600" />
              </a>
              <a
                href="https://github.com/Someoneeelsse"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Github className="w-5 h-5 text-gray-600" />
              </a>
              <a
                href="https://linkedin.com/in/jakub-grzybowski-a945a7384"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-gray-50 py-12 sm:py-16 mt-[-70px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {sections.map((section) => (
            <div key={section.title} className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 px-2">
                {section.title}
              </h2>

              <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 lg:p-8">
                {section.title === "Relevant Work Experience" && (
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-4 sm:pl-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        System Engineer at Nordomatic
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-2">
                        08.2023 - 11.2024
                      </p>
                      <p className="text-sm sm:text-base text-gray-700">
                        Develop and mantain automation systems, build software
                        tools, to automate data collection and analysis.
                        Automate workflows in Java.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4 sm:pl-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        System Engineer at Bergen Byggautomasjon
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-2">
                        01.2025 - Present
                      </p>
                      <p className="text-sm sm:text-base text-gray-700">
                        Systematically build and maintain data analysis tools,
                        mantain industrial automation systems. Create system
                        interfaces in Java and Javascript. Build various Data
                        analytics generators in Python.
                      </p>
                    </div>
                  </div>
                )}

                {section.title === "Education" && (
                  <div className="space-y-6">
                    <div className="border-l-4 border-green-500 pl-4 sm:pl-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        Bachelor in Automation and Robotics
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-2">
                        Western Norway University of Applied Sciences • 2020 -
                        2023
                      </p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4 sm:pl-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        Java Backend Developer Certificate
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-2">
                        Hyperskill • 2024
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4 sm:pl-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        Three.js Developer Certificate
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-2">
                        Threejs-Journey • 2025
                      </p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4 sm:pl-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        Niagara N4 Developer Certificate
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-2">
                        Tridium University • 2025
                      </p>
                    </div>
                  </div>
                )}

                {section.title === "Projects" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {section.items.map((project: any, i: number) => (
                      <div
                        key={i}
                        className="border rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow"
                      >
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                          {project.description}
                        </p>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
                        >
                          View Project →
                        </a>
                      </div>
                    ))}
                  </div>
                )}

                {section.title === "Specialization" && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                    {section.items.map((skill: any, i: number) => (
                      <div
                        key={i}
                        className="bg-gray-100 rounded-lg p-3 sm:p-4 text-center"
                      >
                        <span className="font-medium text-gray-700 text-sm sm:text-base">
                          {typeof skill === "string"
                            ? skill
                            : skill.title || skill}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
