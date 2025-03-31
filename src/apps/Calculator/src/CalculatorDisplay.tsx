import { motion } from 'framer-motion';

const CalculatorDisplay = ({ 
  value, 
  onHistoryToggle 
}: { 
  value: string; 
  onHistoryToggle: () => void 
}) => {
  return (
    <div className="p-4 bg-gray-900">
      <div className="flex justify-between items-center mb-2">
        <div className="text-gray-400 text-sm">CALCULATOR</div>
        <button 
          onClick={onHistoryToggle}
          className="text-gray-400 hover:text-blue-400 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      
      <motion.div
        key={value}
        initial={{ opacity: 0.5, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-right"
      >
        <div className="text-gray-400 text-xl h-6 overflow-hidden">
          {value.length > 12 ? '...' + value.slice(-12) : value}
        </div>
        <div className="text-white text-4xl font-light mt-2 h-12 overflow-hidden">
          {value.length > 8 ? value.slice(0, 8) + '...' : value}
        </div>
      </motion.div>
    </div>
  );
};

export default CalculatorDisplay;