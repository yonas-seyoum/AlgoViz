import React from "react";
import { VisualArrayProps } from "../../type";

const VisualArray: React.FC<VisualArrayProps> = (props: VisualArrayProps) => {
  const { array, algorithm } = props;
  return (
    <>
      Visualizing {array} with {algorithm}
    </>
  );
};

export default VisualArray;
