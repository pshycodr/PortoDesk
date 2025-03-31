import { motion } from 'framer-motion';

const CalculatorHistory = ({ 
  history, 
  onSelect 
}: { 
  history: string[]; 
  onSelect: (expr: string) => void 
}) => {
  return (
    <div className="max-h-48 overflow-y-auto bg-gray-800 border-t border-gray-700">
      {history.length === 0 ? (
        <div className="p-4 text-center text-gray-500">No history yet</div>
      ) : (
        history.slice().reverse().map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onSelect(item)}
            className="p-3 border-b border-gray-700 hover:bg-gray-700 cursor-pointer transition-colors"
          >
            <div className="text-gray-400 text-sm">{item.split(' = ')[0]}</div>
            <div className="text-blue-400 text-lg font-medium">{item.split(' = ')[1]}</div>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default CalculatorHistory;