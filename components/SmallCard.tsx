import Image from "next/image";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { capitalizeFirstLetter, formatCounter } from "@/lib/utils";

function SmallCard({
  viewType,
  platform,
  counter,
  view,
}: {
  view: number;
  platform: string | undefined;
  counter: number;
  viewType: string;
}) {
  const views = formatCounter(view);
  const count = formatCounter(counter);
  return (
    <div className="smallCard">
      <Card className="p-5  bg-light_grayish_blue_card_bg  dark:bg-very_dark_blue_top_bg_pattern relative overflow-clip cursor-pointer hover:bg-[#e1e3f0] duration-500 dark:hover:bg-[#333a56] ">
        <div className="flex justify-between items-center">
          <CardTitle className=" text-dark_grayish_blue_text font-semibold">
            {capitalizeFirstLetter(viewType.split(" "))}
          </CardTitle>
          <Image
            width={20}
            height={20}
            priority
            src={`/images/icon-${platform}.svg`}
            alt={platform as string}
          />
        </div>
        <div className="flex mt-4 justify-between items-center">
          <h1 className=" text-very_dark_blue_text font-bold dark:text-white text-3xl lg:text-4xl">
            {views.value}
          </h1>
          <div className="counter flex justify-center  items-center gap-1">
            <Image
              src={
                counter >= 0 ? "/images/icon-up.svg" : "/images/icon-down.svg"
              }
              width={10}
              height={10}
              className="  w-auto h-auto"
              alt={platform as string}
              priority
            />
            <h3
              className={`${
                counter > 0 ? "text-lime_green" : "text-bright_red"
              } text-[0.89rem] py-3 font-bold`}
            >
              {count.value}%
            </h3>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default SmallCard;
