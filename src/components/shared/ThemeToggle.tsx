import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/theme-provider";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9 rounded-full bg-accent/50 hover:bg-accent transition-all duration-300"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-primary animate-fade-in" />
      ) : (
        <Moon className="h-5 w-5 text-primary animate-fade-in" />
      )}
    </Button>
  );
};

export default ThemeToggle;
