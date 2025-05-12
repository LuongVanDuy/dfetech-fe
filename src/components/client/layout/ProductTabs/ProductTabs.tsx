import { useParams, usePathname } from "next/navigation";
import TabLink from "../../TabLink/TabLink";
import Container from "../Container";

const ProductTabs = () => {
    const pathname = usePathname();
    const _locale = useParams().locale;

    const locale = typeof _locale === "string" ? _locale : "en";

    const tabs = [
        { name: "Overview", href: "/overview" },
        { name: "Capabilities", href: "/capabilities" },
        { name: "Resources & Events", href: "/resourse" },
    ];

    return <section>
        <div className="bg-[#F8F9FA]">
            <Container>
                <div className="flex md:justify-start sm:justify-between">
                    <TabLink
                        tabs={tabs}
                        pathname={pathname.split(locale).slice(1).join(locale)}
                    />
                </div>
            </Container>
        </div>
    </section>
};

export default ProductTabs;