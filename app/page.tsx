import CardBox from "@/components/CardBox";
import FlexCard from "@/components/FlexCard";
import { dataUserAccountMedia } from "@/data";
function Home() {
  return (
    <section className="p-3 xl:px-20">
      <div className="cards relative grid grid-cols-1 gap-3 xl:grid-cols-4">
        {dataUserAccountMedia.user.map((item) => {
          return <CardBox key={item.platform} {...item} />;
        })}
      </div>

      <div className="overview my-20">
        <h1 className=" text-xl lg:text-2xl py-4 font-bold">
          Overview - Today
        </h1>
        <div className=" grid grid-cols-1 gap-3 xl:grid-cols-2">
          {dataUserAccountMedia.userView.map((item) => {
            return <FlexCard key={item.platform} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Home;
