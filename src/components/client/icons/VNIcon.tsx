import React from "react";

interface Props {
  className?: string;
}

export const VNIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_93_14867)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#D80027"
        />
        <path
          d="M12.0005 6.26172L13.2956 10.2475H17.4864L14.0959 12.7107L15.391 16.6965L12.0005 14.2332L8.61005 16.6965L9.90511 12.7107L6.51465 10.2475H10.7055L12.0005 6.26172Z"
          fill="#FFDA44"
        />
      </g>
      <defs>
        <clipPath id="clip0_93_14867">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
