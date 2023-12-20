import { create } from "zustand";

// define types for state values and actions separately

type State = {
  width: number;
  height: number;
  cols: number;
  rows: number;
};

type Action = {
  updatePagesize: (width: State["width"], height: State["height"]) => void;
  updateCols: (cols: State["cols"]) => void;
  updateRows: (cols: State["rows"]) => void;
};

// define the initial state

const initialState: State = {
  width: 640,
  height: 480,
  cols: 8,
  rows: 4,
};

export const useDrawStore = create<State & Action>((set) => ({
  ...initialState,
  updatePagesize: (width, height) =>
    set(() => ({ width: width, height: height })),
  updateCols: (num) => set(() => ({ cols: num })),
  updateRows: (num) => set(() => ({ rows: num })),
}));
