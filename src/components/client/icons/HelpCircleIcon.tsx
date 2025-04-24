import React from "react";

interface Props {
  className?: string;
}

const HelpCircleIcon: React.FC<Props> = ({ className = "" }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.12 11.9998C12.4334 11.1087 13.0522 10.3573 13.8666 9.87868C14.681 9.40005 15.6385 9.22509 16.5695 9.38479C17.5006 9.54449 18.345 10.0285 18.9534 10.7512C19.5617 11.4739 19.8947 12.3885 19.8933 13.3332C19.8933 15.9998 15.8933 17.3332 15.8933 17.3332M16 22.6665H16.0133M29.3333 15.9998C29.3333 23.3636 23.3638 29.3332 16 29.3332C8.63616 29.3332 2.66663 23.3636 2.66663 15.9998C2.66663 8.63604 8.63616 2.6665 16 2.6665C23.3638 2.6665 29.3333 8.63604 29.3333 15.9998Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { HelpCircleIcon };
