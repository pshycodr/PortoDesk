import { motion, AnimatePresence } from 'framer-motion';
import NoteItem from './NoteItem';
import { Note } from '../NotesApp';

const NotesSidebar = ({
    notes,
    activeNote,
    onNoteSelect,
    onDeleteNote
}: {
    notes: Note[];
    activeNote: string | null;
    onNoteSelect: (id: string) => void;
    onDeleteNote: (id: string) => void;
}) => {
    return (
        <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">YOUR NOTES</h3>

            <AnimatePresence>
                {notes.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-8 text-gray-400"
                    >
                        No notes yet
                    </motion.div>
                ) : (
                    <div className="space-y-2">
                        {notes.map((note) => (
                            <NoteItem
                                key={note.id}
                                note={note}
                                isActive={activeNote === note.id}
                                onSelect={onNoteSelect}
                                onDelete={onDeleteNote}
                            />
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NotesSidebar;