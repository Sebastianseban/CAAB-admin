
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/authApi";
import { useAuthStore } from "../store/authStore";

export const useLogin = () => {
  const setToken = useAuthStore((state) => state.setToken);

  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      // token is inside data.data.token
      const token = data?.data?.token;

      if (token) {
        localStorage.setItem("token", token);
        setToken(token);
      }
    },
  });
};
