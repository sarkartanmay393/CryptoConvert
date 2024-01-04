import { Button } from "@/components/ui/button";
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
import { CryptoCurrency } from "@/lib/types";
import { useState } from "react";

type Props = {
  name: string;
  value: string;
  onChange: (event: string) => void;
  currencies: CryptoCurrency[];
  focus?: boolean;
};

export function AdvanceCombobox({
  name,
  value,
  onChange,
  currencies = [],
  focus = false,
}: Props) {
  const [open, setOpen] = useState(false);

  // to display on trigger components(e.g.btn)
  const currentSelection = currencies.find((c) => c.id === value);

  return (
    <Popover key={name} open={open} onOpenChange={setOpen}>
      <PopoverTrigger key={name} id={name} asChild>
        <Button
          role="combobox"
          variant="outline"
          aria-expanded={open}
          className={`w-[200px] justify-between ${focus && `border-green-500`}`}
        >
          {/* {currentSelection?.image && (
            <SmallIcon
              image={currentSelection.image}
              symbol={currentSelection.symbol}
            />
          )} */}
          {value ? currentSelection?.name : `Select ${name?.toLowerCase()}...`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent id={name} className="w-[180px] h-[300px] p-0">
        <Command>
          <CommandInput placeholder={`Search ${name?.toLowerCase()}...`} />
          <CommandEmpty>{`No ${name?.toLowerCase()} found.`}</CommandEmpty>
          <CommandGroup className="overflow-scroll">
            {currencies.map((c, i) => (
              <CommandItem
                key={i}
                value={c.id}
                onSelect={(currentValue) => {
                  onChange(currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4 text-black dark:text-white ",
                    value === c.id ? "opacity-100" : "opacity-0"
                  )}
                />
                {/* {c.icon && <SmallIcon iconTxt={c.icon} />} */}
                {c.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
