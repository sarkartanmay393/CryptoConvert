import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const formSchema = z.object({
  sourceCrypto: z.string().min(1, "Must choose a source"),
  targetCurrency: z.string().min(1),
  amount: z.number().min(1),
  conversionResult: z.number(),
});
export default function useCBForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sourceCrypto: "",
      targetCurrency: "USD",
      amount: 1,
      conversionResult: 0,
    },
  });

  return { form };
}
