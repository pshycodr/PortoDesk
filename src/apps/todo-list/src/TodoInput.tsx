import { useState, KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import { Todo } from '../TodoApp';

const TodoInput = ({ setTodos }: { setTodos: React.Dispatch<React.SetStateAction<Todo[]>> }) => {
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          text: input,
          completed: false,
          createdAt: new Date()
        }
      ]);
      setInput('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') addTodo();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex gap-2"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-3 text-gray-700 rounded-lg border border-gray-300 focus:outline-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        onClick={addTodo}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center"
      >         
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </motion.div>
  );
};

export default TodoInput;