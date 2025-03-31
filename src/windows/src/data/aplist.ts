import AboutMe from "../../../apps/AboutMe/AboutMe";
import Calculator from "../../../apps/Calculator/Calculator";
import NotesApp from "../../../apps/Notes/NotesApp";
import TodoApp from "../../../apps/todo-list/TodoApp";
// import NotepadApp from "../../../apps/Notepad/NotepadApp";
// import CalculatorApp from "../../../apps/Calculator/CalculatorApp";

export const appsList = [
  {
    id: 1,
    title: "Notes",
    icon: "./assets/notes.png",
    component: NotesApp,
    settings: { 
      resizable: true, 
      draggable: true,
      initialWidth: 600,
      initialHeight: 400
    },
  },
  {
    id: 2,
    title: "Calculator",
    icon: "./assets/calculator.png",
    component: Calculator,
    settings: { 
      resizable: false, 
      draggable: true,
      initialWidth: 300,
      initialHeight: 450
    },
  },
  {
    id: 3,
    title: "Me",
    icon: "./assets/me.jpg",
    component: AboutMe,
    settings: { 
      resizable: true, 
      draggable: true,
      initialWidth: 800,
      initialHeight: 600
    },
  },
  {
    id: 4,
    title: "Todo",
    icon: "./assets/todo.png",
    component: TodoApp,
    settings: { 
      resizable: true, 
      draggable: true,
      initialWidth: 800,
      initialHeight: 600
    },
  },
];