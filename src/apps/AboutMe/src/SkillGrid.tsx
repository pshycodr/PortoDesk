import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 95, color: "bg-cyan-500" },
  { name: "TypeScript", level: 90, color: "bg-blue-500" },
  { name: "UI/UX Design", level: 85, color: "bg-purple-500" },
  { name: "Node.js", level: 80, color: "bg-green-500" },
  { name: "Animation", level: 88, color: "bg-pink-500" },
  { name: "Figma", level: 92, color: "bg-yellow-500" },
];

const SkillsGrid = () => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="w-2 h-6 bg-blue-500 mr-3 rounded-full"></span>
        My Skills
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-4"
          >
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full ${skill.color}`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;