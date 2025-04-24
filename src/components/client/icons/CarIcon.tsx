import React from "react";

interface Props {
  className?: string;
}

const CarIcon: React.FC<Props> = ({ className = "" }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.51 3.00195H8.49C6 3.00195 5.45 4.24195 5.13 5.76195L4 11.172H20L18.87 5.76195C18.55 4.24195 18 3.00195 15.51 3.00195Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.9897 19.9919C22.0997 21.1619 21.1597 22.1719 19.9597 22.1719H18.0797C16.9997 22.1719 16.8497 21.7119 16.6597 21.1419L16.4597 20.5419C16.1797 19.7219 15.9997 19.1719 14.5597 19.1719H9.43974C7.99974 19.1719 7.78974 19.7919 7.53974 20.5419L7.33974 21.1419C7.14974 21.7119 6.99974 22.1719 5.91974 22.1719H4.03974C2.83974 22.1719 1.89974 21.1619 2.00974 19.9919L2.56974 13.9019C2.70974 12.4019 2.99974 11.1719 5.61974 11.1719H18.3797C20.9997 11.1719 21.2897 12.4019 21.4297 13.9019L21.9897 19.9919Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 8.17188H3"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 8.17188H20"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3.17188V5.17188"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 5.17188H13.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 15.1719H9"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 15.1719H18"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { CarIcon };
