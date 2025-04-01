import CustomButton from "../button";

interface MainTitleProps {
  title?: string;
  subTitle?: string;
  description?: string;
  link?: string;
  linktext?: string;
  className?: string;
  type?: string;
}

const MainTitle: React.FC<MainTitleProps> = ({
  title,
  subTitle,
  description,
  link,
  linktext,
  className,
  type,
}) => {
  return (
    <div className={className}>
      {subTitle && (
        <span className="block mb-[8px] leading-[20px] text-[#2C7656]">
          {subTitle}
        </span>
      )}
      {title && (
        <h2
          className={`text-[#fff] mb-[24px] ${
            type === "small"
              ? "font-medium text-[40px] leading-[48px] sm:text-[32px] sm:leading-[38px]"
              : "md:text-[48px] sm:text-[40px] leading-[48px]"
          }`}
        >
          {title}
        </h2>
      )}

      {description && (
        <p className="md:text-[18px] leading-[26px] text-[#ADB5BD] mb-[48px]">
          {description}
        </p>
      )}
      {link && <CustomButton type="primary">{linktext}</CustomButton>}
    </div>
  );
};

export default MainTitle;
