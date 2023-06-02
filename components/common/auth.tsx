import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

interface AuthProps {
  children: any;
}
export default function Auth({ children }: AuthProps) {
  const router = useRouter();
  const { profile, isFirstLoading } = useAuth();

  useEffect(() => {
    if (!isFirstLoading && !profile?.username) router.push("/login");
  }, [router, profile, isFirstLoading]);

  if (!profile?.username) return <p>Loading</p>;

  return <div>{children}</div>;
}
