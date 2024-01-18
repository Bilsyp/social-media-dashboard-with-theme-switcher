"use client";

import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const handle = (checked: boolean) => {
    if (checked) setTheme("dark");
    else setTheme("light");
  };
  return (
    <Switch
      className="   bg-gradient-to-r from-lime_green to-primary transition-all  duration-700"
      onCheckedChange={handle}
      id="airplane-mode"
    />
  );
}
