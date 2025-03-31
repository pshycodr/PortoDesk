import Icons from "./Icons";
import FloatingModal from "./FloatingModal";
import { useRecoilValue } from "recoil";
import { ModalAtom } from "../store/recoil/ModalAtom";
import { appsList } from "../data/aplist";
import BottomBar from "./BottomBar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ViewPort = () => {
    const modals = useRecoilValue(ModalAtom);
    const [wallpaper, setWallpaper] = useState(0);
    
    // const wallpapers = [
    //     'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500',
    //     'bg-gradient-to-br from-cyan-500 to-blue-600',
    //     'bg-gradient-to-br from-emerald-500 to-green-600',
    //     'bg-gradient-to-br from-amber-500 to-orange-600'
    // ];

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setWallpaper((prev) => (prev + 1) % wallpapers.length);
    //     }, 10000);
    //     return () => clearInterval(interval);
    // }, [wallpapers.length]);


    const floatingElements = [...Array(10)].map((_, i) => (
        <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                opacity: 0.1
            }}
            animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                transition: {
                    duration: Math.random() * 30 + 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                }
            }}
        />
    ));

    // Generate wallpaper indicators
    // const wallpaperIndicators = wallpapers.map((_, index) => (
    //     <button
    //         key={index}
    //         onClick={() => setWallpaper(index)}
    //         className={`h-2 w-2 rounded-full transition-all ${wallpaper === index ? 'bg-white scale-125' : 'bg-white/30'}`}
    //         aria-label={`Wallpaper ${index + 1}`}
    //     />
    // ));

  
    const renderModals = modals.map((appId) => {
        const app = appsList.find((app) => app.id === appId);
        return app ? (
            <FloatingModal 
                key={appId} 
                appId={appId}
            />
        ) : null;
    });

    return (
        <motion.div 
            className={`h-screen w-screen overflow-hidden relative bg-gray-800`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
           
            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
            <div className="absolute inset-0 overflow-hidden">
                {floatingElements}
            </div>


            <div className="relative z-10 h-full w-full flex flex-col">
               
                <div className="flex-1 relative">
                    {renderModals}
                </div>

              
                <div className="p-6">
                    <Icons />
                </div>


                <BottomBar />
            </div>

            {/* <div className="absolute bottom-20 right-4 flex space-x-2 z-20">
                {wallpaperIndicators}
            </div> */}
        </motion.div>
    );
};

export default ViewPort;