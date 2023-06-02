import authApi from "@/api-client/auth-api";
import useSWR from "swr";
export function useAuth(options?: Partial<any>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/profile", {
    dedupingInterval: 60 * 60 * 1000, // 1hr
    revalidateOnFocus: false,
    ...options,
  });

  async function login() {
    await authApi.login({
      username: "nst163",
      password: "password",
    });
    await mutate();
  }

  async function logout() {
    await authApi.logout();
    await mutate({}, false);
  }

  return {
    profile,
    error,
    login,
    logout,
  };
}
