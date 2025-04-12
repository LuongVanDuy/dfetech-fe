import React from "react";

interface Props {
  className?: string;
}

const StarIcon: React.FC<Props> = ({ className = "" }) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M51.2999 17.3667L55.9998 26.7667C56.6331 28.0667 58.3331 29.3 59.7665 29.5667L68.2665 30.9667C73.6999 31.8667 74.9665 35.8001 71.0665 39.7334L64.4331 46.3667C63.3331 47.4667 62.6999 49.6334 63.0665 51.2001L64.9665 59.4001C66.4665 65.8667 62.9998 68.4001 57.2998 65.0001L49.3331 60.2667C47.8998 59.4001 45.4998 59.4001 44.0665 60.2667L36.0998 65.0001C30.3998 68.3667 26.9332 65.8667 28.4332 59.4001L30.3332 51.2001C30.6999 49.6667 30.0665 47.5001 28.9665 46.3667L22.3332 39.7334C18.4332 35.8334 19.6999 31.9 25.1332 30.9667L33.6332 29.5667C35.0665 29.3334 36.7665 28.0667 37.3998 26.7667L42.0999 17.3667C44.5999 12.2667 48.7332 12.2667 51.2999 17.3667Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.6665 16.6667H6.6665"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6665 63.3333H6.6665"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99984 40H6.6665"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { StarIcon };
