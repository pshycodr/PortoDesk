import { useState, useEffect } from 'react';
import NotesHeader from './src/NotesHeader';
import NotesSidebar from './src/NotesSidebar';
import NotesEditor from './src/NotesEditor';
import NotesSearch from './src/NotesSearch';
import { motion } from 'framer-motion';

export interface Note {
    id: string;
    title: string;
    content: string;
    color: string;
    createdAt: number;
    updatedAt: number;
}

const NotesApp = () => {
    const [notes, setNotes] = useState<Note[]>(() => {
        const saved = localStorage.getItem('notes');
        // console.log(saved);
        
        return saved ? JSON.parse(saved) : [];
    });

    const [activeNote, setActiveNote] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const createNewNote = () => {
        const colors = ['bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-pink-100', 'bg-purple-100'];
        const newNote: Note = {
            id: Date.now().toString(),
            title: 'Untitled Note',
            content: '',
            color: colors[Math.floor(Math.random() * colors.length)],
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
        setNotes([newNote, ...notes]);
        setActiveNote(newNote.id);
        setIsMobileSidebarOpen(false);
    };

    const updateNote = (updatedNote: Note) => {
        setNotes(notes.map(note =>
            note.id === updatedNote.id ?
                { ...updatedNote, updatedAt: Date.now() } :
                note
        ));
    };

    const deleteNote = (id: string) => {
        setNotes(notes.filter(note => note.id !== id));
        if (activeNote === id) {
            setActiveNote(notes.length > 1 ? notes.find(note => note.id !== id)?.id || null : null);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-screen bg-gray-50"
        >
            <NotesHeader
                onCreateNote={createNewNote}
                onToggleSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            />

            <div className="flex flex-1 overflow-hidden">
                <motion.div
                    initial={false}
                    animate={{
                        // width: isMobileSidebarOpen ? '280px' : '0px',
                        // opacity: isMobileSidebarOpen ? 1 : 0 
                    }}
                    className={`fixed md:relative z-20 md:z-0 h-full bg-white border-r border-gray-200 shadow-md md:shadow-none md:block`}
                >
                    <div className="p-4 border">
                        <NotesSearch
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                        />
                        <NotesSidebar
                            notes={filteredNotes}
                            activeNote={activeNote}
                            onNoteSelect={(id) => {
                                setActiveNote(id);
                                setIsMobileSidebarOpen(false);
                            }}
                            onDeleteNote={deleteNote}
                        />
                    </div>
                </motion.div>

                {isMobileSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
                        onClick={() => setIsMobileSidebarOpen(false)}
                    />
                )}

                <div className="flex-1 flex flex-col overflow-hidden">
                    {activeNote ? (
                        <NotesEditor
                            note={notes.find(note => note.id === activeNote)!}
                            onUpdateNote={updateNote}
                        />
                    ) : (
                        <div className="flex-1 flex items-center justify-center p-8">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center"
                            >
                                <div className="text-gray-400 text-6xl mb-4">📝</div>
                                <h2 className="text-2xl font-medium text-gray-600">No note selected</h2>
                                <button
                                    onClick={createNewNote}
                                    className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition-colors"
                                >
                                    Create New Note
                                </button>
                            </motion.div>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default NotesApp;