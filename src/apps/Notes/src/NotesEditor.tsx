import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Note } from '../NotesApp';

const NotesEditor = ({ 
  note, 
  onUpdateNote 
}: { 
  note: Note; 
  onUpdateNote: (note: Note) => void 
}) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [color, setColor] = useState(note.color);

  useEffect(() => {
    const timer = setTimeout(() => {
      onUpdateNote({
        ...note,
        title,
        content,
        color,
        updatedAt: Date.now()
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [title, content, color]);

  const colors = [
    'bg-blue-100', 'bg-green-100', 
    'bg-yellow-100', 'bg-pink-100', 
    'bg-purple-100'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex-1 flex flex-col ${color} transition-colors duration-300`}
    >
      <div className="p-4 border-b border-gray-200 bg-white bg-opacity-70">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-2xl font-medium bg-transparent focus:outline-none text-gray-800 placeholder-gray-400"
          placeholder="Note title"
        />
        
        <div className="flex mt-3 space-x-2">
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={`w-6 h-6 rounded-full ${c} border-2 ${color === c ? 'border-gray-600' : 'border-transparent'}`}
            />
          ))}
        </div>
      </div>
      
      <div className="flex-1 p-4 overflow-auto">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-full bg-transparent focus:outline-none resize-none text-gray-700 placeholder-gray-400 leading-relaxed"
          placeholder="Start writing your note here..."
        />
      </div>
      
      <div className="p-3 text-xs text-gray-500 border-t border-gray-200 bg-white bg-opacity-70">
        Last updated: {new Date(note.updatedAt).toLocaleString()}
      </div>
    </motion.div>
  );
};

export default NotesEditor;