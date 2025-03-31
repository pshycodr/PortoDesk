import { useState } from 'react';
import CalculatorDisplay from './src/CalculatorDisplay';
import CalculatorKeypad from './src/CalculatorKeypad';
import CalculatorHistory from './src/CalculatorHistory';
import { motion } from 'framer-motion';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [history, setHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      setDisplay('0');
    } else if (value === '=') {
      try {
        const result = eval(display).toString();
        setHistory(prev => [...prev, `${display} = ${result}`]);
        setDisplay(result);
      } catch {
        setDisplay('Error');
      }
    } else if (value === '⌫') {
      setDisplay(prev => prev.length === 1 ? '0' : prev.slice(0, -1));
    } else if (value === '±') {
      setDisplay(prev => prev.startsWith('-') ? prev.slice(1) : `-${prev}`);
    } else {
      setDisplay(prev => prev === '0' ? value : prev + value);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4"
    >
      <div className="w-full max-w-md">
        <motion.div 
          layout
          className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700"
        >
          <CalculatorDisplay 
            value={display} 
            onHistoryToggle={() => setShowHistory(!showHistory)}
          />
          
          {showHistory && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <CalculatorHistory 
                history={history} 
                onSelect={(expr) => {
                  setDisplay(expr.split(' = ')[0]);
                  setShowHistory(false);
                }}
              />
            </motion.div>
          )}
          
          <CalculatorKeypad onButtonClick={handleButtonClick} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Calculator;