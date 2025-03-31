import React from "react";

interface Props {
  className?: string;
}

const LayerIcon: React.FC<Props> = ({ className = "" }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.33334 24.1667L20 32.5L36.6667 24.1667M20 7.5L3.33334 15.8333L20 24.1667L36.6667 15.8333L20 7.5Z"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { LayerIcon };
