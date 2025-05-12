import Link from "next/link";

export type TabLinkProps = {
    tabs: { name: string; href: string }[];
    pathname: string;
}
const TabLink = (props: TabLinkProps) => {
    const { pathname, tabs = [] } = props;
    console.log({ pathname });

    return tabs.map((tab, index) => (
        <Link key={tab.href} href={tab.href}>
            <button
                type="button"
                className={`md:p-[40px] sm:p-[20px] border-[1px] ${index < tabs.length - 1 ? "border-r-[1px]" : ""
                    } ${pathname === tab.href ? "bg-[#fff]" : "bg-transparent"
                    }`}
            >
                {tab.name}
            </button>
        </Link>
    ))
}

export default TabLink;