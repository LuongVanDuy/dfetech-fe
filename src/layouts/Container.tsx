interface ContainerProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  fullWidth = false,
}) => {
  return (
    <div className={`${fullWidth ? "w-full" : "container"}`}>{children}</div>
  );
};

export default Container;
