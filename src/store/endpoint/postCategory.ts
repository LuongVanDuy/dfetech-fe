export default {
  fetchPostCategories: () => "post/categories",
  fetchPostCategory: (id: string) => `post/categories/${id}`,
  createPostCategory: () => "post/categories",
  updatePostCategory: (id: string) => `post/categories/${id}`,
};
