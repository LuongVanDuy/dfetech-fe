import React from "react";

interface Props {
  className?: string;
  classNamePath?: string;
}

const DropDownIcon: React.FC<Props> = ({ className = "", classNamePath = "" }) => {
  return (
    <svg
      width="23"
      height="24"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6 9.54102L12 15.541L18 9.54102"
        stroke="#6C757D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={classNamePath}
      />
    </svg>
  );
};

export { DropDownIcon };
