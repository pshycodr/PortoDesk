import React, { useState, useRef, useEffect } from "react";
import { FaTimes, FaMinus, FaExpand, FaCompress } from "react-icons/fa";

interface DraggableProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  initialWidth?: number;
  initialHeight?: number;
  resizable?: boolean;
}

const Draggable: React.FC<DraggableProps> = ({
  title,
  onClose,
  children,
  initialWidth = 500,
  initialHeight = 300,
  resizable = true
}) => {

  console.log(title, initialHeight, initialWidth);
  
  const modalRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 100, y: 100 });

  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (isFullscreen) {
      position.current = { x: 0, y: 0 };
    }
  }, [isFullscreen]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isFullscreen) return;

    isDragging.current = true;
    startPos.current = {
      x: e.clientX - position.current.x,
      y: e.clientY - position.current.y,
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.body.style.userSelect = "none";
  };

  const handleMouseMove = useRef((e: MouseEvent) => {
    if (!isDragging.current || isFullscreen) return;

    const modal = modalRef.current;
    if (!modal) return;

    const maxX = window.innerWidth - modal.offsetWidth;
    const maxY = window.innerHeight - modal.offsetHeight;

    position.current = {
      x: Math.max(0, Math.min(e.clientX - startPos.current.x, maxX)),
      y: Math.max(0, Math.min(e.clientY - startPos.current.y, maxY)),
    };

    if (modalRef.current) {
      modalRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
    }
  }).current;

  const handleMouseUp = useRef(() => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    document.body.style.userSelect = "";
  }).current;

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div
      ref={modalRef}
      className={`fixed  z-50 shadow-2xl transition-[width,height] duration-200 ease-in-out  ${isFullscreen
        ? "top-0 left-0 w-screen h-screen "
        : `w-[${500}px] h-[500px] rounded-lg`
        }`}
      style={{
        transform: `translate(${position.current.x}px, ${position.current.y}px)`,
        minWidth: isFullscreen ? "100vw" : "300px",
        minHeight: isFullscreen ? "100vh" : "150px",
      }}
    >
      <div
        className={`flex flex-col bg-gray-800 text-white h-full rounded-lg  border-gray-700 ${isFullscreen ? "rounded-none" : ""
          }`}
      >
        <div
          className={`w-full h-10 bg-gray-900 flex justify-between items-center px-4 cursor-grab ${isDragging.current ? "cursor-grabbing" : ""
            } ${isFullscreen ? "rounded-t-none" : "rounded-t-lg"}`}
          onMouseDown={handleMouseDown}
        >
          <span className="font-semibold text-gray-100 truncate">{title}</span>
          <div className="flex gap-3">
            <button
              className="text-gray-400 hover:text-gray-100 hover:bg-gray-700 p-1 rounded transition-colors"
              onClick={() => setIsMinimized(!isMinimized)}
              aria-label={isMinimized ? "Restore" : "Minimize"}
              title={isMinimized ? "Restore" : "Minimize"}
            >
              <FaMinus size={12} />
            </button>
            <button
              className="text-gray-400 hover:text-gray-100 hover:bg-gray-700 p-1 rounded transition-colors"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
              title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <FaCompress size={12} /> : <FaExpand size={12} />}
            </button>
            <button
              className="text-gray-400 hover:text-gray-100 hover:bg-red-600 p-1 rounded transition-colors"
              onClick={onClose}
              aria-label="Close"
              title="Close"
            >
              <FaTimes size={14} />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <div
            className={`flex-1  bg-gray-800/95 text-gray-200 overflow-scroll no-scrollbar  `}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Draggable;