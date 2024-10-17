import React from "react";
import { VisualizeProps } from "../../type";
import styles from "./Visualize.module.css";
import VisualArray from "../VisualArray/VisualArray";

const Visualize: React.FC<VisualizeProps> = (props: VisualizeProps) => {
  const { algorithm, speed } = props;

  const visual = (data: Array<number>) => {
    console.log("here");
    return <VisualArray array={data} algorithm={algorithm} />;
  };
  return <div className={styles.canvas}>{visual([5, 4, 3, 9])}</div>;
};

export default Visualize;
