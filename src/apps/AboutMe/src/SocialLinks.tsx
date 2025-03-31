import { motion } from "framer-motion";

const socials = [
  { name: "GitHub", icon: "💻", url: "#", color: "hover:bg-gray-700" },
  { name: "Twitter", icon: "🐦", url: "#", color: "hover:bg-blue-400" },
  { name: "LinkedIn", icon: "🔗", url: "#", color: "hover:bg-blue-600" },
  { name: "Dribbble", icon: "🏀", url: "#", color: "hover:bg-pink-500" },
  { name: "Email", icon: "✉️", url: "#", color: "hover:bg-red-500" },
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-4">
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          href={social.url}
          className={`w-12 h-12 rounded-full bg-gray-800/70 border border-gray-700/50 flex items-center justify-center text-xl transition-colors ${social.color}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;