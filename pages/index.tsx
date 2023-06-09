import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import MainLayout from "@/components/layout/main";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const gotToDetailPost = () => {
    router.push({
      pathname: "/posts/[postId]",
      query: {
        postId: 1,
        ref: "social",
      },
    });
  };
  return <Box>Home page</Box>;
}

Home.Layout = MainLayout;
