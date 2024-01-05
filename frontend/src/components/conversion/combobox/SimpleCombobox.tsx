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
import { useState } from "react";

type Props = {
  name: string;
  value: string;
  onChange: (event: string) => void;
  currencies: string[];
};

export function SimpleCombobox({
  name,
  onChange,
  value,
  currencies = [],
}: Props) {
  const [open, setOpen] = useState(false);

  // to display on trigger components(e.g.btn)
  const currentSeletection =
    (currencies.length > 0 && currencies.find((c) => c === value)) || "";

  return (
    <Popover key={name} open={open} onOpenChange={setOpen}>
      <PopoverTrigger key={name} id={name} asChild>
        <Button
          role="combobox"
          variant="outline"
          aria-expanded={open}
          className={`w-[200px] justify-between ${false && `border-green-500`}`}
        >
          {value
            ? currentSeletection.toUpperCase()
            : `Select ${name?.toLowerCase()}...`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent id={name} className="w-[180px] h-[300px] p-0">
        <Command>
          <CommandInput placeholder={`Search ${name?.toLowerCase()}...`} />
          <CommandEmpty>{`No ${name?.toLowerCase()} found.`}</CommandEmpty>
          <CommandGroup className="overflow-scroll">
            {currencies.length > 0 &&
              currencies.map((c, i) => (
                <CommandItem
                  key={i}
                  value={c}
                  onSelect={(currentValue) => {
                    onChange(currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4 text-black dark:text-white ",
                      value === c ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {c.toUpperCase()}
                </CommandItem>
              ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
