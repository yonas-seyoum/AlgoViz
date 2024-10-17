import React, { useState } from "react";
import styles from "./AlgorithmVisualizer.module.css";
import ControlPanel from "../ControlPanel/ControlPanel";
import SideBar from "../SideBar/SideBar";
import AlgorithmSelector from "../AlgorithmSelector/AlgorithmSelector";
import Visualize from "../Visualize/Visualize";

const AlgorithmVisualizer: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [speed, setSpeed] = useState<number>(100);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [algorithm, setAlgorithm] = useState<string>("Merge Sort");

  const startAlgorithm = () => {
    setIsRunning(true);
  };

  const pauseAlgorithm = () => {
    setIsRunning(false);
  };

  const handleSpeedChange = () => {
    setSpeed(200);
  };

  const selectAlgorithm = (algorithm: string) => {
    setIsSelected(true);
    setAlgorithm(algorithm);
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.leftBar}>
        <SideBar />
      </div>
      <div className={styles.topBar}>
        <div className={styles.appName}>AlgoViz</div>
        <AlgorithmSelector onSelect={selectAlgorithm} />
        <ControlPanel
          isRunning={isRunning}
          onStart={startAlgorithm}
          onPause={pauseAlgorithm}
          onSpeedChange={handleSpeedChange}
        />
      </div>
      <div className={styles.canvas}>
        {/* {isSelected && <>Selected</>} */}
        <Visualize speed={speed} algorithm={algorithm} />
      </div>
    </div>
  );
};

export default AlgorithmVisualizer;
