interface Section {
  id: string;
  label: string;
}

interface ScrollNavProps {
  handleScrollToSection: (sectionId: string) => void;
  sections: Section[];
}

const ScrollNav: React.FC<ScrollNavProps> = ({
  handleScrollToSection,
  sections,
}) => {
  return (
    <div className="fixed top-[250px] right-[24px] z-[999] hidden md:block">
      {sections.map(({ id, label }) => (
        <div
          key={id}
          className="group flex items-center gap-2 mb-2 cursor-pointer justify-end"
          onClick={() => handleScrollToSection(id)}
        >
          <span className="bg-[rgba(11,14,21,0.6)] backdrop-blur-[16px] pt-1 pr-2 pb-1 pl-2 rounded-[4px] font-medium text-[16px] leading-[24px] text-[rgba(0,224,127,1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:block">
            {label}
          </span>
          <div className="w-[8px] h-[32px] bg-[rgba(11,14,21,0.4)] border-[1px] border-[rgba(155,224,118,1)] rounded-[21px] group-hover:bg-[rgba(224,246,209,1)]"></div>
        </div>
      ))}
    </div>
  );
};

export default ScrollNav;
