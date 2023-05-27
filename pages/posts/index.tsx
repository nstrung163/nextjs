import { GetStaticPathsContext, GetStaticProps } from "next";
import React from "react";

interface Post {
  id: string;
  title: string;
}
export interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  console.log(posts);

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostsProps> = async (
  context: GetStaticPathsContext
) => {
  // Run once time in server-side and build time
  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const dataResponse = await response.json();
  const posts = dataResponse.data;
  console.log(posts);
  return {
    props: {
      posts: posts.map((post: Post) => ({ id: post.id, title: post.title })),
    },
  };
};
