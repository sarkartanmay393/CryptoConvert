import { CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BoardHeader from "./Header";
import { useEffect, useState } from "react";

import Combobox from "./Combobox";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "../ui/separator";
import { Label } from "@radix-ui/react-label";
import useCBForm from "./useCBForm";
import useCurrencydata from "./useCurrencydata";
import Spinner from "../Spinner";
import { cn } from "@/lib/utils";

export default function ConversionBoard() {
  const { form } = useCBForm();
  const [sourceFactor, setSourceFactor] = useState<number>(1);
  const [targetLoading, setTargetLoading] = useState(false);
  const {
    crypto,
    loadCrypto,
    fiatCurrencies,
    fetchDiffCurrencyFactor,
    targetFactor,
  } = useCurrencydata();

  useEffect(() => {
    loadCrypto();
  }, []);

  useEffect(() => {
    const amount = form.getValues("amount");
    form.setValue("conversionResult", sourceFactor * amount * targetFactor);
  }, [form, sourceFactor, targetFactor]);

  return (
    <Card className="w-fit h-fit max-w-lg bg-[rgba(188,188,188,0.1)] dark:bg-[rgba(85,83,83,0.1)]">
      <BoardHeader />
      <CardContent className="space-y-4">
        <Form {...form}>
          <form onReset={() => form.reset()} className="w-full space-y-4">
            <FormField
              control={form.control}
              name="sourceCrypto"
              render={({ field }) => (
                <FormItem className="space-x-2">
                  <FormLabel className="text-lg">Source Crypto:</FormLabel>
                  <FormControl>
                    <Combobox
                      focus={!form.getValues("sourceCrypto")}
                      currencyData={crypto}
                      name={field.name}
                      value={field.value}
                      onChange={(val) => {
                        field.onChange(val);
                        const usdf = crypto.find(
                          (c) => c.symbol.toLowerCase() === val
                        )?.quote.USD.price;
                        setSourceFactor((sf) => usdf || sf);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="space-x-2">
                  <FormControl>
                    <div
                      className={cn(
                        `h-[48px] flex justify-center rounded-sm items-center gap-1 p-1`,
                        form.getValues("sourceCrypto") &&
                          `ring-[1px] ring-green-400`
                      )}
                    >
                      <div
                        className={cn(
                          "w-[48px] h-full border-[1px] border-[rgb(250, 250, 250, 0.1)] rounded-sm flex justify-center items-center text-sm"
                        )}
                      >
                        {form.getValues("sourceCrypto") || "-"}
                      </div>
                      <Input
                        id="amount"
                        placeholder="Enter amount"
                        type="number"
                        className={cn("flex-1 rounded-sm h-full")}
                        {...field}
                        onChange={(e) => {
                          if (form.getValues("sourceCrypto")) {
                            field.onChange(e);
                            const amount = e.target.value;
                            form.setValue(
                              "conversionResult",
                              sourceFactor * Number(amount)
                            );
                          }
                        }}
                        // disabled={!form.getValues("sourceCrypto")}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator />

            <FormField
              control={form.control}
              name="targetCurrency"
              render={({ field }) => (
                <FormItem className="space-x-2">
                  <FormLabel className="text-lg">Target Currency:</FormLabel>
                  <FormControl>
                    <Combobox
                      title="Currency"
                      currencyData={fiatCurrencies}
                      name={field.name}
                      onChange={(val) => {
                        setTargetLoading(true);
                        fetchDiffCurrencyFactor(val).then(() => {
                          setTargetLoading(false);
                        });
                        field.onChange(val);
                      }}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="conversionResult"
              render={({ field }) => (
                <FormItem className="space-x-2">
                  <FormControl>
                    <div
                      id="conversionResult"
                      className={
                        "w-full flex font-extrabold border-[1px] p-2 justify-center rounded-sm ring-[1px]"
                      }
                    >
                      <Label>
                        {targetLoading ? (
                          <Spinner />
                        ) : form.getValues("sourceCrypto") ? (
                          field.value.toLocaleString("en-US")
                        ) : (
                          0
                        )}
                      </Label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center">
              <Button variant="outline" type="reset" className="">
                Reset
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
