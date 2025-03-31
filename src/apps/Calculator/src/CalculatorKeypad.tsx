import { motion } from 'framer-motion';

const CalculatorKeypad = ({ 
  onButtonClick 
}: { 
  onButtonClick: (value: string) => void 
}) => {
  const buttons = [
    'C', '±', '⌫', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
  ];

  const getButtonClass = (value: string) => {
    if (value === 'C') return 'bg-red-500 hover:bg-red-600 text-white';
    if (value === '=') return 'bg-blue-500 hover:bg-blue-600 text-white';
    if (['+', '-', '*', '/'].includes(value)) return 'bg-gray-700 hover:bg-gray-600 text-blue-400';
    return 'bg-gray-700 hover:bg-gray-600 text-white';
  };

  return (
    <div className="grid grid-cols-4 gap-1 p-2">
      {buttons.map((btn) => (
        <motion.button
          key={btn}
          whileTap={{ scale: 0.95 }}
          onClick={() => onButtonClick(btn)}
          className={`${getButtonClass(btn)} ${btn === '0' ? 'col-span-2' : ''} h-16 rounded-lg text-xl font-medium transition-colors`}
        >
          {btn === '⌫' ? 
            "del": (
            btn
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default CalculatorKeypad;