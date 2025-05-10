import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";
import { queryClient } from "./lib/queryClient";
import { ThemeProvider } from "./providers/theme-provider";
import router from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
          <Toaster
            position="top-center"
            duration={3000}
            toastOptions={{
              className:
                "backdrop-blur-md bg-white/30 dark:bg-slate-800/30 text-gray-900 dark:text-white px-5 py-4 rounded-2xl shadow-2xl border border-yellow-700/40 dark:border-slate-700/40 font-medium transition-all duration-300",
              style: {
                fontSize: "0.95rem",
                fontFamily: "var(--font-sans)",
                WebkitBackdropFilter: "blur(10px)",
              },
            }}
          />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
