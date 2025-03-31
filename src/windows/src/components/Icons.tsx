import { appsList } from "../data/aplist";
import { useRecoilState } from "recoil";
import { ModalAtom } from "../store/recoil/ModalAtom";
import { motion } from "framer-motion";

const Icons = () => {
  const [modals, setModals] = useRecoilState(ModalAtom);

  const openModal = (appId: number) => {
    if (!modals.includes(appId)) {
      setModals((prev) => [...prev, appId]);
    }
  };

  return (
    <div className="p-5 pb-20">
      <div className="h-fit w-fit grid grid-flow-col grid-rows-4   gap-5">
        {appsList.map((app) => (
          <motion.div
            key={app.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openModal(app.id)}
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="relative" title="Click to open">
              <div className="h-16 w-16 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex justify-center items-center group-hover:bg-white/20 transition-all duration-200">
                <span className="text-2xl  "><img src={app.icon} alt="" className="p-1 rounded-xl" /></span>
              </div>
              {modals.includes(app.id) && (
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-500 rounded-full" />
              )}
            </div>
            <span className="text-sm font-medium text-white mt-2 text-center truncate w-16">
              {app.title}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Icons;