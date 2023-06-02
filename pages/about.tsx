// import Header from "@/components/common/header";
import AdminLayout from "@/components/layout/admin";
import MainLayout from "@/components/layout/main";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Header = dynamic(() => import("@/components/common/header"), {
  ssr: false,
});
export default function About() {
  const router = useRouter();
  const [postList, setPostList] = useState([]);
  console.log("About query", router.query);
  const page = router.query?.page;
  useEffect(() => {
    if (!page) return;
    (async () => {
      const response = await fetch(
        `https://js-post-api.herokuapp.com/api/posts?_page=${page}`
      );
      const dataResponse = await response.json();
      setPostList(dataResponse.data);
    })();
  }, [page]);

  const handleNextPage = () => {
    router.push(
      {
        pathname: "/about",
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  };

  return (
    <Container maxWidth="sm">
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          About
        </Typography>
        <p>Query: {JSON.stringify(router.query)}</p>
        <ul>
          {postList.map((post: any) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
        <button onClick={handleNextPage}>Next page</button>
      </Box>
    </Container>
  );
}

About.Layout = AdminLayout;

export async function getStaticProps() {
  console.log("----GET STATIC PROPS");
  return {
    props: {},
  };
}
