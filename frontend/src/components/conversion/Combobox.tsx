import { Button } from "@/components/ui/button";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Cryptocurrency, Faitcurrency } from "@/lib/types";

type CBProps = {
  name: string;
  value: string;
  onChange: (event: string) => void;
  currencyData: Cryptocurrency[] | Faitcurrency[];
  title?: string;
  focus?: boolean;
};

export default function Combobox({
  name,
  value,
  onChange,
  currencyData = [],
  title = "Crypto",
  focus = false,
}: CBProps) {
  const [open, setOpen] = React.useState(false);
  const currencies = currencyData.map((c) => ({
    name: c.name,
    symbol: c.symbol.toLowerCase(),
    icon: c.icon || "",
  }));
  const whatsTheIcon = currencies.find((c) => c.symbol === value)?.icon;
  const whatsTheName = currencies.find((c) => c.symbol === value)?.name;

  return (
    <Popover key={name} open={open} onOpenChange={setOpen}>
      <PopoverTrigger key={name} id={title} asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-[200px] justify-between ${focus && `border-green-500`}`}
        >
          <div
            className={cn(
              !whatsTheIcon && "hidden",
              "w-[24px] h-[24px]  mr-2 flex justify-center items-center"
            )}
          >
            <h3 className="text-black dark:text-white">{whatsTheIcon}</h3>
          </div>
          {value
            ? whatsTheIcon
              ? value.toUpperCase()
              : whatsTheName
            : `Select ${title?.toLowerCase()}...`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent id={title} className="w-[180px] h-[300px] p-0">
        <Command>
          <CommandInput placeholder={`Search ${title?.toLowerCase()}...`} />
          <CommandEmpty>{`No ${title?.toLowerCase()} found.`}</CommandEmpty>
          <CommandGroup className="overflow-scroll">
            {currencies.map((c, i) => (
              <CommandItem
                key={c.symbol + i}
                value={c.icon ? c.symbol : c.name}
                onSelect={(currentValue) => {
                  onChange(c.icon ? currentValue : c.symbol);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4 text-black dark:text-white ",
                    value === c.symbol ? "opacity-100" : "opacity-0"
                  )}
                />
                <div
                  className={cn(
                    !c.icon && "hidden",
                    "w-[24px] h-[24px]  mr-2 flex justify-center items-center"
                  )}
                >
                  <h3 className="text-black dark:text-white">{c.icon}</h3>
                </div>
                {c.icon ? c.symbol.toUpperCase() : c.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
