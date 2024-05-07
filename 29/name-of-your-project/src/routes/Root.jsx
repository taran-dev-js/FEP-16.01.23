import { Outlet, Link, useLoaderData } from "react-router-dom";

export const Root = () => {
  const { posts } = useLoaderData();

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>

          <li>
            <Link to={"/help"}>Help</Link>
          </li>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`post/${post.id}`}>Post {post.id}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
