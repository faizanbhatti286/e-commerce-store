import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <div className="px-5 w-[247px] h-[90px] opacity-100 gap-[20px] mt-4">
      <h1 className="font-bold mb-4 mt-1 text-xl">Price</h1>
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn("w-full", className)} // Slider width takes 100% of the container
        {...props}
      />
      <div className="flex justify-between items-start">
        <h1 className="font-bold">$50</h1>
        <h1 className="font-bold">$100</h1>
      </div>
    </div>
  );
}

