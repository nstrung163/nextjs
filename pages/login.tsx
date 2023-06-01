import authApi from "@/api-client/auth-api";

function Login() {
  async function handleLogin() {
    try {
      authApi.login({
        username: "nst163",
        password: "123346",
      });
      console.log("Login successful");
    } catch (error) {
      console.log("login failed due to error", error);
    }
  }
  async function handleLogout() {
    try {
      authApi.logout();
      console.log("Logout successful");
    } catch (error) {
      console.log("Logout failed due to:", error);
    }
  }
  async function handleProfile() {
    try {
      authApi.getProfile();
      console.log("Get profile successful");
    } catch (error) {
      console.log("Get profile failed due to", error);
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleProfile}>Get Profile</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Login;
