import { useAuth } from "@/hooks";

function Login() {
  const { profile, login, logout, error } = useAuth({
    revalidateOnMount: false,
  });

  async function handleLogin() {
    try {
      await login();
      console.log("Login successful redirect to dashboard");
    } catch (error) {
      console.log("login failed due to error", error);
    }
  }
  async function handleLogout() {
    try {
      await logout();
      console.log("Logout successful redirect to login page");
    } catch (error) {
      console.log("Logout failed due to:", error);
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Login;
