
export type AlgorithmSelectorProps = {
  onSelect: (algorithm: string) => void;
};

export type ControlPanelProps = {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onStop?: () => void;
  onReset?: () => void;
  onSpeedChange?: () => void;
};

export type VisualizeProps = {
  data?: string;
  algorithm: string;
  speed: number;
};

export type SortAlgorithm =
  | "Merge Sort"
  | "Selection Sort"
  | "Bubble Sort"
  | "Quick Sort";

export type Algorithm = SortAlgorithm;

export type VisualArrayProps = {
  array: Array<number>;
  algorithm: string;
};
