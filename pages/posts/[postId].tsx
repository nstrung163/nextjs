import { useRouter } from "next/router";
import React from "react";

export default function PostItem() {
  const router = useRouter();
  return (
    <div>
      <h1>Post Item</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}
