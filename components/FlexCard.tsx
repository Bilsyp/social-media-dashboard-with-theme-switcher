import { UserView } from "@/types";
import { Card, CardTitle } from "./ui/card";
import SmallCard from "./SmallCard";

function FlexCard({ page, likes, platform }: UserView) {
  return (
    <div className="FlexCard  grid xl:grid-cols-2 gap-3">
      <SmallCard platform={platform} {...page} />
      <SmallCard platform={platform} {...likes} />
    </div>
  );
}

export default FlexCard;
