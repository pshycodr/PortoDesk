import { FaWindows, FaWifi, FaBatteryFull, FaVolumeUp } from "react-icons/fa";
import { BsFillChatDotsFill, BsGrid3X3Gap } from "react-icons/bs";
import { MdOutlineKeyboardArrowUp, MdNotifications } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

const BottomBar = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 h-14 bg-gray-800/80 backdrop-blur-lg text-white flex items-center px-6 rounded-full border border-gray-600/50 shadow-xl">
      <div className="flex items-center space-x-2 mr-6">
        <button className="p-2 rounded-full hover:bg-gray-700/50 transition-all duration-200 group relative">
          <BsGrid3X3Gap
            size={18}
            className="text-gray-300 group-hover:text-white transition-colors"
          />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </button>

        {['📝', '🧮', '✅', '👤'].map((icon, i) => (
          <button
            key={i}
            className="p-2 hover:scale-110 transition-all duration-200 relative"
          >
            <span className="text-xl">{icon}</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
          </button>
        ))}
      </div>


      <div className="w-px h-6 bg-gray-600/50 mx-2"></div>


      <div className="flex items-center space-x-4 px-4">
        <button className="p-2 rounded-full hover:bg-gray-700/50 transition-colors relative group">
          <FaWifi size={16} className="text-blue-400" />
          <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs bg-gray-900 px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Wi-Fi Connected
          </span>
        </button>

        <button className="p-2 rounded-full hover:bg-gray-700/50 transition-colors relative group">
          <FaVolumeUp size={16} className="text-purple-400" />
          <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs bg-gray-900 px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Volume Control
          </span>
        </button>

        <button className="p-2 rounded-full hover:bg-gray-700/50 transition-colors relative group">
          <FaBatteryFull size={16} className="text-green-400" />
          <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs bg-gray-900 px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            100% Charged
          </span>
        </button>
      </div>


      <div className="w-px h-6 bg-gray-600/50 mx-2"></div>


      <div className="flex items-center space-x-3 ml-4">
        <button className="p-2 rounded-full hover:bg-gray-700/50 transition-colors relative group">
          <MdNotifications size={18} className="text-yellow-400" />
          <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs bg-gray-900 px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Notifications
          </span>
        </button>

        <button className="p-2 rounded-full hover:bg-gray-700/50 transition-colors relative group">
          <BsFillChatDotsFill size={16} className="text-pink-400" />
          <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs bg-gray-900 px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Messages
          </span>
        </button>

        <button className="p-2 rounded-full hover:bg-gray-700/50 transition-colors relative group">
          <IoSettingsSharp size={16} className="text-gray-300 hover:text-white" />
          <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs bg-gray-900 px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            System Settings
          </span>
        </button>

        <div className="ml-2 h-full bg-gray-700/70 px-3 py-1 rounded-full flex items-center justify-between">
          <span className="text-sm w-25"> {time.toLocaleTimeString()}</span>
          <span className="text-xs text-gray-400 ml-1 w-30">• {time.toDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;