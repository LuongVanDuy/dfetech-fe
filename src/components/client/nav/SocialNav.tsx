import Image from "next/image";

interface SocialItem {
  name: string;
  icon: string;
  url: string;
}

interface SocialNavProps {
  socials: SocialItem[];
}

const SocialNav: React.FC<SocialNavProps> = ({ socials }) => {
  return (
    <div className="fixed bottom-[24px] right-[0px] z-[999] hidden md:block border-t-[1px] border-b-[1px] border-l-[1px] p-[24px] rounded-tl-[24px] rounded-bl-[24px] border-solid border-[rgba(255,255,255,0.05)]">
      {socials.map((social) => (
        <div
          key={social.name}
          className="group relative flex items-center gap-2 mb-2 cursor-pointer justify-end"
        >
          <span
            className="socials-after rounded-[8px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] bg-[rgba(255,255,255,1)] text-[rgba(33,37,41,1)] text-[12px] leading-[16px] tracking-[0.48px] opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-300 ease-in-out absolute right-[56px]"
            onClick={() => (window.location.href = social.url)}
          >
            {social.name}
          </span>
          <Image src={social.icon} width={48} height={48} alt={social.name} />
        </div>
      ))}
    </div>
  );
};

export default SocialNav;
