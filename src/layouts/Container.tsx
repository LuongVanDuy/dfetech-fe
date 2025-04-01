interface ContainerProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  fullWidth = false,
}) => {
  return (
    <div className={`${fullWidth ? "w-full" : "max-w-[1680px] mx-auto"}`}>
      {children}
    </div>
  );
};

export default Container;
