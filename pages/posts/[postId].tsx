import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import { useRouter } from "next/router";
import React from "react";

interface PostItemProps {
  post: any;
}

export default function PostItem({ post }: PostItemProps) {
  const router = useRouter();
  const isLoading = router.isFallback;
  console.log("PostItem: isLoading", isLoading);
  if (isLoading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }
  return (
    <div>
      <h1>Post Item</h1>
      <p>Title: {post.title}</p>
      <p>Author: {post.author}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async (
  context: GetStaticPathsContext
) => {
  console.log("getStaticPaths");
  // Run this before running getStaticProps
  console.log("\n----- GET STATIC PATHS-----");
  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const dataRes = await response.json();
  return {
    paths: dataRes.data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<PostItemProps> = async (
  context: GetStaticPropsContext
) => {
  console.log("\n----- GET STATIC PROPS-----");
  const postId = context.params?.postId;
  if (!postId) return { notFound: true };
  const response = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  );

  const post = await response.json();

  return {
    props: {
      post: post,
    },
    revalidate: 5,
  };
};
