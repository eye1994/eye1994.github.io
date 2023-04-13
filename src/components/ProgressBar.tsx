import { useRef } from "react";
import { useEnteredViewPort } from "../helpers/hooks/use-entered-viewport";

export interface ProgressBarProps {
  percentage: number;
}

export const ProgressBar = ({ percentage }: ProgressBarProps) => {
  const progressBarRef = useRef(null);
  const isVisible = useEnteredViewPort(progressBarRef);

  // percentage={percentage}
  // isVisible={isVisible}

  // @TODO fix for SSR

  return (
    <div>
      <div className="progress-container" ref={progressBarRef}>
        <div
          className="progress-bar-container"
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{
            width: isVisible ? `${percentage}%` : "0",
            borderRadius: percentage === 100 ? "8px" : "0",
          }}
        ></div>
      </div>
    </div>
  );
};
