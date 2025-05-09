"use client";

import { ReactNode } from "react";
import { Toaster } from "sonner";
import { ThemeProvider } from "./theme-provider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster
        position="top-center"
        duration={3000}
        toastOptions={{
          className:
            "backdrop-blur-md bg-white/30 dark:bg-slate-800/30 text-gray-900 dark:text-white px-5 py-4 rounded-2xl shadow-2xl border border-purple-700/40 dark:border-slate-700/40 font-medium transition-all duration-300",
          style: {
            fontSize: "0.95rem",
            fontFamily: "var(--font-sans)",
            WebkitBackdropFilter: "blur(10px)",
          },
        }}
      />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
