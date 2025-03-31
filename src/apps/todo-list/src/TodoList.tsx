import { motion, AnimatePresence } from 'framer-motion';
import TodoItem from './TodoItem';
import { Todo } from '../TodoApp';

const TodoList = ({ todos, setTodos }: { todos: Todo[]; setTodos: React.Dispatch<React.SetStateAction<Todo[]>> }) => {
  return (
    <div className="space-y-2">
      <AnimatePresence>
        {todos.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8 text-gray-400"
          >
            No tasks yet. Add one above!
          </motion.div>
        ) : (
          todos.map((todo) => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              setTodos={setTodos} 
            />
          ))
        )}
      </AnimatePresence>
    </div>
  );
};

export default TodoList;