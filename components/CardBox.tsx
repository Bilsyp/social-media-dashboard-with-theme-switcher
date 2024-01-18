import { UserData } from "@/types";
import { Card } from "./ui/card";
import Image from "next/image";
import { formatCounter } from "@/lib/utils";

function CardBox({
  account,
  platform,
  icon,
  follower,
  followType,
  counter,
  borderTop,
}: UserData) {
  const folow = formatCounter(follower);
  const count = formatCounter(counter);
  const borderTopResult =
    platform == "instagram"
      ? " bg-gradient-to-r from-[rgb(253,196,104)] to-[rgb(223,73,150)]"
      : platform == "facebook"
      ? "bg-[rgb(25,143,245)]"
      : platform == "twitter"
      ? "bg-[rgb(28,160,242)]"
      : "bg-[rgb(196,3,42)]";
  return (
    <div className="card-container text-center">
      <Card className="p-3 bg-light_grayish_blue_card_bg  dark:bg-very_dark_blue_top_bg_pattern relative overflow-clip cursor-pointer hover:bg-[#e1e3f0] duration-500 dark:hover:bg-[#333a56]">
        <div className=" flex justify-center items-center gap-3">
          <Image
            priority
            src={`/images${icon}`}
            width={20}
            height={20}
            className="w-auto h-auto"
            alt={platform}
          />
          <h5 className=" text-dark_grayish_blue_text font-semibold inline-flex">
            {account}
          </h5>
        </div>
        <h1 className="text-3xl font-bold dark:text-white  text-very_dark_blue_text py-3 xl:text-6xl">
          {folow.value}
        </h1>
        <h2 className="py-1  font-medium text-[1rem]  tracking-[0.38rem] text-dark_grayish_blue_text">
          {followType.toUpperCase()}
        </h2>
        <div className="counter flex justify-center items-center gap-3">
          <Image
            src={counter >= 0 ? "/images/icon-up.svg" : "/images/icon-down.svg"}
            width={10}
            height={10}
            className="  w-auto h-auto"
            alt={icon}
            priority
          />
          <h3
            className={`${
              counter > 0 ? "text-lime_green" : "text-bright_red"
            } text-[1.1rem] py-3 font-bold`}
          >
            {count.value} Today
          </h3>
        </div>
        <span
          className={`  ${borderTopResult} line h-1   gradi  absolute top-0 left-0 w-full `}
        ></span>
      </Card>
    </div>
  );
}

export default CardBox;
