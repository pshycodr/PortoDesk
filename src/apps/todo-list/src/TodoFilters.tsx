import { motion } from 'framer-motion';
import { Todo } from '../TodoApp';

const TodoFilters = ({ 
  filter, 
  setFilter, 
  todos,
  setTodos
}: { 
  filter: 'all' | 'active' | 'completed'; 
  setFilter: React.Dispatch<React.SetStateAction<'all' | 'active' | 'completed'>>;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}) => {
  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="flex flex-wrap justify-between items-center gap-4 text-sm text-gray-500"
    >
      <div>
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded-md ${filter === 'all' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-3 py-1 rounded-md ${filter === 'active' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-3 py-1 rounded-md ${filter === 'completed' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        >
          Completed
        </button>
      </div>

      {completedCount > 0 && (
        <button
          onClick={clearCompleted}
          className="hover:text-blue-600 transition-colors"
        >
          Clear completed
        </button>
      )}
    </motion.div>
  );
};

export default TodoFilters;