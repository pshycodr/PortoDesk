import { atom } from "recoil";

export const ModalAtom = atom<number[   ]>({
    key: "ModalAtom",
    default: [],
});
