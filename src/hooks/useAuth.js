import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/authApi";
import { useAuthStore } from "../store/authStore";

export const useLogin = () => {
  const setToken = useAuthStore((state) => state.setToken);

  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      setToken(data.token);
    },
  });
};
