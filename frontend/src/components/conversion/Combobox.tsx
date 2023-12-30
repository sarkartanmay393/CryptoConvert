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
    // we dont know what types of currency data it is
    name: c.name,
    symbol: c.symbol.toLowerCase(),
    icon: c.icon,
  }));

  // to display on trigger components(e.g.btn)
  const currentItem = currencies.find((c) => c.symbol === value);

  return (
    <Popover key={name} open={open} onOpenChange={setOpen}>
      <PopoverTrigger key={name} id={title} asChild>
        <Button
          role="combobox"
          variant="outline"
          aria-expanded={open}
          className={`w-[200px] justify-between ${focus && `border-green-500`}`}
        >
          {currentItem?.icon && <SmallIcon iconTxt={currentItem.icon} />}
          {value ? currentItem?.name : `Select ${title?.toLowerCase()}...`}
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
                {c.icon && <SmallIcon iconTxt={c.icon} />}
                {c.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

const SmallIcon = ({ iconTxt }: { iconTxt: string }) => {
  return (
    <div className={"w-[24px] h-[24px] mr-2 flex justify-center items-center"}>
      <h3 className="text-black dark:text-white">{iconTxt}</h3>
    </div>
  );
};
