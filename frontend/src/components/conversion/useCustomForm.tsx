import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const formSchema = z.object({
  source: z.string().min(1, "Must choose a source"),
  target: z.string().min(1),
  amount: z.number().nonnegative().min(1),
  resultAmount: z.number(),
});

export function useCustomForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      source: "",
      target: "usd",
      amount: 1,
      resultAmount: 0,
    },
  });

  return { form };
}
