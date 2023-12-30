import { ConversionBoard } from "@/components/conversion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toggleTheme } from "@/lib/theming";

import { SunIcon, MoonIcon } from "lucide-react";

export default function Homepage() {
  return (
    <div className="container h-full flex flex-col items-center justify-center">
      <div className="h-[64px] w-screen flex items-center fixed top-0 p-2 justify-between">
        <h3 className="font-bold text-3xl ml-10">DZap</h3>
        <Button className=" z-10 m-4" variant="outline" onClick={toggleTheme}>
          <SunIcon className="dark:hidden" />
          <MoonIcon className="hidden dark:flex" />
        </Button>
        <Separator />
      </div>
      <ConversionBoard />
    </div>
  );
}
