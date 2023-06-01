import { LoginPayload } from "@/models";
import axiosClient from "./axios-client";

const authApi = {
  login(payload: LoginPayload) {
    axiosClient.post("/login", payload);
  },
  logout() {
    axiosClient.post("/logout");
  },
  getProfile() {
    axiosClient.get("/profile");
  },
};

export default authApi;
