import classNames from "classnames";

interface ContainerProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  fullWidth = false,
  className = ""
}) => {
  return (
    <div className={classNames(`${fullWidth ? "w-full" : "container"}`, className)}>{children}</div>
  );
};

export default Container;
