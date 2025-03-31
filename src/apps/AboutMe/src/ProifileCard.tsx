import { motion } from "framer-motion";

const ProfileCard = () => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl">
      <div className="flex flex-col items-center">
        {/* Avatar with animation */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative mb-6"
        >
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden border-2 border-white/20">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Online status indicator */}
          <div className="absolute bottom-3 right-3 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-800"></div>
        </motion.div>

        <h2 className="text-2xl font-bold mb-1">Alex Johnson</h2>
        <p className="text-blue-400 mb-4">Senior UI/UX Developer</p>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 w-full mb-6">
          <div className="text-center">
            <p className="text-2xl font-bold">5+</p>
            <p className="text-sm text-gray-400">Years Exp</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">42</p>
            <p className="text-sm text-gray-400">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">100%</p>
            <p className="text-sm text-gray-400">Satisfaction</p>
          </div>
        </div>

        {/* Quick Info */}
        <div className="w-full space-y-3">
          <div className="flex items-center">
            <span className="text-gray-400 mr-2">📍</span>
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-400 mr-2">💼</span>
            <span>Available for freelance</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-400 mr-2">🎯</span>
            <span>React, UI/UX, Animation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;