import React from "react";

interface Props {
  className?: string;
}

const ArrowUpRightIcon: React.FC<Props> = ({ className = "" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M9.33398 22.6666L22.6673 9.33325M22.6673 9.33325H9.33398M22.6673 9.33325V22.6666"
        stroke="#9BE076"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { ArrowUpRightIcon };
