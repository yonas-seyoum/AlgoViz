import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faRefresh,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
import { ControlPanelProps } from "../../type";
import styles from "./ControlPanel.module.css";

const ControlPanel: React.FC<ControlPanelProps> = (
  controls: ControlPanelProps
) => {
  const { isRunning, onStart, onPause, onStop, onReset } = controls;
  return (
    <div className={styles.controlHolder}>
      {isRunning ? (
        <div className={styles.controls} onClick={onPause}>
          <FontAwesomeIcon icon={faPause} />
          <div>Pause</div>
        </div>
      ) : (
        <div className={styles.controls} onClick={onStart}>
          <FontAwesomeIcon icon={faPlay} />
          <div>Play</div>
        </div>
      )}
      <div className={styles.controls} onClick={onStop}>
        <FontAwesomeIcon icon={faStop} />
        <div>Stop</div>
      </div>
      <div className={styles.controls} onClick={onReset}>
        <FontAwesomeIcon icon={faRefresh} />
        <div>Reset</div>
      </div>
    </div>
  );
};

export default ControlPanel;
