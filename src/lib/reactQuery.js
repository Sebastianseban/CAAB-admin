import { QueryClient } from "@tanstack/react-query";

// You can tweak retry, cacheTime, etc. here
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // retry failed requests once
      refetchOnWindowFocus: false, // disable refetch when switching tabs
      staleTime: 1000 * 60 * 5, // cache for 5 minutes
    },
  },
});
