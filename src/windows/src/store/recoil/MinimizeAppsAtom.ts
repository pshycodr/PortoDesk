import { atom } from "recoil";

export const MinimizeAppsAtom = atom<number[   ]>({
    key: "MinimizeAppsAtom",
    default: [],
});
