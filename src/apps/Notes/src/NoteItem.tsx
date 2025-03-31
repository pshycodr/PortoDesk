import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Note } from '../NotesApp';

const NoteItem = ({ 
  note, 
  isActive, 
  onSelect, 
  onDelete 
}: { 
  note: Note;
  isActive: boolean;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(note.id)}
      className={`relative p-3 rounded-lg cursor-pointer transition-colors ${isActive ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-100'}`}
    >
      <div className={`absolute left-0 top-0 h-full w-1 rounded-l-lg ${note.color.replace('bg-', 'bg-')}`}></div>
      
      <div className="ml-3">
        <h4 className={`font-medium truncate ${isActive ? 'text-blue-600' : 'text-gray-800'}`}>
          {note.title}
        </h4>
        <p className="text-sm text-gray-500 truncate mt-1" title={note.content}>
          {note.content.substring(0, 40)}{note.content.length > 40 ? '...' : ''}
        </p>
        <p className="text-xs text-gray-400 mt-2">
          {new Date(note.updatedAt).toLocaleDateString()}
        </p>
      </div>
      
      <AnimatePresence>
        {(isHovered || isActive) && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              e.stopPropagation();
              onDelete(note.id);
            }}
            className="absolute right-2 top-2 p-1 text-gray-400 hover:text-red-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NoteItem;