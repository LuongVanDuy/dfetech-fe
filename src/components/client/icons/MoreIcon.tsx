interface Props {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}

const MoreIcon: React.FC<Props> = ({
  className = "",
  width = 13,
  height = 12,
  fill = "#101828",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 13 12"
      fill={fill}
      className={className}
    >
      <path
        d="M1.66675 11L11.6667 1M11.6667 1H1.66675M11.6667 1V11"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { MoreIcon };
