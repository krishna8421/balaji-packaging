"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { FiSun } from "react-icons/fi";
import { HiMiniMoon } from "react-icons/hi2";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Button
        isIconOnly
        variant="ghost"
        aria-label="Theme switcher"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <FiSun /> : <HiMiniMoon />}
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
