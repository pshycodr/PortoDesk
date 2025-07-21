import React from "react";
import Draggable from "./Draggable";
import { useRecoilState } from "recoil";
import { ModalAtom } from "../store/recoil/ModalAtom";
import { appsList } from "../data/aplist";

const FloatingModal = ({ appId }: { appId: number }) => {
  const [modals, setModals] = useRecoilState(ModalAtom);
  console.log(modals);
  
  const app = appsList.find(app => app.id === appId);

  if (!app || !modals.includes(appId)) return null;

  const AppComponent = app.component;

  return (
    <Draggable 
      title={app.title}
      id={app.id}
      onClose={() => setModals(prev => prev.filter(id => id !== appId))}
      initialWidth={app.settings.initialWidth}
      initialHeight={app.settings.initialHeight}
      resizable={app.settings.resizable}
    >
      <AppComponent />
    </Draggable>
  );
};

export default FloatingModal;