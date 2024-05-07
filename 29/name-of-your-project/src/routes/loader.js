export const loader = async () => {
  const getPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await getPosts.json();
  return { posts: data };
};
