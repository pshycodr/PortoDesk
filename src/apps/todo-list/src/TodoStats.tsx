import { motion } from 'framer-motion';
import { Todo } from '../TodoApp';

const TodoStats = ({ todos }: { todos: Todo[] }) => {
  const completedPercentage = todos.length > 0 
    ? Math.round(todos.filter(todo => todo.completed).length / todos.length * 100) 
    : 0;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-4"
    >
      <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
        <span>Progress</span>
        <span>{completedPercentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-500 h-2 rounded-full transition-all duration-500" 
          style={{ width: `${completedPercentage}%` }}
        ></div>
      </div>
    </motion.div>
  );
};

export default TodoStats;