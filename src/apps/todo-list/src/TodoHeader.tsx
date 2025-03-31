import { motion } from 'framer-motion';

const TodoHeader = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-6 text-white">
      <motion.h1 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-3xl font-bold flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        Todo List
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-blue-100 mt-1"
      >
        Organize your tasks in style
      </motion.p>
    </div>
  );
};

export default TodoHeader;