import React from "react";

interface Props {
  className?: string;
}

const EyeIcon: React.FC<Props> = ({ className = "" }) => {
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
        d="M51.9336 40C51.9336 46.6 46.6002 51.9333 40.0002 51.9333C33.4002 51.9333 28.0669 46.6 28.0669 40C28.0669 33.4 33.4002 28.0667 40.0002 28.0667C46.6002 28.0667 51.9336 33.4 51.9336 40Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 67.5666C51.7666 67.5666 62.7333 60.6332 70.3666 48.6332C73.3666 43.9332 73.3666 36.0332 70.3666 31.3332C62.7333 19.3332 51.7666 12.3999 40 12.3999C28.2333 12.3999 17.2666 19.3332 9.6333 31.3332C6.6333 36.0332 6.6333 43.9332 9.6333 48.6332C17.2666 60.6332 28.2333 67.5666 40 67.5666Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { EyeIcon };
