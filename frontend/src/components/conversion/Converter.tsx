import { CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BoardHeader } from "./header/Header";
import { useState } from "react";
import CurrenciesHelperData from "@/lib/currenices.json";

import { AdvanceCombobox, SimpleCombobox } from "./combobox";

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
import Spinner from "../Spinner";
import { cn, disableConvertButton, getSelectionValues } from "@/lib/utils";
import { useCustomForm, useApi } from ".";
import { SideIcon } from "./combobox/SideIcon";

export default function Converter() {
  const { form } = useCustomForm();
  const { crypto, fiat, fetchConversionAmount } = useApi();
  const [targetLoading, setTargetLoading] = useState(false);

  const handleConvert = () => {
    setTargetLoading(true);
    fetchConversionAmount({
      source: form.getValues("source"),
      target: form.getValues("target"),
      amount: form.getValues("amount"),
    })
      .then((rate) => {
        if (rate) {
          form.setValue("resultAmount", rate.resultAmount);
        }
      })
      .finally(() => setTargetLoading(false));
  };

  const { currentSelectedSource, currentSelectedTarget } = getSelectionValues({
    crypto,
    fiat,
    form,
    currencyHelper: CurrenciesHelperData,
  });

  return (
    <Card className="w-fit h-fit max-w-lg bg-[rgba(188,188,188,0.1)] dark:bg-[rgba(85,83,83,0.1)]">
      <BoardHeader />
      <CardContent className="space-y-4">
        <Form {...form}>
          <form
            // onReset={() => form.reset()}
            className="w-full space-y-4"
          >
            <FormField
              control={form.control}
              name="source"
              render={({ field }) => (
                <FormItem className="space-x-2">
                  <FormLabel className="text-lg">Source Crypto:</FormLabel>
                  <FormControl>
                    <AdvanceCombobox
                      focus={!form.getValues("source")}
                      currencies={crypto}
                      name={field.name}
                      value={field.value}
                      onChange={field.onChange}
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
                    <div className="h-[48px] flex justify-center rounded-sm items-center gap-1 p-1">
                      <div className="w-[48px] h-full border-[1px] border-[rgb(250, 250, 250, 0.1)] rounded-sm flex justify-center items-center text-sm">
                        <SideIcon
                          image={currentSelectedSource?.image}
                          symbol={currentSelectedSource?.symbol}
                        />
                      </div>
                      <Input
                        id="amount"
                        placeholder="Enter amount"
                        type="number"
                        className={cn("flex-1 rounded-sm h-full")}
                        {...field}
                        disabled={form.getValues("source").length < 1}
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
              name="target"
              render={({ field }) => (
                <FormItem className="space-x-2">
                  <FormLabel className="text-lg">Target Currency:</FormLabel>
                  <FormControl>
                    <SimpleCombobox
                      currencies={fiat}
                      name={field.name}
                      onChange={(val) => {
                        field.onChange(val);
                        form.resetField("resultAmount");
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
              name="resultAmount"
              render={({ field }) => (
                <FormItem className="space-x-2">
                  <FormControl>
                    <div className="h-[48px] w-full flex font-extrabold border-[0px] p-1 justify-center rounded-sm ring-[0px] gap-1">
                      <div className="w-[48px] h-full border-[1px] border-[rgb(250, 250, 250, 0.1)] rounded-sm flex justify-center items-center">
                        <SideIcon
                          symbol={
                            currentSelectedTarget.icon ||
                            currentSelectedTarget.symbol.toUpperCase()
                          }
                        />
                      </div>
                      <Label className="flex flex-1 items-center justify-center border-[1px] p-1 rounded-sm border-[rgb(250, 250, 250, 0.1)]">
                        {targetLoading ? (
                          <Spinner />
                        ) : form.getValues("source") ? (
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

            <div className="flex justify-center space-x-2">
              {/* <Button variant="outline" type="reset" className="">
                Reset
              </Button> */}
              <Button
                disabled={disableConvertButton(targetLoading, form)}
                variant="outline"
                type="button"
                onClick={handleConvert}
                className=""
              >
                Convert
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
