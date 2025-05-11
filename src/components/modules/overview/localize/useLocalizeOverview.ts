import { useParams } from "next/navigation";
import _localize from "./localize-overview.json";
const localize = _localize as Record<string, LocalizeOverview>;

export type LocalizeOverview = typeof _localize["en"];

const useLocalizeOverview = (_locale?: string, defaultLocale = "en") => {
    const paramLocale = useParams().locale;
    const locale = _locale || (typeof paramLocale === "string" ? paramLocale : defaultLocale) || defaultLocale;
    const dataLocalize = localize[locale] || localize[defaultLocale] as LocalizeOverview;
    return dataLocalize;
}

export default useLocalizeOverview