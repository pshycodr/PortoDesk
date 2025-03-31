import { motion } from 'framer-motion';
import { useState } from 'react';
import { Todo } from '../TodoApp';

const TodoItem = ({ todo, setTodos }: { todo: Todo; setTodos: React.Dispatch<React.SetStateAction<Todo[]>> }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const toggleComplete = () => {
    setTodos(prev =>
      prev.map(item =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTodo = () => {
    setTodos(prev => prev.filter(item => item.id !== todo.id));
  };

  const handleEdit = () => {
    if (editText.trim()) {
      setTodos(prev =>
        prev.map(item =>
          item.id === todo.id ? { ...item, text: editText } : item
        )
      );
      setIsEditing(false);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`p-4 rounded-lg flex items-center ${todo.completed ? 'bg-gray-50' : 'bg-white'} border border-gray-100 shadow-sm`}
    >
      <button
        onClick={toggleComplete}
        className={`h-6 w-6 rounded-full flex items-center justify-center mr-3 ${todo.completed ? 'bg-green-500' : 'border-2 border-gray-300'}`}
      >
        {todo.completed && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
          autoFocus
          className="flex-1 px-2 py-1 border-b border-blue-500 focus:outline-none"
        />
      ) : (
        <div
          onClick={() => setIsEditing(true)}
          className={`flex-1 cursor-text ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}
        >
          {todo.text}
        </div>
      )}

      <button
        onClick={deleteTodo}
        className="ml-3 text-gray-400 hover:text-red-500 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </motion.div>
  );
};

export default TodoItem;