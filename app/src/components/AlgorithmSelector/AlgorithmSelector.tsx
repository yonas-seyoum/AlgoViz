import React, { useState } from "react";
import { Algorithm, AlgorithmSelectorProps } from "../../type";
import styles from "./AlgorithmSelector.module.css";

const AlgorithmSelector: React.FC<AlgorithmSelectorProps> = (
  props: AlgorithmSelectorProps
) => {
  const { onSelect } = props;
  const [value, setValue] = useState<string>("Merge Sort");

  return (
    <div className={styles.wrapper}>
      <select
        className={styles.select}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          onSelect(event.target.value);
        }}
      >
        <option value="Merge Sort">Merge Sort</option>
        <option value="Bubble Sort">Bubble Sort</option>
        <option value="Selection Sort">Selection Sort</option>
        <option value="Quick Sort">QuickSort</option>
      </select>
    </div>
  );
};

export default AlgorithmSelector;
