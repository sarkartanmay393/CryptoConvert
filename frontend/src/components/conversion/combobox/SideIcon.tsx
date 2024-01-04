import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  image?: string;
  symbol?: string;
};

export const SideIcon = ({ image, symbol }: Props) => {
  return (
    <div className={"w-full h-full flex justify-center items-center"}>
      {symbol && (
        <Avatar className={`${!image && "w-full h-full"}`}>
          <AvatarImage src={image} />
          <AvatarFallback className="font-normal">{symbol}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};
