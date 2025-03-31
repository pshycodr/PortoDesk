import { useState, useEffect } from 'react';
import TodoHeader from './src/TodoHeader';
import TodoInput from './src/TodoInput';
import TodoList from './src/TodoList';
import TodoFilters from './src/TodoFilters';
import TodoStats from './src/TodoStats';
import { motion } from 'framer-motion';

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-4 md:p-8"
    >
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <TodoHeader />
          
          <div className="p-6">
            <TodoInput setTodos={setTodos} />
            
            <motion.div layout className="mt-6">
              <TodoList 
                todos={filteredTodos} 
                setTodos={setTodos} 
              />
            </motion.div>
            
            <div className="mt-6 border-t border-gray-100 pt-4">
              <TodoFilters 
                filter={filter} 
                setFilter={setFilter} 
                todos={todos}
                setTodos={setTodos}
              />
              
              <TodoStats todos={todos} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TodoApp;

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}