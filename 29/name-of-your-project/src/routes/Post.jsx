import { useParams, redirect } from "react-router-dom";
import { useState, useEffect } from "react";

const fetchPost = async (id) => {
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await responce.json();
  return data;
};

export const Post = () => {
  const [post, setPost] = useState({});
  const [loader, setLoader] = useState(false);

  const { postId } = useParams();

  useEffect(() => {
    const getPost = async () => {
      setLoader(true);
      try {
        const post = await fetchPost(postId);
        setPost(post);
      } catch (err) {
        redirect("/help");
      } finally {
        setLoader(false);
      }
    };

    getPost();
  }, [postId]);

  useEffect(() => {
    console.log("useEffect []");
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <div className={`post-wrapper ${loader ? "isLoading" : ""}`}>
      {loader ? (
        <p>loading ...</p>
      ) : (
        <div className="post">
          <p>{post.id}</p>
          <h3>{post.title}</h3>
        </div>
      )}
    </div>
  );
};
