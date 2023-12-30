import { ConversionBoard } from "@/components/conversion";
import { Button } from "@/components/ui/button";
import { toggleTheme } from "@/lib/theming";

import { SunIcon, MoonIcon } from "lucide-react";

export default function Homepage() {
  return (
    <div className="container h-full flex items-center justify-center">
      <Button
        className="fixed z-10 right-0 top-0 m-4"
        variant="outline"
        onClick={toggleTheme}
      >
        <SunIcon className="dark:hidden" />
        <MoonIcon className="hidden dark:flex" />
      </Button>
      <ConversionBoard />
    </div>
  );
}
