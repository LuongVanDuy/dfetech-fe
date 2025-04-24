export default {
  pageList: () => "pages",
  pageDetail: (id: string) => `pages/${id}`,
  pageUpdate: (id: string) => `pages/${id}`,
  pageDetailClient: (id: string, code: string) =>
    `public/pages?pageSlug=${id}&langCode=${code}`,
};
